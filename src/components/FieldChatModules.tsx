import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, Send, CheckCircle2, Clock, Sparkles, User, 
  Calendar, Award, Building, BookOpen, Volume2, RotateCcw, 
  ArrowRight, ShieldCheck, Flame, Info
} from 'lucide-react';
import { VERIFIED_EXPERTS, type VerifiedFieldExpert } from '../data/expertsData.ts';

interface Message {
  id: string;
  sender: 'student' | 'expert';
  text: string;
  timestamp: string;
}

interface FieldChatModulesProps {
  initialFieldId?: string;
  onOpenBookingModal?: (expert: VerifiedFieldExpert) => void;
}

export const FieldChatModules: React.FC<FieldChatModulesProps> = ({
  initialFieldId,
  onOpenBookingModal
}) => {
  const [selectedFieldId, setSelectedFieldId] = useState<string>(
    initialFieldId || VERIFIED_EXPERTS[0].fieldId
  );
  const [activeExpert, setActiveExpert] = useState<VerifiedFieldExpert>(
    VERIFIED_EXPERTS.find(e => e.fieldId === (initialFieldId || VERIFIED_EXPERTS[0].fieldId)) || VERIFIED_EXPERTS[0]
  );
  const [chatMessages, setChatMessages] = useState<Record<string, Message[]>>({});
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Update active expert when field tab changes
  useEffect(() => {
    const expert = VERIFIED_EXPERTS.find(e => e.fieldId === selectedFieldId);
    if (expert) {
      setActiveExpert(expert);
      
      // Initialize welcome message for this expert if empty
      if (!chatMessages[expert.id]) {
        const welcomeMsg: Message = {
          id: `welcome-${expert.id}`,
          sender: 'expert',
          text: `Namaste! I am ${expert.name}, ${expert.title} (${expert.organization}). Congratulations on completing your +2 exams!\n\nWhat are you most confused about regarding ${expert.fieldCategory} in Nepal? Feel free to ask about college entrance, salaries, job reality in Nepal, or pick from the common questions below.`,
          timestamp: 'Just now'
        };
        setChatMessages(prev => ({
          ...prev,
          [expert.id]: [welcomeMsg]
        }));
      }
    }
  }, [selectedFieldId]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping, activeExpert.id]);

  const currentMessages = chatMessages[activeExpert.id] || [];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'student',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => ({
      ...prev,
      [activeExpert.id]: [...(prev[activeExpert.id] || []), userMsg]
    }));
    setInputValue('');
    setIsTyping(true);

    // Find pre-authored expert response or generate a contextual reply
    setTimeout(() => {
      let expertReplyText = '';
      const matchedQnA = activeExpert.sampleQnA.find(
        q => q.prompt.toLowerCase().includes(text.toLowerCase()) || 
             text.toLowerCase().includes(q.prompt.toLowerCase().slice(0, 20))
      );

      if (matchedQnA) {
        expertReplyText = matchedQnA.answer;
      } else {
        expertReplyText = `Namaste! Regarding "${text}": In the Nepali context after +2, this is a very thoughtful question. From my ${activeExpert.yearsExperience}+ years in ${activeExpert.fieldCategory}, my top advice is to focus first on building tangible foundational skills during the 3-month gap rather than stressing about the college brand alone.\n\nKey takeaways for Nepal:\n• Real market demand in Nepal values practical problem-solving and English communication.\n• Explore whether your personality thrives in this daily work routine.\n• If you need detailed one-on-one personalized evaluation with your exact +2 GPA, feel free to book a dedicated free mentorship slot with me!`;
      }

      const expertMsg: Message = {
        id: `expert-${Date.now()}`,
        sender: 'expert',
        text: expertReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => ({
        ...prev,
        [activeExpert.id]: [...(prev[activeExpert.id] || []), expertMsg]
      }));
      setIsTyping(false);
    }, 1200);
  };

  const handleResetChat = () => {
    const welcomeMsg: Message = {
      id: `welcome-${activeExpert.id}-${Date.now()}`,
      sender: 'expert',
      text: `Namaste! I am ${activeExpert.name}. Let us reset and talk about your career goals in ${activeExpert.fieldCategory}. What is your biggest dilemma today?`,
      timestamp: 'Just now'
    };
    setChatMessages(prev => ({
      ...prev,
      [activeExpert.id]: [welcomeMsg]
    }));
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden" id="expert-chat-modules">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 px-6 py-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Verified Nepali Expert Mentorship Network
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            Distinct Career Field Chat Modules
            <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-full font-medium">
              8 Fields Active
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-0.5">
            Select any career field below to connect directly with senior Nepali professionals and entrance rankers.
          </p>
        </div>

        {/* Global live stats */}
        <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700/60 rounded-xl px-3.5 py-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div className="text-xs">
            <span className="text-slate-300 font-semibold">Nepal Standard Time (NPT)</span>
            <div className="text-emerald-400 font-medium">Mentors Active & Answering</div>
          </div>
        </div>
      </div>

      {/* Field Selector Tabs */}
      <div className="bg-slate-950/70 px-4 py-3 border-b border-slate-800 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {VERIFIED_EXPERTS.map(expert => {
            const isSelected = expert.fieldId === selectedFieldId;
            return (
              <button
                key={expert.fieldId}
                onClick={() => setSelectedFieldId(expert.fieldId)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  {expert.isOnlineNow && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  )}
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${expert.isOnlineNow ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                </span>
                <span>{expert.fieldCategory}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Module Layout: Left Expert Profile & Availability + Right Interactive Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Left Column: Expert Dossier & Availability System */}
        <div className="lg:col-span-4 bg-slate-950/50 p-6 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
          <div>
            {/* Live Availability Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                activeExpert.isOnlineNow 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
              }`}>
                <span className={`w-2 h-2 rounded-full ${activeExpert.isOnlineNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                {activeExpert.statusBadge}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {activeExpert.nextAvailableTime}
              </span>
            </div>

            {/* Expert Info Card */}
            <div className="flex items-start gap-4 mb-5">
              <div className="relative flex-shrink-0">
                <img
                  src={activeExpert.avatar}
                  alt={activeExpert.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-500/50"
                />
                <span className="absolute -bottom-1 -right-1 bg-slate-900 p-0.5 rounded-full">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                  {activeExpert.name}
                </h3>
                <p className="text-xs font-medium text-indigo-300">{activeExpert.title}</p>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <Building className="w-3.5 h-3.5 text-slate-500" />
                  {activeExpert.organization}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <span className="text-amber-400 font-bold">★ {activeExpert.rating}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{activeExpert.consultationsCount}+ Nepali youths guided</span>
                </div>
              </div>
            </div>

            {/* Availability Notice in Nepali */}
            <div className="bg-indigo-950/40 border border-indigo-800/40 rounded-xl p-3 text-xs text-indigo-200 mb-5 flex items-center gap-2.5">
              <Info className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span>{activeExpert.nepaliAvailabilityNotice}</span>
            </div>

            {/* Expert Credentials & Alumni */}
            <div className="space-y-3 mb-5 text-xs">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400 font-medium mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  Alumni & Educational Background:
                </div>
                <div className="text-slate-200 font-semibold">{activeExpert.collegeAlumni}</div>
                <div className="text-slate-400 text-[11px] mt-1">{activeExpert.nepaliBackground}</div>
              </div>

              {/* Weekly Schedule in NPT */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400 font-medium mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Available Consultation Days:
                  </span>
                  <span className="text-emerald-400 font-medium">Free Slot</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {activeExpert.availableDays.map(day => (
                    <span key={day} className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[11px] font-medium">
                      {day}
                    </span>
                  ))}
                </div>
                <div className="text-slate-300 text-[11px] font-mono">
                  Time: {activeExpert.availableSlots.join(', ')}
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <span>Languages:</span>
                {activeExpert.languages.map(lang => (
                  <span key={lang} className="text-slate-200 font-medium bg-slate-800/80 px-2 py-0.5 rounded">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action to book 1-on-1 */}
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => onOpenBookingModal && onOpenBookingModal(activeExpert)}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Free 1-on-1 Video Session with {activeExpert.name.split(' ')[1] || activeExpert.name}
            </button>
            <p className="text-[11px] text-slate-500 text-center mt-2">
              Instant Google Meet link & session confirmation provided.
            </p>
          </div>
        </div>

        {/* Right Column: Active Interactive Chat Module */}
        <div className="lg:col-span-8 flex flex-col justify-between bg-slate-900/60 p-4 md:p-6">
          {/* Top chat bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-bold text-sm">
                💬
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  Field Chat: {activeExpert.fieldCategory}
                  <span className="text-[11px] font-normal text-slate-400">
                    (Direct line with {activeExpert.name})
                  </span>
                </h4>
                <p className="text-xs text-slate-400">
                  Real advice tailored to Nepalese colleges, entrance exams, and job market.
                </p>
              </div>
            </div>

            <button
              onClick={handleResetChat}
              title="Reset conversation"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear Chat</span>
            </button>
          </div>

          {/* Chat Messages Area */}
          <div
            ref={chatScrollRef}
            className="flex-1 overflow-y-auto space-y-4 max-h-[380px] pr-2 scrollbar-thin scrollbar-thumb-slate-700"
          >
            {currentMessages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'expert' && (
                  <img
                    src={activeExpert.avatar}
                    alt={activeExpert.name}
                    className="w-8 h-8 rounded-full object-cover ring-1 ring-indigo-400 flex-shrink-0 mt-1"
                  />
                )}
                <div
                  className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-md ${
                    msg.sender === 'student'
                      ? 'bg-indigo-600 text-white rounded-tr-sm'
                      : 'bg-slate-800 text-slate-100 rounded-tl-sm border border-slate-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1 text-[11px] opacity-75">
                    <span className="font-semibold">
                      {msg.sender === 'student' ? 'You (+2 Student)' : activeExpert.name}
                    </span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
                {msg.sender === 'student' && (
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-indigo-500/40 flex items-center justify-center text-xs font-bold text-indigo-300 flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3 text-slate-400 text-xs py-2">
                <img
                  src={activeExpert.avatar}
                  alt={activeExpert.name}
                  className="w-7 h-7 rounded-full object-cover ring-1 ring-indigo-400"
                />
                <div className="bg-slate-800 border border-slate-700 px-3.5 py-2 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-slate-300 ml-1 font-medium">{activeExpert.name} is typing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Clickable Student Prompts */}
          <div className="mt-3 pt-3 border-t border-slate-800">
            <div className="text-[11px] text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Frequently asked by +2 students in {activeExpert.fieldCategory}:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeExpert.suggestedStudentPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-xs bg-slate-800/90 hover:bg-indigo-900/60 hover:text-indigo-200 hover:border-indigo-500/50 text-slate-300 border border-slate-700/80 px-3 py-1.5 rounded-xl transition text-left cursor-pointer flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                  <span>{prompt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input text form */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="mt-4 flex items-center gap-2"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder={`Ask ${activeExpert.name} about entrance, fees, scope, or curriculum in Nepal...`}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-2xl font-semibold transition flex items-center justify-center cursor-pointer shadow-lg shadow-indigo-600/30"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
