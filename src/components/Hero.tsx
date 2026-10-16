import React from 'react';
import { 
  Sparkles, Compass, MessageSquare, ShieldCheck, 
  ArrowRight, CheckCircle2, TrendingUp, Users, Banknote 
} from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onExploreFieldChat: () => void;
  onSelectStream: (stream: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuiz,
  onExploreFieldChat,
  onSelectStream
}) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-14 bg-gradient-to-b from-indigo-50/60 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800">
      {/* Decorative gradient blur backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-500/10 via-rose-500/10 to-amber-500/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top announcement pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80 shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>Dedicated for Confused Students After Class 12 in Nepal</span>
            <span className="text-slate-400">|</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Free Guidance</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Confused About Your Career Path in <span className="bg-gradient-to-r from-rose-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">Nepal After +2?</span>
          </h1>

          <p className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200 mt-2">
            Your Authentic Roadmap After Class 12: Career Scope, Realistic Salaries, Key Skills & Expert Nepali Mentors
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 max-w-2xl mx-auto leading-relaxed">
            कक्षा १२ पछिको सही दिशा: Stop guessing based on rumors. Discover genuine career trajectories in Nepal with accurate NPR monthly salaries, entrance syllabus (CEE, IOE, CMAT), required technical & soft skills, and live chat modules with senior Nepali mentors.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onOpenQuiz}
              className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-5 h-5 text-amber-300" />
              <span>Take 2-Min Career Compass Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreFieldChat}
              className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-extrabold text-sm border border-slate-300 dark:border-slate-700 shadow-sm transition cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-indigo-500" />
              <span>Talk With Verified Field Experts</span>
            </button>
          </div>

          {/* Stream Selector Filter Pills */}
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
              Jump straight into your stream catalog:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', label: 'All Paths (8 Fields)' },
                { id: 'science-physical', label: '💻 Science (Physical / Math)' },
                { id: 'science-bio', label: '🩺 Science (Bio / Medical)' },
                { id: 'management', label: '📊 Management (CA, BBA, BHM)' },
                { id: 'humanities', label: '⚖️ Humanities & Law' },
                { id: 'emerging', label: '🎨 Emerging Tech & UI/UX' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => onSelectStream(item.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800/90 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 text-xs font-medium transition cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Stat Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div className="text-xl md:text-2xl font-black text-indigo-600 dark:text-indigo-400">
              8 Fields
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Distinct Chat Modules & Verified Mentors
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div className="text-xl md:text-2xl font-black text-emerald-600 dark:text-emerald-400">
              NPR Scale
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Entry to Senior Monthly Salaries in Nepal
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div className="text-xl md:text-2xl font-black text-amber-500">
              6+ Entrances
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              CEE, IOE, CMAT, KU & Law Scholarship Guide
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div className="text-xl md:text-2xl font-black text-rose-500">
              100% Real
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Nepali Ground Reality & Myth Busting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
