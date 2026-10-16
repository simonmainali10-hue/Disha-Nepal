import test from 'node:test';
import assert from 'node:assert/strict';
import { formatNPR, formatSalaryRange, filterCareers, calculateQuizMatch } from './career-matcher.ts';
import type { Career, QuizQuestion } from '../types/index.ts';

const mockCareers: Career[] = [
  {
    id: 'cs-it',
    title: 'Software Engineering & IT',
    nepaliTitle: 'सफ्टवेयर इन्जिनियरिङ तथा सूचना प्रविधि',
    stream: 'science-physical',
    category: 'Information Technology',
    badge: 'Highest Remote Demand',
    summary: 'Build web, mobile, and AI systems in Nepal or for global clients.',
    overview: 'Complete IT overview...',
    durationYears: 4,
    eligibilityGPA: 2.4,
    minRequirements: 'Min C+ in PCM (+2 Science) or Math for BCA/BIT',
    primaryDegrees: ['BE Computer', 'BSc CSIT', 'BCA', 'BIT'],
    entranceExams: [{ name: 'IOE Entrance', conductingBody: 'Tribhuvan University', difficulty: 'High', timeline: 'Bhadra / Ashoj' }],
    topCollegesNepal: ['Pulchowk Campus', 'Kathmandu University (KU)', 'Thapathali Campus', 'St. Xavier’s College'],
    benefits: ['High remote earning potential in USD', 'Thriving tech ecosystem in Kathmandu'],
    skillsNeeded: {
      technical: ['Python', 'JavaScript/TypeScript', 'React', 'SQL', 'Git & GitHub'],
      soft: ['Problem Solving', 'English Communication', 'Continuous Self-Learning'],
      tools: ['VS Code', 'Docker', 'Postman', 'Figma']
    },
    salaryNPR: {
      entryMonthly: { min: 35000, max: 60000, label: 'रु ३५,००० - ६०,०००' },
      midMonthly: { min: 80000, max: 180000, label: 'रु ८०,००० - १,८०,०००' },
      seniorMonthly: { min: 200000, max: 450000, label: 'रु २ लाख - ४.५ लाख+' },
      marketDemandRating: 5,
      remoteOpportunities: true,
      freelancePotential: 'Exceptional',
      note: 'Companies like Leapfrog, Cotiviti, Deerhold pay attractive packages in Nepal.'
    },
    motivationFactor: {
      headline: 'Work from Nepal, Earn Worldwide',
      quote: 'Tech is the ultimate equalizer for Nepali youth.',
      author: 'Senior Nepali Engineer',
      storySummary: 'Started from a modest +2 college in Butwal, now leading US engineering teams from Kathmandu.',
      impactInNepal: 'Bringing foreign currency into Nepal and powering the digital nation.'
    },
    mythsAndRealities: [
      { myth: 'You must have IOE Pulchowk or you cannot be a good developer.', reality: 'Portfolio, GitHub, and problem-solving matter far more than college name in modern tech.' }
    ],
    tags: ['coding', 'computers', 'remote', 'technology', 'math'],
    popularQuestions: [
      { question: 'BSc CSIT vs BE Computer: which is better?', answer: 'Both lead to identical software industry jobs in Nepal and abroad.', expertName: 'Er. Ayush Shrestha', expertRole: 'Lead Engineer' }
    ]
  },
  {
    id: 'chartered-accountancy',
    title: 'Chartered Accountancy (CA)',
    nepaliTitle: 'चार्टर्ड एकाउन्टेन्सी (सीए)',
    stream: 'management',
    category: 'Finance & Audit',
    badge: 'Prestigious & High Authority',
    summary: 'The ultimate financial auditor and strategist in corporate Nepal.',
    overview: 'CA overview...',
    durationYears: 5,
    eligibilityGPA: 2.4,
    minRequirements: 'Min C+ in +2 (Management or Science)',
    primaryDegrees: ['ICAN CAP-I, II, III', 'ICAI (India)'],
    entranceExams: [{ name: 'CAP-I Eligibility', conductingBody: 'ICAN (Institute of Chartered Accountants of Nepal)', difficulty: 'Very High', timeline: 'June / December' }],
    topCollegesNepal: ['CCMA Career Corner', 'Prime CA', 'AOC', 'Chanakya CA'],
    benefits: ['Statutory audit signing authority', 'High corporate board prestige'],
    skillsNeeded: {
      technical: ['NFRS / IFRS Standards', 'Nepalese Tax Laws', 'Corporate Auditing', 'Tally Prime', 'Excel Modeling'],
      soft: ['Ethical Integrity', 'Attention to Detail', 'Analytical Acumen'],
      tools: ['Advanced Excel', 'ERP Systems', 'Tally ERP 9']
    },
    salaryNPR: {
      entryMonthly: { min: 50000, max: 90000, label: 'रु ५०,००० - ९०,०००' },
      midMonthly: { min: 100000, max: 250000, label: 'रु १ लाख - २.५ लाख' },
      seniorMonthly: { min: 250000, max: 600000, label: 'रु २.५ लाख - ६ लाख+' },
      marketDemandRating: 5,
      remoteOpportunities: false,
      freelancePotential: 'High',
      note: 'High demand in ' + 'Nepali commercial banks, multinationals, and private audit firms.'
    },
    motivationFactor: {
      headline: 'Financial Architects of Nepal',
      quote: 'Behind every robust bank and company in Nepal stands a sharp CA.',
      author: 'FCA Rohan Acharya',
      storySummary: 'A village student from Jhapa passed ICAN in first attempt and is now CFO of a leading hydropower.',
      impactInNepal: 'Ensuring transparency and financial stability in Nepal’s financial system.'
    },
    mythsAndRealities: [
      { myth: 'Only 1% of students pass CA in Nepal.', reality: 'Passing rate for disciplined students with good articleship training is 20-30%.' }
    ],
    tags: ['finance', 'business', 'auditing', 'management', 'accounts'],
    popularQuestions: [
      { question: 'Should I do ICAN (Nepal) or ICAI (India)?', answer: 'ICAN has direct signing authority in Nepal, while ICAI is recognized in India and Middle East.', expertName: 'CA Rohan Acharya', expertRole: 'FCA' }
    ]
  }
];

const mockQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    step: 1,
    title: 'What subjects in +2 did you enjoy the most?',
    nepaliTitle: 'कक्षा १२ मा तपाईलाई कुन विषय बढी मन पर्थ्यो?',
    subtitle: 'Choose your main interest area',
    options: [
      {
        id: 'opt_tech',
        label: 'Physics, Mathematics & Computer Science',
        description: 'Logical problems, software, coding and calculations',
        streamWeights: { 'science-physical': 3, 'emerging': 2 },
        tags: ['coding', 'computers', 'technology']
      },
      {
        id: 'opt_mgmt',
        label: 'Accountancy, Economics & Business Studies',
        description: 'Money management, business operations and investments',
        streamWeights: { 'management': 3 },
        tags: ['finance', 'business', 'accounts']
      }
    ]
  }
];

test('formatNPR correctly converts numbers to Nepali currency format', () => {
  assert.equal(formatNPR(45000), 'NPR 45,000');
  assert.equal(formatNPR(100000), 'NPR 1 Lakhs');
  assert.equal(formatNPR(250000), 'NPR 2.5 Lakhs');
  assert.equal(formatNPR(500000), 'NPR 5 Lakhs');
});

test('formatSalaryRange formats range properly', () => {
  const result = formatSalaryRange(35000, 60000);
  assert.equal(result, 'NPR 35,000 – NPR 60,000 / month');
});

test('filterCareers filters by search query and stream', () => {
  const techOnly = filterCareers(mockCareers, 'Software', 'all', 'all');
  assert.equal(techOnly.length, 1);
  assert.equal(techOnly[0].id, 'cs-it');

  const mgmtStream = filterCareers(mockCareers, '', 'management', 'all');
  assert.equal(mgmtStream.length, 1);
  assert.equal(mgmtStream[0].id, 'chartered-accountancy');

  const remoteOnly = filterCareers(mockCareers, '', 'all', 'remote-ready');
  assert.equal(remoteOnly.length, 1);
  assert.equal(remoteOnly[0].id, 'cs-it');
});

test('calculateQuizMatch ranks technology career when tech option is selected', () => {
  const answers = { q1: 'opt_tech' };
  const matches = calculateQuizMatch(answers, mockCareers, mockQuestions);
  assert.ok(matches.length > 0);
  assert.equal(matches[0].careerId, 'cs-it');
  assert.ok(matches[0].matchPercentage > 60);
});
