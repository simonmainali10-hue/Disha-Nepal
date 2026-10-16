export type StreamType = 
  | 'all'
  | 'science-physical'
  | 'science-bio'
  | 'management'
  | 'humanities'
  | 'emerging';

export interface EntranceExamInfo {
  name: string;
  conductingBody: string;
  difficulty: 'Moderate' | 'High' | 'Very High';
  timeline: string;
  seatsNote?: string;
}

export interface SalaryRange {
  min: number;
  max: number;
  label: string;
}

export interface SalaryStructure {
  entryMonthly: SalaryRange;
  midMonthly: SalaryRange;
  seniorMonthly: SalaryRange;
  overseasAnnualUSD?: SalaryRange;
  marketDemandRating: number; // 1 to 5
  remoteOpportunities: boolean;
  freelancePotential: 'Low' | 'Moderate' | 'High' | 'Exceptional';
  note: string;
}

export interface MotivationStory {
  headline: string;
  quote: string;
  author: string;
  storySummary: string;
  impactInNepal: string;
}

export interface MythVsReality {
  myth: string;
  reality: string;
}

export interface ExpertQnA {
  question: string;
  answer: string;
  expertName: string;
  expertRole: string;
}

export interface Career {
  id: string;
  title: string;
  nepaliTitle: string;
  stream: StreamType;
  category: string;
  badge: string;
  summary: string;
  overview: string;
  durationYears: number;
  eligibilityGPA: number;
  minRequirements: string;
  primaryDegrees: string[];
  entranceExams: EntranceExamInfo[];
  topCollegesNepal: string[];
  benefits: string[];
  skillsNeeded: {
    technical: string[];
    soft: string[];
    tools: string[];
  };
  salaryNPR: SalaryStructure;
  motivationFactor: MotivationStory;
  mythsAndRealities: MythVsReality[];
  tags: string[];
  popularQuestions: ExpertQnA[];
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  role: string;
  organization: string;
  avatar: string;
  stream: StreamType;
  specialization: string;
  nepaliBackground: string;
  yearsExperience: number;
  collegeAlumni: string;
  bio: string;
  keyAdvice: string;
  topicsCanHelpWith: string[];
  rating: number;
  consultationsCount: number;
  availableDays: string[];
  availableSlots: string[];
  languages: string[];
}

export interface BookingSubmission {
  id: string;
  expertId: string;
  expertName: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  stream: string;
  gpa: string;
  date: string;
  timeSlot: string;
  preferredLanguage: string;
  specificDoubt: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending';
}

export interface QuizAnswerOption {
  id: string;
  label: string;
  nepaliLabel?: string;
  description: string;
  streamWeights: Partial<Record<StreamType, number>>;
  tags: string[];
}

export interface QuizQuestion {
  id: string;
  step: number;
  title: string;
  nepaliTitle: string;
  subtitle: string;
  options: QuizAnswerOption[];
}

export interface CareerMatchScore {
  careerId: string;
  career: Career;
  matchPercentage: number;
  matchedTags: string[];
  reason: string;
}
