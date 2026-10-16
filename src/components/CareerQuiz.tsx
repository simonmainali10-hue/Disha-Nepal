import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ArrowRight, ArrowLeft, RotateCcw, 
  HelpCircle, Compass, Award, Building, MessageSquare, X 
} from 'lucide-react';
import type { CareerWithGuide } from '../data/careersData.ts';
import type { QuizQuestion } from '../types/index.ts';
import { calculateQuizMatch } from '../utils/career-matcher.ts';

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1-stream',
    step: 1,
    title: 'Which stream did you study in +2 (or are currently completing)?',
    nepaliTitle: 'Kakhya 12 ma tapai le kun sankaya padhnu bhayo?',
    subtitle: 'This helps us filter eligible entrance exams and degree prerequisites in Nepal.',
    options: [
      {
        id: 'opt-phys',
        label: 'Science (Physical / Mathematics)',
        description: 'Physics, Chemistry, Mathematics, and Computer Science',
        streamWeights: { 'science-physical': 3, 'emerging': 2 },
        tags: ['coding', 'computers', 'technology', 'math', 'engineering', 'civil']
      },
      {
        id: 'opt-bio',
        label: 'Science (Biology)',
        description: 'Physics, Chemistry, Biology, and Botany/Zoology',
        streamWeights: { 'science-bio': 3 },
        tags: ['medical', 'biology', 'health', 'doctor', 'nursing', 'agriculture']
      },
      {
        id: 'opt-mgmt',
        label: 'Management / Commerce',
        description: 'Accountancy, Economics, Business Studies, Computer or Hotel Management',
        streamWeights: { 'management': 3, 'emerging': 1 },
        tags: ['finance', 'accounting', 'business', 'hospitality', 'management']
      },
      {
        id: 'opt-humanities',
        label: 'Humanities, Social Sciences or Law (+2)',
        description: 'Sociology, Mass Communication, Political Science, or Nepalese Law',
        streamWeights: { 'humanities': 3, 'emerging': 1 },
        tags: ['law', 'advocate', 'government', 'public-service', 'justice']
      }
    ]
  },
  {
    id: 'q2-interest',
    step: 2,
    title: 'What kind of work naturally excites you the most?',
    nepaliTitle: 'Tapai lai kasto prakar ko kaam ma badhi ruchi cha?',
    subtitle: 'Listen to your intuition rather than peer pressure.',
    options: [
      {
        id: 'opt-code-tech',
        label: 'Writing code, solving algorithmic puzzles, building apps & websites',
        description: 'Working on laptops, software logic, and modern tech',
        streamWeights: { 'science-physical': 2, 'emerging': 3 },
        tags: ['coding', 'computers', 'remote', 'technology', 'ai']
      },
      {
        id: 'opt-heal-serve',
        label: 'Treating patients, biological sciences, and human health impact',
        description: 'Clinical care, hospitals, and medical research',
        streamWeights: { 'science-bio': 3 },
        tags: ['medical', 'health', 'doctor', 'biology']
      },
      {
        id: 'opt-money-audit',
        label: 'Auditing companies, financial analysis, corporate taxes & banking',
        description: 'Financial models, balance sheets, and boardroom business leadership',
        streamWeights: { 'management': 3 },
        tags: ['finance', 'accounting', 'ca', 'business']
      },
      {
        id: 'opt-court-policy',
        label: 'Legal advocacy, arguing court cases, policy making & public administration',
        description: 'Defending justice, writing laws, or running government offices',
        streamWeights: { 'humanities': 3 },
        tags: ['law', 'government', 'lok-sewa', 'public-service']
      },
      {
        id: 'opt-build-outdoor',
        label: 'Building physical bridges, hydropower dams, or agricultural smart farms',
        description: 'Site engineering, large-scale structures, and sustainable farming',
        streamWeights: { 'science-physical': 2, 'science-bio': 2 },
        tags: ['engineering', 'civil', 'hydropower', 'agriculture', 'forestry']
      }
    ]
  },
  {
    id: 'q3-workstyle',
    step: 3,
    title: 'What is your preferred work style and environment?',
    nepaliTitle: 'Tapai kasto karya-shaili man paraunu huncha?',
    subtitle: 'Where do you envision yourself working every day?',
    options: [
      {
        id: 'opt-remote-hybrid',
        label: 'Remote work from home or modern tech hub with global clients',
        description: 'Freedom of location, flexible hours, and global USD earnings',
        streamWeights: { 'emerging': 3, 'science-physical': 2 },
        tags: ['remote', 'freelance', 'technology', 'design']
      },
      {
        id: 'opt-reputable-stable',
        label: 'Government office or hospital with deep public respect and job security',
        description: 'Singha Durbar, District Administrative Office, or major teaching hospital',
        streamWeights: { 'humanities': 2, 'science-bio': 2 },
        tags: ['government', 'lok-sewa', 'pension', 'medical']
      },
      {
        id: 'opt-corporate-dynamic',
        label: 'High-energy corporate bank, luxury hotel, or private business firm',
        description: 'Meeting corporate clients, international travelers, and managing teams',
        streamWeights: { 'management': 3 },
        tags: ['business', 'hospitality', 'finance']
      }
    ]
  },
  {
    id: 'q4-location',
    step: 4,
    title: 'What are your future geographic and lifestyle ambitions?',
    nepaliTitle: 'Bhabishya ma tapai kaha basera kaam garna chahanu huncha?',
    subtitle: 'Balancing staying in Nepal vs international opportunities.',
    options: [
      {
        id: 'opt-stay-nepal',
        label: 'Stay in Nepal, live near family, and build impactful career here',
        description: 'Contribute to national development and enjoy high local purchasing power',
        streamWeights: { 'management': 2, 'humanities': 2, 'science-physical': 1 },
        tags: ['government', 'infrastructure', 'ca', 'lok-sewa']
      },
      {
        id: 'opt-nepal-global',
        label: 'Based in Nepal, but earning globally or traveling internationally',
        description: 'Remote tech export, international consultancies, or hotel postings',
        streamWeights: { 'emerging': 3, 'science-physical': 2, 'management': 1 },
        tags: ['remote', 'high-salary', 'technology']
      },
      {
        id: 'opt-abroad-later',
        label: 'Study Bachelor in Nepal, then pursue Master’s / PhD scholarships abroad',
        description: 'Build low-cost strong foundation first, then target USA, Europe, or Australia',
        streamWeights: { 'science-physical': 2, 'science-bio': 2 },
        tags: ['engineering', 'medical', 'agriculture']
      }
    ]
  },
  {
    id: 'q5-entrance',
    step: 5,
    title: 'How do you feel about competitive entrance examinations (IOE, CEE, CMAT)?',
    nepaliTitle: 'Pravesh Pariksha (Entrance) bare tapai ko soch k cha?',
    subtitle: 'Helps balance entrance preparation effort with direct-admission degree paths.',
    options: [
      {
        id: 'opt-ready-grind',
        label: 'I am ready to study 8-10 hours daily to crack government merit scholarships',
        description: 'Targeting Pulchowk Campus, Maharajgunj IOM, or B.A. LL.B entrance',
        streamWeights: { 'science-physical': 2, 'science-bio': 2, 'humanities': 2 },
        tags: ['pulchowk', 'cee', 'ioe', 'high-respect']
      },
      {
        id: 'opt-skill-first',
        label: 'I prefer building practical skills and portfolio over memorizing MCQ exams',
        description: 'Degrees like CSIT, BCA, BHM, UI/UX, or CA where skills matter most',
        streamWeights: { 'emerging': 3, 'management': 2 },
        tags: ['coding', 'design', 'finance', 'remote']
      }
    ]
  }
];

