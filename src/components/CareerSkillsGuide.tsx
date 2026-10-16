import React from 'react';
import { 
  Wrench, Users, BookOpen, ExternalLink, Sparkles, 
  MapPin, CheckCircle, GraduationCap, Laptop
} from 'lucide-react';
import type { CareerWithGuide } from '../data/careersData.ts';

interface CareerSkillsGuideProps {
  career: CareerWithGuide;
}

export const CareerSkillsGuide: React.FC<CareerSkillsGuideProps> = ({ career }) => {
  return (
    <div className="space-y-6">
      {/* Header Intro */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20 mb-2">
          <Wrench className="w-3.5 h-3.5" />
          Comprehensive Skill Guide & Localized Learning Roadmaps
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          What Skills You Need for {career.title} in Nepal
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
          Mastering these technical proficiencies, professional soft skills, and local institutes will give you an unfair advantage right after your +2 board exams.
        </p>
      </div>

      {/* Two Column Skills Breakdown: Technical & Soft Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Technical Skills Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Technical Skills & Tools
              </h4>
              <p className="text-[11px] text-slate-500">Domain-specific software, standards & execution</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {career.skillsNeeded.technical.map((tech, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>

          {/* Tools & Softwares Pill Box */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2">
              Essential Tools & Software in Nepal:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {career.skillsNeeded.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-mono font-medium border border-slate-200 dark:border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Soft Skills & Professional Composure
              </h4>
              <p className="text-[11px] text-slate-500">Communication, ethics & leadership in Nepal</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {career.skillsNeeded.soft.map((soft, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="font-medium">{soft}</span>
              </div>
            ))}
          </div>

          {/* Nepal Context Tip */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 bg-emerald-50/50 dark:bg-emerald-950/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
            <p className="text-[11px] text-emerald-800 dark:text-emerald-300 leading-relaxed">
              💬 <strong>Nepal Reality Check:</strong> Bilingual confidence (clear spoken Nepali for site/client meetings + professional async English for emails and documentation) immediately doubles your interview score in Nepali corporations.
            </p>
          </div>
        </div>
      </div>

      {/* Resources for Acquiring These Skills in Nepal */}
      <div className="bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">
          <BookOpen className="w-4 h-4 text-indigo-500" />
          Where to Learn & Prepare in Nepal (Curated Resources)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {career.detailedGuide.learningResources.map((resGroup, gIdx) => (
            <div key={gIdx} className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <h5 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2.5">
                  {resGroup.category}
                </h5>
                <div className="space-y-3">
                  {resGroup.items.map((item, iIdx) => (
                    <div key={iIdx} className="text-xs pb-2 border-b border-slate-100 dark:border-slate-800/80 last:border-b-0">
                      <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                        <span>{item.name}</span>
                        <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500 font-mono">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-[11px] text-indigo-500 dark:text-indigo-400 flex items-center gap-1 mt-0.5 font-mono">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span>{item.locationOrUrl}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
