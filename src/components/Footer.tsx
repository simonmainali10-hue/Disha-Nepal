import React from 'react';
import { Compass, Heart, ShieldCheck, Mail, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-rose-600 to-amber-500 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">DISHA NEPAL</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering Nepali students after Grade 12 (+2) with verified industry mentors, realistic NPR salaries, entrance roadmaps, and clarity to build fulfilling careers.
            </p>
            <div className="text-[11px] text-slate-500 font-nepali">
              हाम्रो लक्ष्य: कुनै पनि नेपाली विद्यार्थी गलत जानकारीका कारण अन्योलमा नपरुन्।
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Career Segments
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#careers-catalog" className="hover:text-indigo-400 transition">Software Engineering & IT</a></li>
              <li><a href="#careers-catalog" className="hover:text-indigo-400 transition">Medical & Healthcare (CEE)</a></li>
              <li><a href="#careers-catalog" className="hover:text-indigo-400 transition">Chartered Accountancy (ICAN)</a></li>
              <li><a href="#careers-catalog" className="hover:text-indigo-400 transition">Civil & Hydropower Engineering</a></li>
              <li><a href="#careers-catalog" className="hover:text-indigo-400 transition">Law & Judicial Services (B.A. LL.B)</a></li>
              <li><a href="#careers-catalog" className="hover:text-indigo-400 transition">Lok Sewa & Civil Administration</a></li>
            </ul>
          </div>

          {/* Mentorship & Availability */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Mentorship Network
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#expert-chat-modules" className="hover:text-indigo-400 transition">Field Chat Modules</a></li>
              <li><a href="#expert-availability-system" className="hover:text-indigo-400 transition">Live Mentor Availability</a></li>
              <li><a href="#expert-availability-system" className="hover:text-indigo-400 transition">Free 1-on-1 Video Session</a></li>
              <li><a href="#entrance-exams-guide" className="hover:text-indigo-400 transition">CEE / IOE / CMAT Entrance Prep</a></li>
            </ul>
          </div>

          {/* Disclaimer & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Nepali Student Support
            </h4>
            <div className="text-xs text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
              <span>Kathmandu, Pokhara, Chitwan, Butwal & across all 7 Provinces of Nepal</span>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span>mentors@dishanepal.org.np</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-400">
              * Disha Nepal is an independent educational initiative to guide students with unbiased market facts.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Disha Nepal (दिशा नेपाल). Dedicated to the brilliant youth of Nepal.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for students after +2 in Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
