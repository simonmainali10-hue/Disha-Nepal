import React, { useState } from 'react';
import { 
  X, Sparkles, GraduationCap, Clock, Award, Banknote, 
  Wrench, Heart, Building, CheckCircle2, MessageSquare, 
  ArrowRight, ShieldCheck, Flame, BookOpen 
} from 'lucide-react';
import type { CareerWithGuide } from '../data/careersData.ts';
import { CareerBenefitsSection } from './CareerBenefitsSection.tsx';
import { CareerSkillsGuide } from './CareerSkillsGuide.tsx';
import { SalaryAndMotivation } from './SalaryAndMotivation.tsx';

interface CareerDetailModalProps {
  career: CareerWithGuide | null;
  onClose: () => void;
  onTalkToExpert: (fieldId: string) => void;
  onAddToCompare?: (careerId: string) => void;
  isCompared?: boolean;
}

export const CareerDetailModal: React.FC<CareerDetailModalProps> = ({
  career,
  onClose,
  onTalkToExpert,
  onAddToCompare,
  isCompared
}) => {
  if (!career) return null;

  const [activeTab, setActiveTab] = useState<'benefits' | 'skills' | 'salary' | 'colleges'>('benefits');

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white p-6 border-b border-slate-800 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              {career.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {career.badge}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
            {career.title}
          </h2>
          <p className="text-xs font-semibold text-indigo-300 mt-1">
            Nepal Degree Pathways: {career.primaryDegrees.join(' • ')}
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Degree Duration:</span>
              <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {career.durationYears} Years Course
              </span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Min +2 Eligibility:</span>
              <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                GPA {career.eligibilityGPA.toFixed(1)}+
              </span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Starting Nepal Salary:</span>
              <span className="font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                <Banknote className="w-3.5 h-3.5 text-emerald-400" />
                {career.salaryNPR.entryMonthly.label}
              </span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Nepal Market Demand:</span>
              <span className="font-bold text-amber-400 flex items-center gap-1 mt-0.5">
                {'★'.repeat(career.salaryNPR.marketDemandRating)} ({career.salaryNPR.marketDemandRating}/5)
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-100 dark:bg-slate-950 px-6 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'benefits'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Key Benefits & Nepal Market
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'skills'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              Required Skills & Resources
            </button>
            <button
              onClick={() => setActiveTab('salary')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'salary'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Banknote className="w-3.5 h-3.5" />
              NPR Salary & Motivation
            </button>
            <button
              onClick={() => setActiveTab('colleges')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'colleges'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              Entrance & Top Colleges
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onTalkToExpert(career.id);
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer flex-shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Talk to Field Expert
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
          {activeTab === 'benefits' && <CareerBenefitsSection career={career} />}
          {activeTab === 'skills' && <CareerSkillsGuide career={career} />}
          {activeTab === 'salary' && <SalaryAndMotivation career={career} />}

          {/* Colleges & Entrance Tab */}
          {activeTab === 'colleges' && (
            <div className="space-y-6">
              {/* Entrance Exams */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Primary Entrance Examinations in Nepal
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {career.entranceExams.map((exam, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                        <span>{exam.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                          {exam.difficulty} Competition
                        </span>
                      </div>
                      <div className="text-slate-500 mt-1">Conducted by: {exam.conductingBody}</div>
                      <div className="text-slate-700 dark:text-slate-300 font-medium mt-1">
                        Timeline: {exam.timeline}
                      </div>
                      {exam.seatsNote && (
                        <div className="text-slate-500 text-[11px] mt-1 font-mono">{exam.seatsNote}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Colleges in Nepal */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Top Recognized Colleges & Campuses in Nepal
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {career.topCollegesNepal.map((college, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{college}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recognized Primary Degrees */}
              <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                  Degree Options After +2:
                </span>
                <div className="flex flex-wrap gap-2">
                  {career.primaryDegrees.map((deg, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 font-mono font-semibold rounded-lg border border-slate-200 dark:border-slate-700">
                      {deg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="bg-slate-50 dark:bg-slate-950 p-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Min Requirement: <span className="font-medium text-slate-700 dark:text-slate-300">{career.minRequirements}</span>
          </div>

          <div className="flex items-center gap-2">
            {onAddToCompare && (
              <button
                onClick={() => onAddToCompare(career.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition cursor-pointer border ${
                  isCompared
                    ? 'bg-amber-500 text-white border-amber-600'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {isCompared ? '✓ Added to Compare' : '+ Compare Career'}
              </button>
            )}

            <button
              onClick={() => {
                onClose();
                onTalkToExpert(career.id);
              }}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-bold rounded-xl text-xs shadow-md transition cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask Expert About {career.category.split(' ')[0]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
