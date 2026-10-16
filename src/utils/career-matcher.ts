import type { Career, CareerMatchScore, QuizQuestion, StreamType } from '../types/index.ts';

/**
 * Formats Nepali Rupee amount in human readable Nepali style (e.g., NPR 45,000 or 1.5 Lakhs)
 */
export function formatNPR(amount: number): string {
  if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `NPR ${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)} Lakhs`;
  }
  return `NPR ${amount.toLocaleString('en-IN')}`;
}

/**
 * Formats a monthly salary range
 */
export function formatSalaryRange(min: number, max: number): string {
  return `${formatNPR(min)} – ${formatNPR(max)} / month`;
}

/**
 * Calculates career recommendations based on student's quiz answers
 */
export function calculateQuizMatch(
  answers: Record<string, string>,
  careers: Career[],
  questions: QuizQuestion[]
): CareerMatchScore[] {
  if (!careers || careers.length === 0) return [];

  // 1. Accumulate stream weights and chosen tag preferences
  const streamScores: Record<string, number> = {
    'science-physical': 0,
    'science-bio': 0,
    'management': 0,
    'humanities': 0,
    'emerging': 0,
  };
  const selectedTags = new Set<string>();

  for (const question of questions) {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) continue;

    const chosenOption = question.options.find(opt => opt.id === selectedOptionId);
    if (!chosenOption) continue;

    chosenOption.tags.forEach(tag => selectedTags.add(tag.toLowerCase()));

    if (chosenOption.streamWeights) {
      for (const [st, wt] of Object.entries(chosenOption.streamWeights)) {
        if (wt && streamScores[st] !== undefined) {
          streamScores[st] += wt;
        }
      }
    }
  }

  // 2. Score each career
  const scoredCareers = careers.map(career => {
    let score = 30; // base score

    // Stream affinity
    const streamWeight = streamScores[career.stream] || 0;
    score += streamWeight * 12;

    // Tag matches
    const matchedTags: string[] = [];
    career.tags.forEach(tag => {
      const lower = tag.toLowerCase();
      if (selectedTags.has(lower)) {
        matchedTags.push(tag);
        score += 8;
      }
    });

    // Market demand boost
    score += (career.salaryNPR.marketDemandRating || 3) * 3;

    // Remote flexibility if student prioritized tech/remote
    if (selectedTags.has('remote') && career.salaryNPR.remoteOpportunities) {
      score += 10;
    }

    // Clamp score between 45% and 99%
    const normalizedPercentage = Math.min(99, Math.max(45, Math.round(score)));

    let reason = `Strong alignment with your interest in ${career.category.toLowerCase()} and high career demand in Nepal.`;
    if (matchedTags.length > 0) {
      reason = `Matches your focus on ${matchedTags.slice(0, 3).join(', ')}.`;
    }

    return {
      careerId: career.id,
      career,
      matchPercentage: normalizedPercentage,
      matchedTags,
      reason,
    };
  });

  // Sort descending by match percentage
  return scoredCareers.sort((a, b) => b.matchPercentage - a.matchPercentage);
}

/**
 * Filter careers by search query, stream, and salary preference
 */
export function filterCareers(
  careers: Career[],
  query: string,
  selectedStream: StreamType,
  salaryBracket: string
): Career[] {
  const cleanQuery = query.trim().toLowerCase();

  return careers.filter(career => {
    // Stream filter
    if (selectedStream !== 'all' && career.stream !== selectedStream) {
      return false;
    }

    // Salary filter
    if (salaryBracket === 'high-starting') {
      if (career.salaryNPR.entryMonthly.min < 35000) return false;
    } else if (salaryBracket === 'high-senior') {
      if (career.salaryNPR.seniorMonthly.min < 150000) return false;
    } else if (salaryBracket === 'remote-ready') {
      if (!career.salaryNPR.remoteOpportunities) return false;
    }

    // Query filter
    if (!cleanQuery) return true;

    const matchesTitle = career.title.toLowerCase().includes(cleanQuery);
    const matchesNepali = career.nepaliTitle.toLowerCase().includes(cleanQuery);
    const matchesCategory = career.category.toLowerCase().includes(cleanQuery);
    const matchesSummary = career.summary.toLowerCase().includes(cleanQuery);
    const matchesDegrees = career.primaryDegrees.some(deg => deg.toLowerCase().includes(cleanQuery));
    const matchesExams = career.entranceExams.some(e => e.name.toLowerCase().includes(cleanQuery));
    const matchesColleges = career.topCollegesNepal.some(c => c.toLowerCase().includes(cleanQuery));
    const matchesTags = career.tags.some(t => t.toLowerCase().includes(cleanQuery));

    return (
      matchesTitle ||
      matchesNepali ||
      matchesCategory ||
      matchesSummary ||
      matchesDegrees ||
      matchesExams ||
      matchesColleges ||
      matchesTags
    );
  });
}

/**
 * Compare two careers side-by-side
 */
export function generateComparisonMetrics(c1: Career, c2: Career) {
  return [
    {
      metric: 'Course Duration in Nepal',
      c1Value: `${c1.durationYears} Years`,
      c2Value: `${c2.durationYears} Years`,
      c1Advantage: c1.durationYears <= c2.durationYears,
    },
    {
      metric: 'Minimum +2 GPA required',
      c1Value: `GPA ${c1.eligibilityGPA.toFixed(1)}+`,
      c2Value: `GPA ${c2.eligibilityGPA.toFixed(1)}+`,
      c1Advantage: c1.eligibilityGPA <= c2.eligibilityGPA,
    },
    {
      metric: 'Starting Monthly Salary (Nepal)',
      c1Value: formatSalaryRange(c1.salaryNPR.entryMonthly.min, c1.salaryNPR.entryMonthly.max),
      c2Value: formatSalaryRange(c2.salaryNPR.entryMonthly.min, c2.salaryNPR.entryMonthly.max),
      c1Advantage: c1.salaryNPR.entryMonthly.min >= c2.salaryNPR.entryMonthly.min,
    },
    {
      metric: 'Senior Monthly Salary (5+ yrs)',
      c1Value: formatSalaryRange(c1.salaryNPR.seniorMonthly.min, c1.salaryNPR.seniorMonthly.max),
      c2Value: formatSalaryRange(c2.salaryNPR.seniorMonthly.min, c2.salaryNPR.seniorMonthly.max),
      c1Advantage: c1.salaryNPR.seniorMonthly.min >= c2.salaryNPR.seniorMonthly.min,
    },
    {
      metric: 'Primary Entrance Exam',
      c1Value: c1.entranceExams.map(e => e.name).join(', ') || 'Direct / Merit',
      c2Value: c2.entranceExams.map(e => e.name).join(', ') || 'Direct / Merit',
      c1Advantage: false,
    },
    {
      metric: 'Remote / Freelance Scope',
      c1Value: c1.salaryNPR.remoteOpportunities ? 'High (Global USD remote)' : 'Low (Physical / Local presence)',
      c2Value: c2.salaryNPR.remoteOpportunities ? 'High (Global USD remote)' : 'Low (Physical / Local presence)',
      c1Advantage: c1.salaryNPR.remoteOpportunities,
    },
    {
      metric: 'Nepal Job Market Demand',
      c1Value: `${c1.salaryNPR.marketDemandRating} / 5 Stars`,
      c2Value: `${c2.salaryNPR.marketDemandRating} / 5 Stars`,
      c1Advantage: c1.salaryNPR.marketDemandRating >= c2.salaryNPR.marketDemandRating,
    },
  ];
}
