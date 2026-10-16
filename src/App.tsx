import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, Sparkles, Compass, MessageSquare, 
  Scale, BookOpen, Clock, Banknote, ShieldCheck, X
} from 'lucide-react';
import { CAREERS_DATA, type CareerWithGuide } from './data/careersData.ts';
import { VERIFIED_EXPERTS, type VerifiedFieldExpert } from './data/expertsData.ts';
import { filterCareers } from './utils/career-matcher.ts';
import type { StreamType } from './types/index.ts';

// Components
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CareerCard } from './components/CareerCard.tsx';
import { CareerDetailModal } from './components/CareerDetailModal.tsx';
import { FieldChatModules } from './components/FieldChatModules.tsx';
import { ExpertAvailabilityManager } from './components/ExpertAvailabilityManager.tsx';
import { CareerQuiz } from './components/CareerQuiz.tsx';
import { CareerComparisonModal } from './components/CareerComparisonModal.tsx';
import { EntranceExamsTimeline } from './components/EntranceExamsTimeline.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  // Filter & Search State
  const [selectedStream, setSelectedStream] = useState<StreamType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('all');

  // Modals & Active Selections
  const [selectedCareer, setSelectedCareer] = useState<CareerWithGuide | null>(null);
  const [activeFieldChatId, setActiveFieldChatId] = useState<string>(VERIFIED_EXPERTS[0].fieldId);
  const [bookingExpert, setBookingExpert] = useState<VerifiedFieldExpert | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [comparedCareerIds, setComparedCareerIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Filtered Careers
  const filteredCareers = useMemo(() => {
    return filterCareers(CAREERS_DATA, searchQuery, selectedStream, salaryFilter) as CareerWithGuide[];
  }, [searchQuery, selectedStream, salaryFilter]);

  // Handlers
  const handleToggleCompare = (careerId: string) => {
    setComparedCareerIds(prev => {
      if (prev.includes(careerId)) {
        return prev.filter(id => id !== careerId);
      }
      if (prev.length >= 2) {
        return [prev[1], careerId]; // keep max 2 for clean comparison
      }
      return [...prev, careerId];
    });
  };

  const handleTalkToFieldExpert = (fieldId: string) => {
    // Map careerId to expert fieldId if necessary
    const matchingExpert = VERIFIED_EXPERTS.find(
      e => e.fieldId === fieldId || fieldId.includes(e.fieldId) || e.fieldId.includes(fieldId)
    );
    const targetId = matchingExpert ? matchingExpert.fieldId : VERIFIED_EXPERTS[0].fieldId;
    
    setActiveFieldChatId(targetId);
    const chatSection = document.getElementById('expert-chat-modules');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        comparedCount={comparedCareerIds.length}
      />

      {/* Main Hero Header */}
      <Hero
        onOpenQuiz={() => setIsQuizOpen(true)}
        onExploreFieldChat={() => {
          const el = document.getElementById('expert-chat-modules');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectStream={(stream) => {
          setSelectedStream(stream as StreamType);
          const el = document.getElementById('careers-catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* SECTION 1: DISTINCT CAREER FIELD CHAT MODULES */}
        <section className="pt-4">
          <FieldChatModules
            initialFieldId={activeFieldChatId}
            onOpenBookingModal={(expert) => setBookingExpert(expert)}
          />
        </section>

        {/* SECTION 2: CAREERS CATALOG & GUIDES */}
        <section id="careers-catalog" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                Comprehensive Post +2 Career Library in Nepal
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                Explore Verified Career Pathways
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                Every career includes dedicated sections on key benefits (job satisfaction, societal contribution, future Nepali market), required technical/soft skills, and realistic NPR salaries.
              </p>
            </div>

            {/* Quick search input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search career, degree (CSIT, CA, MBBS)..."
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Filters Bar: Streams & Salary filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Stream tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
              {[
                { id: 'all', label: 'All Streams' },
                { id: 'science-physical', label: 'Science (Physical / Math)' },
                { id: 'science-bio', label: 'Science (Biology / Medical)' },
                { id: 'management', label: 'Management' },
                { id: 'humanities', label: 'Humanities & Law' },
                { id: 'emerging', label: 'Emerging & Design' }
              ].map(st => (
                <button
                  key={st.id}
                  onClick={() => setSelectedStream(st.id as StreamType)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                    selectedStream === st.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            {/* Salary filter selector */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium hidden sm:inline">Filter by:</span>
              <select
                value={salaryFilter}
                onChange={e => setSalaryFilter(e.target.value)}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="all">All Salaries</option>
                <option value="high-starting">Starting NPR 35k+/mo</option>
                <option value="high-senior">Senior NPR 2 Lakh+/mo</option>
                <option value="remote-ready">Global Remote USD Scope</option>
              </select>
            </div>
          </div>

          {/* Careers Grid */}
          {filteredCareers.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400 mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                No matching careers found
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for degrees like "CSIT", "MBBS", "CA", or reset your stream filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedStream('all');
                  setSalaryFilter('all');
                }}
                className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCareers.map(career => (
                <CareerCard
                  key={career.id}
                  career={career}
                  onOpenDetails={(c) => setSelectedCareer(c)}
                  onTalkToExpert={(fieldId) => handleTalkToFieldExpert(fieldId)}
                  isCompared={comparedCareerIds.includes(career.id)}
                  onToggleCompare={(id) => handleToggleCompare(id)}
                />
              ))}
            </div>
          )}
        </section>

        {/* SECTION 3: EXPERT AVAILABILITY & 1-ON-1 SCHEDULING SYSTEM */}
        <section>
          <ExpertAvailabilityManager
            onSelectExpertForChat={(fieldId) => handleTalkToFieldExpert(fieldId)}
            bookingExpert={bookingExpert}
            onCloseBooking={() => setBookingExpert(null)}
            onOpenBooking={(expert) => setBookingExpert(expert)}
          />
        </section>

        {/* SECTION 4: ENTRANCE EXAMS MASTER TIMELINE */}
        <section>
          <EntranceExamsTimeline />
        </section>
      </main>

      {/* MODALS */}
      {/* 1. Deep Career Details Modal */}
      <CareerDetailModal
        career={selectedCareer}
        onClose={() => setSelectedCareer(null)}
        onTalkToExpert={(fieldId) => handleTalkToFieldExpert(fieldId)}
        onAddToCompare={(id) => handleToggleCompare(id)}
        isCompared={selectedCareer ? comparedCareerIds.includes(selectedCareer.id) : false}
      />

      {/* 2. Side-by-Side Career Comparison Modal */}
      {isCompareModalOpen && (
        <CareerComparisonModal
          careerIds={comparedCareerIds}
          allCareers={CAREERS_DATA}
          onClose={() => setIsCompareModalOpen(false)}
          onRemoveCareer={(id) => handleToggleCompare(id)}
          onOpenDetails={(c) => {
            setIsCompareModalOpen(false);
            setSelectedCareer(c);
          }}
          onTalkToExpert={(fieldId) => {
            setIsCompareModalOpen(false);
            handleTalkToFieldExpert(fieldId);
          }}
        />
      )}

      {/* 3. +2 Career Compass Quiz Modal */}
      {isQuizOpen && (
        <CareerQuiz
          careers={CAREERS_DATA}
          onOpenDetails={(c) => {
            setIsQuizOpen(false);
            setSelectedCareer(c);
          }}
          onTalkToExpert={(fieldId) => {
            setIsQuizOpen(false);
            handleTalkToFieldExpert(fieldId);
          }}
          onClose={() => setIsQuizOpen(false)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
