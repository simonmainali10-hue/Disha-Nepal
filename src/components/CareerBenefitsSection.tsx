import React from 'react';
import { HeartHandshake, Globe2, TrendingUp, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { CareerWithGuide } from '../data/careersData.ts';

interface CareerBenefitsSectionProps {
  career: CareerWithGuide;
}

export const CareerBenefitsSection: React.FC<CareerBenefitsSectionProps> = ({ career }) => {
  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border border-indigo-900/50 rounded-2xl p-5 text-slate-200">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Why Choose {career.title}?
        </div>
        <h3 className="text-lg md:text-xl font-extrabold text-white mb-2">
          Core Value Proposition for a Nepali Youth
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          {career.overview}
        </p>

        {/* High-level key benefits bullets */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-800">
          {career.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Pillars of Career Benefits: Job Satisfaction, Societal Contribution, Future Nepali Market */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pillar 1: Job Satisfaction & Work Culture in Nepal */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-3">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
            1. Job Satisfaction & Culture
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {career.detailedGuide.jobSatisfaction}
          </p>
        </div>

        {/* Pillar 2: Societal Contribution & Nation-Building */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
            2. Societal Contribution
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {career.detailedGuide.societalContribution}
          </p>
        </div>

        {/* Pillar 3: Future Opportunities in Nepal Market */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
            3. Future Nepali Market
          </h4>
          <ul className="space-y-1.5">
            {career.detailedGuide.futureNepalOpportunities.map((opp, idx) => (
              <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5 leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 flex-shrink-0" />
                <span>{opp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
