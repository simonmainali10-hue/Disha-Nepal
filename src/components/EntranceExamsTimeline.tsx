import React, { useState } from 'react';
import { Calendar, Award, BookOpen, AlertCircle, Sparkles, ExternalLink, CheckCircle } from 'lucide-react';

interface EntranceExamData {
  id: string;
  name: string;
  conductingBody: string;
  targetDegrees: string;
  typicalTimeline: string;
  marksPattern: string;
  scholarshipSeats: string;
  preparationAdvice: string;
  officialSite: string;
}

const ENTRANCE_EXAMS: EntranceExamData[] = [
  {
    id: 'cee-mec',
    name: 'CEE (Common Entrance Examination)',
    conductingBody: 'Medical Education Commission (MEC) Nepal',
    targetDegrees: 'MBBS, BDS, BSc Nursing, B.Pharmacy, BPT',
    typicalTimeline: 'Notice: Kartik / Mangshir • Exam: Poush',
    marksPattern: '200 MCQs (Biology 80, Chemistry 50, Physics 50, Mental Agility 20)',
    scholarshipSeats: '75% full tuition scholarship in all government colleges (IOM, BPKIHS, PAHS, KAHS)',
    preparationAdvice: 'Daily practice of past 10 years question banks from NAME or Vibrant; focus heavily on Zoology & Botany genetics and ecology.',
    officialSite: 'mec.gov.np'
  },
  {
    id: 'ioe-tu',
    name: 'IOE Entrance Examination',
    conductingBody: 'Tribhuvan University Institute of Engineering',
    targetDegrees: 'BE Computer, BE Civil, BE Electrical, BE Mechanical',
    typicalTimeline: 'Notice: Shrawan • Computer-based exam at ICTC Pulchowk: Bhadra / Ashoj',
    marksPattern: '140 Marks (Math 50, Physics 45, Chemistry 25, English 20) with negative marking',
    scholarshipSeats: 'Constituent colleges (Pulchowk, Thapathali, WRC, ERC) offer low-cost regular merit seats (~NPR 35,000 total)',
    preparationAdvice: 'Calculus and Mechanics carry maximum weight. Accuracy is key due to 10% negative marking penalty.',
    officialSite: 'entrance.ioe.edu.np'
  },
  {
    id: 'cmat-tu',
    name: 'CMAT (Central Management Admissions Test)',
    conductingBody: 'TU Faculty of Management',
    targetDegrees: 'BBA, BIM, BHM, BBM, BPA, BTTM',
    typicalTimeline: 'Notice: Shrawan • Exam: Bhadra / Ashoj',
    marksPattern: '100 MCQs (Verbal Ability 25, Quantitative 25, Logical Reasoning 25, General Awareness 25)',
    scholarshipSeats: 'Merit scholarships in constituent campuses (Shanker Dev, NCC, Public Administration)',
    preparationAdvice: 'Read daily English editorials for vocabulary; practice fast mental math and basic speed-distance-time shortcuts.',
    officialSite: 'fomecd.edu.np'
  },
  {
    id: 'ku-cbt',
    name: 'KU Engineering & Management (CBT / KUUMAT)',
    conductingBody: 'Kathmandu University, Dhulikhel',
    targetDegrees: 'BE Computer/Civil, BBA, BBIS',
    typicalTimeline: 'Notice: Ashad / Shrawan • CBT Exam: Shrawan',
    marksPattern: 'Computer-Based Test (CBT) covering PCM or Management aptitude',
    scholarshipSeats: 'KU offers generous merit-cum-need based tuition waivers to top rankers',
    preparationAdvice: 'Focus on clear conceptual understanding; KU does not test obscure rote memory.',
    officialSite: 'ku.edu.np'
  },
  {
    id: 'law-entrance',
    name: 'Nepal Law Campus B.A. LL.B Entrance',
    conductingBody: 'TU Faculty of Law & Nepal Law Campus',
    targetDegrees: 'B.A. LL.B (5-year integrated law)',
    typicalTimeline: 'Notice: Shrawan • Exam: Bhadra / Ashoj',
    marksPattern: '100 Marks (Objective Legal & General Aptitude + Subjective Critical Essay Writing)',
    scholarshipSeats: '105 regular merit seats at Nepal Law Campus Exhibition Road (~NPR 50,000 for 5 years)',
    preparationAdvice: 'Read Constitution of Nepal 2072 Part 3 (Fundamental Rights) and master analytical essay writing in formal Nepali or English.',
    officialSite: 'fol.edu.np'
  },
  {
    id: 'ican-cap1',
    name: 'ICAN CAP-I Eligibility & Foundation',
    conductingBody: 'Institute of Chartered Accountants of Nepal',
    targetDegrees: 'Chartered Accountancy (CA)',
    typicalTimeline: 'Registration: Open biannually • Exams in June & December',
    marksPattern: '300 Marks (Paper 1: Accounting, Paper 2: Merc Law & Econ, Paper 3: Math & Stats)',
    scholarshipSeats: 'Affordable self-paced professional fees with paid articleship stipend during training',
    preparationAdvice: 'Daily practice of ICAN study modules and revision test papers (RTPs); conceptual understanding of accounting debit/credit standards.',
    officialSite: 'ican.org.np'
  }
];

export const EntranceExamsTimeline: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<EntranceExamData>(ENTRANCE_EXAMS[0]);

  return (
    <div className="w-full my-12" id="entrance-exams-guide">
      <div className="bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 p-6 md:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              Nepal Entrance Exams Master Guide
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Entrance Exam Roadmap & Scholarship Criteria
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Don't miss application deadlines! Here is the authentic breakdown of CEE, IOE, CMAT, KU, and Law entrances in Nepal.
            </p>
          </div>
          <div className="text-xs text-slate-400 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700/60">
            Current Academic Cycle: <span className="text-emerald-400 font-bold">Post +2 Admission Batch</span>
          </div>
        </div>

        {/* Exam Selection Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {ENTRANCE_EXAMS.map(exam => {
            const isSelected = exam.id === selectedExam.id;
            return (
              <button
                key={exam.id}
                onClick={() => setSelectedExam(exam)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-700'
                }`}
              >
                {exam.name.split('(')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Selected Exam Deep Dive Card */}
        <div className="mt-4 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {selectedExam.conductingBody}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {selectedExam.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Qualifying for: <span className="text-slate-200 font-semibold">{selectedExam.targetDegrees}</span>
              </p>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Exam Timeline in Nepal:</span>
                <span className="font-semibold text-amber-300">{selectedExam.typicalTimeline}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Question Format:</span>
                <span className="font-semibold text-slate-200">{selectedExam.marksPattern}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Official Portal:</span>
                <span className="font-mono text-indigo-400 font-bold">{selectedExam.officialSite}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-emerald-950/30 p-4 rounded-xl border border-emerald-800/40 text-xs">
              <div className="text-emerald-400 font-bold flex items-center gap-1.5 mb-1.5">
                <Award className="w-4 h-4" />
                Government Scholarship Quotas:
              </div>
              <p className="text-emerald-200/90 leading-relaxed">
                {selectedExam.scholarshipSeats}
              </p>
            </div>

            <div className="bg-indigo-950/30 p-4 rounded-xl border border-indigo-800/40 text-xs">
              <div className="text-indigo-400 font-bold flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-4 h-4" />
                Top Ranker Preparation Advice:
              </div>
              <p className="text-indigo-200/90 leading-relaxed">
                {selectedExam.preparationAdvice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
