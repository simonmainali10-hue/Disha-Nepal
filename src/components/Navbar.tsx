import React from 'react';
import { Compass, MessageSquare, Scale, Calendar, HelpCircle, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenCompare: () => void;
  comparedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuiz,
  onOpenCompare,
  comparedCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 group-hover:scale-105 transition">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                DISHA NEPAL
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold border border-rose-500/20">
                +2 Guide
              </span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5">
              Post +2 Career Navigator (Nepal)
            </div>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <a
            href="#careers-catalog"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Career Paths
          </a>
          <a
            href="#expert-chat-modules"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 transition"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Field Chat Modules
          </a>
          <a
            href="#expert-availability-system"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Mentor Availability
          </a>
          <a
            href="#entrance-exams-guide"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Entrance Exams
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          {/* Compare Button */}
          {comparedCount > 0 && (
            <button
              onClick={onOpenCompare}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer animate-in fade-in"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare ({comparedCount})</span>
            </button>
          )}

          {/* Compass Quiz Button */}
          <button
            onClick={onOpenQuiz}
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-indigo-600/25 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Career Matcher Quiz</span>
          </button>
        </div>
      </div>
    </header>
  );
};
