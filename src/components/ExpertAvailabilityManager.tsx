import React, { useState } from 'react';
import { 
  Calendar, Clock, ShieldCheck, CheckCircle2, User, Phone, 
  Mail, GraduationCap, Sparkles, Filter, Video, ArrowUpRight, 
  X, AlertCircle, MessageSquare
} from 'lucide-react';
import { VERIFIED_EXPERTS, type VerifiedFieldExpert } from '../data/expertsData.ts';
import type { BookingSubmission } from '../types/index.ts';

interface ExpertAvailabilityManagerProps {
  onSelectExpertForChat: (fieldId: string) => void;
  bookingExpert: VerifiedFieldExpert | null;
  onCloseBooking: () => void;
  onOpenBooking: (expert: VerifiedFieldExpert) => void;
}

export const ExpertAvailabilityManager: React.FC<ExpertAvailabilityManagerProps> = ({
  onSelectExpertForChat,
  bookingExpert,
  onCloseBooking,
  onOpenBooking
}) => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'online' | 'today'>('all');
  const [streamFilter, setStreamFilter] = useState<string>('all');
  
  // Booking Form State
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentStream, setStudentStream] = useState('Science (Physical)');
  const [studentGPA, setStudentGPA] = useState('3.4');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [specificDoubt, setSpecificDoubt] = useState('');
  const [preferredLang, setPreferredLang] = useState('Nepali');
  const [bookingConfirmed, setBookingConfirmed] = useState<BookingSubmission | null>(null);

  const filteredExperts = VERIFIED_EXPERTS.filter(expert => {
    if (statusFilter === 'online' && !expert.isOnlineNow) return false;
    if (statusFilter === 'today' && expert.statusBadge === 'Booking Only') return false;
    if (streamFilter !== 'all' && expert.stream !== streamFilter) return false;
    return true;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingExpert) return;

    const submission: BookingSubmission = {
      id: `DISHA-NPT-${Math.floor(1000 + Math.random() * 9000)}`,
      expertId: bookingExpert.id,
      expertName: bookingExpert.name,
      studentName,
      studentEmail,
      studentPhone,
      stream: studentStream,
      gpa: studentGPA,
      date: selectedDate,
      timeSlot: selectedTimeSlot || bookingExpert.availableSlots[0],
      preferredLanguage: preferredLang,
      specificDoubt,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    setBookingConfirmed(submission);
  };

  const resetBookingForm = () => {
    setBookingConfirmed(null);
    setStudentName('');
    setStudentEmail('');
    setStudentPhone('');
    setSpecificDoubt('');
    onCloseBooking();
  };

  return (
    <div className="w-full my-12" id="expert-availability-system">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <Clock className="w-3.5 h-3.5" />
            Live Mentor Availability & Schedule Management
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            Connect With Verified Nepali Mentors
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Real engineers, medical officers, chartered accountants, and civil servants ready to resolve your +2 confusion via live chat or 1-on-1 private video calls.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Status filter pills */}
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex items-center gap-1 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Experts ({VERIFIED_EXPERTS.length})
            </button>
            <button
              onClick={() => setStatusFilter('online')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                statusFilter === 'online'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Online Now ({VERIFIED_EXPERTS.filter(e => e.isOnlineNow).length})
            </button>
            <button
              onClick={() => setStatusFilter('today')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                statusFilter === 'today'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Today's Slots
            </button>
          </div>

          {/* Stream Filter */}
          <select
            value={streamFilter}
            onChange={e => setStreamFilter(e.target.value)}
            className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="all">All Academic Streams</option>
            <option value="science-physical">Science (Physical / Math)</option>
            <option value="science-bio">Science (Bio / Medical)</option>
            <option value="management">Management / Commerce</option>
            <option value="humanities">Humanities & Law</option>
            <option value="emerging">Emerging Tech & Design</option>
          </select>
        </div>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredExperts.map(expert => (
          <div
            key={expert.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            {/* Top banner / status */}
            <div className="p-5 pb-3">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                  expert.isOnlineNow 
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                    : expert.statusBadge === 'Available Today'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                    : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${expert.isOnlineNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  {expert.statusBadge}
                </span>

                <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                  ★ {expert.rating}
                </span>
              </div>

              {/* Profile info */}
              <div className="flex items-start gap-3">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-13 h-13 rounded-2xl object-cover ring-2 ring-indigo-500/30 group-hover:scale-105 transition duration-300"
                />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                    {expert.name}
                  </h3>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">
                    {expert.title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {expert.organization}
                  </div>
                </div>
              </div>

              {/* Key Alumni & Advice quote */}
              <div className="mt-3.5 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl text-[11px] border border-slate-100 dark:border-slate-800">
                <div className="text-slate-500 dark:text-slate-400 font-medium">Alumni:</div>
                <div className="text-slate-800 dark:text-slate-200 font-semibold">{expert.collegeAlumni}</div>
                <div className="text-slate-600 dark:text-slate-300 italic mt-1 line-clamp-2">
                  "{expert.keyAdvice}"
                </div>
              </div>

              {/* Schedule timetable */}
              <div className="mt-3 text-[11px] space-y-1">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-indigo-500" />
                    Available Days:
                  </span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {expert.availableDays.slice(0, 3).join(', ')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-indigo-500" />
                    Nepal Time (NPT):
                  </span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {expert.availableSlots[0]?.split(' ')[0]} {expert.availableSlots[0]?.split(' ')[1]}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 pt-2 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col gap-2">
              <button
                onClick={() => {
                  onSelectExpertForChat(expert.fieldId);
                  const el = document.getElementById('expert-chat-modules');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Chat in Field Module
              </button>

              <button
                onClick={() => onOpenBooking(expert)}
                className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 transition cursor-pointer shadow-sm"
              >
                <Video className="w-3.5 h-3.5" />
                Book 1-on-1 Video Session
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 1-on-1 Mentorship Booking Modal */}
      {bookingExpert && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 text-white p-6 relative">
              <button
                onClick={resetBookingForm}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-3">
                <img
                  src={bookingExpert.avatar}
                  alt={bookingExpert.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-400"
                />
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Free Nepali Student Mentorship Slot
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Book Call with {bookingExpert.name}
                  </h3>
                  <p className="text-xs text-indigo-200 mt-0.5">
                    {bookingExpert.title} • {bookingExpert.organization}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {bookingConfirmed ? (
                /* Booking Success State */
                <div className="text-center py-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Mentorship Session Confirmed!
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      We have reserved your slot with <span className="font-semibold text-slate-800 dark:text-slate-200">{bookingConfirmed.expertName}</span>.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 text-left text-xs space-y-2 border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                      <span className="text-slate-500">Booking Reference:</span>
                      <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{bookingConfirmed.id}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                      <span className="text-slate-500">Date & Nepal Time:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{bookingConfirmed.date} ({bookingConfirmed.timeSlot})</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                      <span className="text-slate-500">Student Name:</span>
                      <span className="font-medium text-slate-800 dark:text-slate-200">{bookingConfirmed.studentName} (+2 {bookingConfirmed.stream})</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Meeting Platform:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <Video className="w-3.5 h-3.5" />
                        Google Meet (Link sent via WhatsApp/SMS)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 rounded-xl text-left text-[11px] text-amber-800 dark:text-amber-300">
                    💡 <strong>Pro Tip for Nepali Students:</strong> Write down your 3 top questions regarding entrance syllabus, college fees, or drop year options before joining so you make the best use of your 25-minute consultation!
                  </div>

                  <button
                    onClick={resetBookingForm}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs transition cursor-pointer"
                  >
                    Done & Return to Career Guide
                  </button>
                </div>
              ) : (
                /* Booking Input Form */
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={e => setStudentName(e.target.value)}
                        placeholder="e.g. Aayush Maharjan"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        WhatsApp / Mobile No. *
                      </label>
                      <input
                        type="tel"
                        required
                        value={studentPhone}
                        onChange={e => setStudentPhone(e.target.value)}
                        placeholder="98XXXXXXXX"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={studentEmail}
                        onChange={e => setStudentEmail(e.target.value)}
                        placeholder="student@gmail.com"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Completed +2 Stream
                      </label>
                      <select
                        value={studentStream}
                        onChange={e => setStudentStream(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      >
                        <option value="Science (Physical/Math)">Science (Physical / Math)</option>
                        <option value="Science (Biology)">Science (Biology)</option>
                        <option value="Management">Management / Commerce</option>
                        <option value="Humanities">Humanities</option>
                        <option value="Law (+2)">Law (+2)</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Slot in NPT */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Preferred Day
                      </label>
                      <select
                        value={selectedDate}
                        onChange={e => setSelectedDate(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      >
                        {bookingExpert.availableDays.map(day => (
                          <option key={day} value={day}>Next {day}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Time Slot (NPT)
                      </label>
                      <select
                        value={selectedTimeSlot || bookingExpert.availableSlots[0]}
                        onChange={e => setSelectedTimeSlot(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      >
                        {bookingExpert.availableSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      What is your biggest doubt or question? *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={specificDoubt}
                      onChange={e => setSpecificDoubt(e.target.value)}
                      placeholder="e.g. I am confused between IOE entrance and private CSIT colleges, or whether my GPA 3.1 is sufficient for scholarships..."
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Preferred Language:</span>
                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="radio"
                          name="lang"
                          value="Nepali"
                          checked={preferredLang === 'Nepali'}
                          onChange={() => setPreferredLang('Nepali')}
                        />
                        <span>नेपाली</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="radio"
                          name="lang"
                          value="English"
                          checked={preferredLang === 'English'}
                          onChange={() => setPreferredLang('English')}
                        />
                        <span>English</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white rounded-xl font-bold text-xs shadow-lg shadow-indigo-600/20 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Confirm Free 1-on-1 Consultation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
