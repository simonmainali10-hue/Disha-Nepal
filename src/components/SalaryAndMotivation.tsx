import React from 'react';
import { 
  Banknote, Flame, TrendingUp, Sparkles, Globe, 
  Quote, Heart, Building, CheckCircle 
} from 'lucide-react';
import type { CareerWithGuide } from '../data/careersData.ts';
import { formatSalaryRange } from '../utils/career-matcher.ts';

interface SalaryAndMotivationProps {
  career: CareerWithGuide;
}

export const SalaryAndMotivation: React.FC<SalaryAndMotivationProps> = ({ career }) => {
  const { salaryNPR, motivationFactor, mythsAndRealities } = career;

  return (
    <div className="space-y-6">
      {/* Salary Overview Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-1">
              <Banknote className="w-3.5 h-3.5" />
              Realistic Monthly Salary Structure in Nepal
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Earnings & Growth Curve (NPR)
            </h3>
          </div>
          <div className="text-xs text-slate-500 bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
            Market Demand: <span className="text-amber-500 font-bold">{'★'.repeat(salaryNPR.marketDemandRating)}</span> ({salaryNPR.marketDemandRating}/5)
          </div>
        </div>

        {/* 3 Tier Salary Cards: Entry, Mid, Senior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {/* Entry Level */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Entry Level (0 – 2 Years)
            </div>
            <div className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white mt-1">
              {salaryNPR.entryMonthly.label}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">per month in Nepal</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2">
              Fresh graduate / associate salary while building industry track record.
            </p>
          </div>

          {/* Mid Level */}
          <div className="bg-indigo-50/60 dark:bg-indigo-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/50 relative overflow-hidden">
            <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center justify-between">
              <span>Mid Level (3 – 5 Years)</span>
              <span className="text-[10px] bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded font-mono">Growth Spike</span>
            </div>
            <div className="text-lg md:text-xl font-extrabold text-indigo-900 dark:text-indigo-200 mt-1">
              {salaryNPR.midMonthly.label}
            </div>
            <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">per month in Nepal</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2">
              Independent contributor or assistant manager leading operations.
            </p>
          </div>

          {/* Senior Level */}
          <div className="bg-emerald-50/60 dark:bg-emerald-950/30 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/50 relative overflow-hidden">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
              <span>Senior Level (5+ Years)</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-mono">Top Tier</span>
            </div>
            <div className="text-lg md:text-xl font-extrabold text-emerald-900 dark:text-emerald-200 mt-1">
              {salaryNPR.seniorMonthly.label}
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">per month in Nepal</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2">
              Department head, partner, senior consultant, or remote contractor.
            </p>
          </div>
        </div>

        {/* Remote & Overseas Earning Potential Note */}
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <div>
              <span className="font-bold text-white">Global Remote & Overseas Scope: </span>
              <span className="text-slate-300">
                {salaryNPR.remoteOpportunities 
                  ? 'Strong remote contract opportunities in USD while residing in Nepal.'
                  : 'Primarily on-site practice in Nepal with established overseas licensing routes.'}
              </span>
            </div>
          </div>
          {salaryNPR.overseasAnnualUSD && (
            <div className="font-mono bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 px-2.5 py-1 rounded-lg text-xs whitespace-nowrap">
              {salaryNPR.overseasAnnualUSD.label}
            </div>
          )}
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 italic">
          * Note: {salaryNPR.note}
        </p>
      </div>

      {/* Motivation Factor & Inspiring Nepali Story */}
      <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-indigo-950/70 border border-amber-900/40 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Flame className="w-40 h-40 text-amber-500" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Motivation Factor & Real Nepali Journeys
          </div>

          <h4 className="text-xl md:text-2xl font-extrabold text-white mb-2">
            {motivationFactor.headline}
          </h4>

          {/* Inspirational Quote */}
          <div className="my-4 pl-4 border-l-2 border-amber-400 italic text-sm md:text-base text-amber-100/90 leading-relaxed">
            "{motivationFactor.quote}"
            <div className="text-xs font-semibold text-amber-400 not-italic mt-1">
              — {motivationFactor.author}
            </div>
          </div>

          {/* Story Summary */}
          <div className="bg-slate-950/70 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="text-white font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Real Success Journey:
            </div>
            <p className="leading-relaxed">
              {motivationFactor.storySummary}
            </p>
            <div className="pt-2 border-t border-slate-800 text-emerald-400 font-medium">
              🇳🇵 <strong>Impact in Nepal:</strong> {motivationFactor.impactInNepal}
            </div>
          </div>
        </div>
      </div>

      {/* Myths vs Reality in Nepal */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span>Common Myths vs Ground Reality in Nepal</span>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded font-normal">
            Busting +2 Rumors
          </span>
        </h4>

        <div className="space-y-3">
          {mythsAndRealities.map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
              <div className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1.5">
                <span>❌ Myth:</span>
                <span className="text-slate-800 dark:text-slate-200 font-normal">{item.myth}</span>
              </div>
              <div className="text-emerald-700 dark:text-emerald-400 font-bold flex items-start gap-1.5 pt-1 border-t border-slate-200 dark:border-slate-700">
                <span className="flex-shrink-0">✅ Reality:</span>
                <span className="text-slate-700 dark:text-slate-300 font-normal leading-relaxed">{item.reality}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
