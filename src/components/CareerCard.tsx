import React from 'react';
import { 
  Clock, GraduationCap, Banknote, Award, ArrowRight, 
  MessageSquare, Sparkles, Check, Plus, Globe
} from 'lucide-react';
import type { CareerWithGuide } from '../data/careersData.ts';

interface CareerCardProps {
  career: CareerWithGuide;
  onOpenDetails: (career: CareerWithGuide) => void;
  onTalkToExpert: (fieldId: string) => void;
  isCompared: boolean;
  onToggleCompare: (careerId: string) => void;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  career,
  onOpenDetails,
  onTalkToExpert,
  isCompared,
  onToggleCompare
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-indigo-500/50">
      {/* Top Card Body */}
      <div className="p-6">
        {/* Stream & Category Badges + Compare Toggle */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60">
              {career.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
              {career.badge}
            </span>
          </div>

          <button
            onClick={() => onToggleCompare(career.id)}
            title="Compare with another career"
            className={`p-1.5 rounded-lg text-xs font-medium transition cursor-pointer border flex items-center gap-1 ${
              isCompared
                ? 'bg-amber-500 text-white border-amber-600'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 border-slate-200 dark:border-slate-700'
            }`}
          >
            {isCompared ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
            <span className="text-[10px] hidden sm:inline">{isCompared ? 'Compared' : 'Compare'}</span>
          </button>
        </div>

        {/* Title and Nepali Subtitle */}
        <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition leading-snug">
          {career.title}
        </h3>
        <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 font-nepali mt-0.5">
          {career.nepaliTitle}
        </p>

        {/* Brief summary */}
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">
          {career.summary}
        </p>

        {/* Quick Highlights Box */}
        <div className="mt-4 grid grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-medium">Starting NPR</span>
            <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1 mt-0.5 text-xs">
              <Banknote className="w-3.5 h-3.5 text-emerald-500" />
              {career.salaryNPR.entryMonthly.label}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-medium">Degree Duration</span>
            <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1 mt-0.5 text-xs">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              {career.durationYears} Years (+2 {career.eligibilityGPA.toFixed(1)}+)
            </span>
          </div>
        </div>

        {/* Primary Entrance Exam Pill */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            Entrance:
          </span>
          <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[170px]">
            {career.entranceExams[0]?.name || 'Direct Merit'}
          </span>
        </div>

        {/* Remote opportunities indicator */}
        {career.salaryNPR.remoteOpportunities && (
          <div className="mt-2 text-[11px] text-indigo-600 dark:text-indigo-400 flex items-center gap-1 font-medium">
            <Globe className="w-3 h-3" />
            <span>High Remote USD Earning Scope from Nepal</span>
          </div>
        )}
      </div>

      {/* Card Actions Footer */}
      <div className="p-4 pt-2 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex items-center gap-2">
        <button
          onClick={() => onOpenDetails(career)}
          className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
        >
          <span>Deep Guide & Skills</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onTalkToExpert(career.id)}
          title={`Talk to verified expert in ${career.category}`}
          className="py-2.5 px-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/20"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Ask Expert</span>
        </button>
      </div>
    </div>
  );
};