interface CareerQuizProps {
  careers: CareerWithGuide[];
  onOpenDetails: (career: CareerWithGuide) => void;
  onTalkToExpert: (fieldId: string) => void;
  onClose: () => void;
}

export const CareerQuiz: React.FC<CareerQuizProps> = ({
  careers,
  onOpenDetails,
  onTalkToExpert,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (questionId: string, optionId: string) => {
    const updatedAnswers = { ...answers, [questionId]: optionId };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const matchResults = isCompleted
    ? calculateQuizMatch(answers, careers, QUIZ_QUESTIONS).slice(0, 3)
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4 text-amber-400" />
            +2 Career Compass (Disha Suchak)
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Find Your Ideal Career in Nepal
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Answer 5 quick questions to match your interests with verified Nepali degrees, salaries, and exams.
          </p>

          {!isCompleted && (
            <div className="mt-4 flex items-center gap-2">
              {QUIZ_QUESTIONS.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    idx <= currentStep ? 'bg-indigo-500' : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!isCompleted ? (
            /* Questions Flow */
            <div>
              <div className="mb-4">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Step {currentQuestion.step} of {QUIZ_QUESTIONS.length}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {currentQuestion.title}
                </h3>
                {currentQuestion.nepaliTitle && (
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                    {currentQuestion.nepaliTitle}
                  </p>
                )}
                <p className="text-xs text-slate-400 mt-1">
                  {currentQuestion.subtitle}
                </p>
              </div>

              <div className="space-y-2.5">
                {currentQuestion.options.map(option => {
                  const isSelected = answers[currentQuestion.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(currentQuestion.id, option.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-500 text-indigo-900 dark:text-indigo-200 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-400'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold">{option.label}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {option.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Back */}
              {currentStep > 0 && (
                <div className="mt-5 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to previous question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-5">
              <div className="text-center py-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Your Top Career Matches in Nepal
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
                  Based on your academic stream, work inclination, and market demand in Nepal, here are your top 3 recommended paths:
                </p>
              </div>

              {/* Top Matches Cards */}
              <div className="space-y-3">
                {matchResults.map((result, idx) => {
                  const career = result.career as CareerWithGuide;
                  return (
                    <div
                      key={result.careerId}
                      className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-indigo-500/50 transition"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-extrabold text-sm flex-shrink-0">
                          #{idx + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                              {career.title}
                            </h4>
                            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                              {result.matchPercentage}% Match
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-nepali mt-0.5">
                            {career.nepaliTitle}
                          </p>
                          <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Salary: <span className="font-semibold text-emerald-600 dark:text-emerald-400">{career.salaryNPR.entryMonthly.label}</span> • Entrance: {career.entranceExams[0]?.name || 'Direct'}
                          </div>
                          <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                            {result.reason}
                          </p>
                        </div>
                      </div>

                      <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => {
                            onClose();
                            onOpenDetails(career);
                          }}
                          className="flex-1 py-2 px-3 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs border border-slate-300 dark:border-slate-600 transition cursor-pointer text-center"
                        >
                          Deep Guide
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onTalkToExpert(career.id);
                          }}
                          className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Ask Expert</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Career Compass Quiz</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-xs transition cursor-pointer"
                >
                  Explore All 8 Career Paths
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
