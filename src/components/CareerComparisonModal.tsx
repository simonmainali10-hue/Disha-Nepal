import React from 'react';
import { X, Check, ArrowRight, Scale, Sparkles, MessageSquare } from 'lucide-react';
import type { CareerWithGuide } from '../data/careersData.ts';
import { generateComparisonMetrics } from '../utils/career-matcher.ts';

interface CareerComparisonModalProps {
  careerIds: string[];
  allCareers: CareerWithGuide[];
  onClose: () => void;
  onRemoveCareer: (id: string) => void;
  onOpenDetails: (career: CareerWithGuide) => void;
  onTalkToExpert: (fieldId: string) => void;
}

export const CareerComparisonModal: React.FC<CareerComparisonModalProps> = ({
  careerIds,
  allCareers,
  onClose,
  onRemoveCareer,
  onOpenDetails,
  onTalkToExpert
}) => {
  const selectedCareers = allCareers.filter(c => careerIds.includes(c.id));

  if (selectedCareers.length === 0) return null;

  const careerA = selectedCareers[0];
  const careerB = selectedCareers[1] || selectedCareers[0];
  const metrics = generateComparisonMetrics(careerA, careerB);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Scale className="w-4 h-4 text-amber-400" />
            Side-by-Side Career Evaluation
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Comparing Career Paths in Nepal Context
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Make an informed decision based on realistic salaries, entrance exams, and market demand.
          </p>
        </div>

        {/* Selected Careers Header Row */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            {/* Career A */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 relative">
              <span className="text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-400">Option 1</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{careerA.title}</h3>
              <p className="text-xs text-slate-500 font-nepali">{careerA.nepaliTitle}</p>
              <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {careerA.salaryNPR.entryMonthly.label}
              </div>
            </div>

            {/* Career B */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 relative">
              <span className="text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-400">Option 2</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{careerB.title}</h3>
              <p className="text-xs text-slate-500 font-nepali">{careerB.nepaliTitle}</p>
              <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {careerB.salaryNPR.entryMonthly.label}
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800 my-4 text-xs">
            {metrics.map((row, idx) => (
              <div key={idx} className="py-3 grid grid-cols-3 gap-3 items-center">
                <div className="font-semibold text-slate-500 dark:text-slate-400">
                  {row.metric}
                </div>
                <div className={`font-medium ${row.c1Advantage ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-800 dark:text-slate-200'}`}>
                  {row.c1Value}
                </div>
                <div className={`font-medium ${!row.c1Advantage ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-800 dark:text-slate-200'}`}>
                  {row.c2Value}
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                onClose();
                onTalkToExpert(careerA.id);
              }}
              className="py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask Expert about {careerA.title.split(' ')[0]}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onTalkToExpert(careerB.id);
              }}
              className="py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask Expert about {careerB.title.split(' ')[0]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
