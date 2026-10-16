import type { Expert } from '../types/index.ts';

export interface VerifiedFieldExpert extends Expert {
  fieldId: string;
  fieldCategory: string;
  isOnlineNow: boolean;
  statusBadge: 'Online Now' | 'Available Today' | 'Booking Only';
  nextAvailableTime: string;
  nepaliAvailabilityNotice: string;
  suggestedStudentPrompts: string[];
  fieldExpertiseSummary: string;
  sampleQnA: {
    prompt: string;
    answer: string;
  }[];
}

export const VERIFIED_EXPERTS: VerifiedFieldExpert[] = [
  // 1. Software Engineering & IT
  {
    id: 'exp-ayush-shrestha',
    fieldId: 'software-engineering-it',
    fieldCategory: 'Software, AI & IT',
    name: 'Er. Ayush Shrestha',
    title: 'Lead Software Architect',
    role: 'Staff Engineer & Mentor',
    organization: 'US Remote / Ex-Leapfrog & Pulchowk Topper',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
    stream: 'science-physical',
    specialization: 'Full Stack Distributed Systems & AI Integration',
    nepaliBackground: 'Born in Butwal, Pulchowk IOE Computer Engineering graduate, 9+ years experience guiding +2 students',
    yearsExperience: 9,
    collegeAlumni: 'Pulchowk Campus (IOE), TU',
    bio: 'Passionate about helping Nepali students navigate between IOE, CSIT, BCA, and building world-class software careers from Nepal.',
    keyAdvice: 'Do not wait for 4th year college to build projects. A solid GitHub repository with 3 deployed web apps will get you hired faster than any gold medal.',
    topicsCanHelpWith: [
      'IOE vs CSIT vs BCA comparison',
      'How to land remote USD software developer jobs from Nepal',
      'Roadmap from complete beginner to Junior Developer',
      'Should I repeat a year for Pulchowk scholarship?'
    ],
    rating: 4.96,
    consultationsCount: 342,
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    availableSlots: ['5:30 PM - 6:30 PM NPT', '7:00 PM - 8:30 PM NPT'],
    languages: ['Nepali (नेपाली)', 'English'],
    isOnlineNow: true,
    statusBadge: 'Online Now',
    nextAvailableTime: 'Active Now (Instant Reply)',
    nepaliAvailabilityNotice: '🟢 Online Now • Ask directly in English or Nepali',
    fieldExpertiseSummary: 'IOE Pulchowk Alum, 9+ yrs in US Tech & Nepali Ecosystem',
    suggestedStudentPrompts: [
      'I am confused between BE Computer and BSc CSIT. Which one should I choose?',
      'Can I get a good software job in Nepal if I did +2 Management with Computer?',
      'How do I start learning coding right now during the post-+2 vacation?'
    ],
    sampleQnA: [
      {
        prompt: 'I am confused between BE Computer and BSc CSIT. Which one should I choose?',
        answer: 'Namaste! This is the #1 question every Nepali +2 graduate asks. Here is the unfiltered reality:\n\n1. Curriculum: BE Computer has 48 subjects including hardware, electrical circuits, and heavy physics. BSc. CSIT has 100% software, database, and algorithmic focus with no heavy hardware.\n2. Exam Stress: IOE Engineering exams are notoriously strict with lower pass percentages. CSIT has a smoother semester timetable leaving you more free time to build GitHub projects.\n3. Job Market: In tech companies (Leapfrog, Cotiviti, US remote), recruiters give ZERO extra points to an engineering degree over CSIT. They test pure coding ability.\n\nRecommendation: If you love deep mathematics and want the "Er." prefix or government engineering license, go for BE Computer. If you want to jump straight into software development with time for internships, BSc CSIT is fantastic.'
      },
      {
        prompt: 'Can I get a good software job in Nepal if I did +2 Management with Computer?',
        answer: '100% YES! In the modern tech industry, your high school stream does not limit you. You can enroll in BCA (Bachelor of Computer Applications) or BIT (Bachelor of Information Technology) affiliated with TU, Purbanchal, or foreign UK/Australian universities in Nepal. The software industry is the purest meritocracy: build great projects, master JavaScript/React or Python, and you will earn equally alongside any engineer.'
      },
      {
        prompt: 'How do I start learning coding right now during the post-+2 vacation?',
        answer: 'Do not waste the 3-month gap after +2! Here is my 60-day roadmap:\n1. Week 1-3: Take Harvard’s free "CS50x: Introduction to Computer Science" on YouTube or edX. It builds rock-solid logic.\n2. Week 4-6: Learn modern JavaScript (freeCodeCamp) and build simple interactive projects (a Nepali calendar widget, a currency converter).\n3. Week 7-8: Learn Git and create your GitHub profile. When your college starts, you will already be ahead of 90% of your classmates!'
      }
    ]
  },

  // 2. Medical & Health Sciences
  {
    id: 'exp-sneha-karki',
    fieldId: 'medical-health-sciences',
    fieldCategory: 'Medical & Healthcare',
    name: 'Dr. Sneha Karki',
    title: 'Resident Medical Officer',
    role: 'MBBS Doctor & CEE Mentor',
    organization: 'TUTH Maharajgunj / MEC Scholarship Ranker',
    avatar: 'https://images.unsplash.com/photo-1594824813579-91a5808b8b0e?auto=format&fit=crop&q=80&w=256',
    stream: 'science-bio',
    specialization: 'Internal Medicine & CEE Entrance Strategy',
    nepaliBackground: 'CEE Merit Rank #28, 5 years MBBS at Maharajgunj Medical Campus (IOM), served in rural Dolpa',
    yearsExperience: 6,
    collegeAlumni: 'Institute of Medicine (IOM), Maharajgunj',
    bio: 'Guiding aspiring medical and nursing students on realistic CEE preparation, overcoming drop-year anxiety, and medical ethics in Nepal.',
    keyAdvice: 'Medical entrance is an endurance marathon, not a sprint. Consistency in solving past 10 years NAME/Vibrant question banks beats reading 10 different textbooks.',
    topicsCanHelpWith: [
      'CEE Medical entrance preparation timetable and textbook selection',
      'Should I take a drop year for MBBS scholarship?',
      'MBBS vs BDS vs BSc Nursing vs B.Pharmacy career comparison',
      'Government bond service reality in rural Nepal'
    ],
    rating: 4.98,
    consultationsCount: 412,
    availableDays: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
    availableSlots: ['6:00 PM - 7:30 PM NPT', '8:00 PM - 9:00 PM NPT'],
    languages: ['Nepali (नेपाली)', 'English'],
    isOnlineNow: true,
    statusBadge: 'Online Now',
    nextAvailableTime: 'Active Now (Instant Reply)',
    nepaliAvailabilityNotice: '🟢 Online Now • Ask Medical & Health entrance questions',
    fieldExpertiseSummary: 'IOM Maharajgunj Topper, MEC Scholarship Rank #28',
    suggestedStudentPrompts: [
      'Should I take a drop year to prepare for CEE MBBS entrance?',
      'What is the scope and salary of BSc Nursing in Nepal and abroad?',
      'How does the 75% government scholarship under MEC actually work?'
    ],
    sampleQnA: [
      {
        prompt: 'Should I take a drop year to prepare for CEE MBBS entrance?',
        answer: 'Namaste! Taking one dedicated drop year after +2 is very common and respectable in Nepal. In fact, over 65% of students who secure government scholarships at IOM Maharajgunj, BPKIHS Dharan, and PAHS Patan are drop-year students.\n\nTake a drop year IF:\n- You genuinely love clinical medicine and cannot imagine yourself in another career.\n- You scored above 100-110 in your first attempt and have a disciplined study routine.\n- Your mental resilience can handle 8-10 hours daily revision for 9 months.\n\nDo NOT take multiple drop years if your passion is lukewarm—fields like B.Pharmacy, Biotechnology, and Nursing also offer stellar healthcare careers.'
      },
      {
        prompt: 'What is the scope and salary of BSc Nursing in Nepal and abroad?',
        answer: 'BSc Nursing has virtually 100% employment rate! In Nepal, fresh hospital nurses start around NPR 25,000 - 35,000 in private hospitals, and NPR 45,000+ in government/reputed teaching hospitals. However, the international pathway is unparalleled: after 1-2 years experience, Nepali nurses easily clear NCLEX-RN for the USA (earning $70,000 - $110,000/yr) or IELTS/OET for the UK National Health Service (NHS).'
      },
      {
        prompt: 'How does the 75% government scholarship under MEC actually work?',
        answer: 'Under the National Medical Education Act of Nepal, all government institutions (IOM, BPKIHS, PAHS, KAHS Jumla, Pokhara Academy) provide 75% of their total MBBS/BDS seats completely free of tuition! In return, scholarship recipients sign a 2-year rural health service bond with the Ministry of Health. You get paid full government Medical Officer scale during these 2 years while serving real communities.'
      }
    ]
  },

  // 3. Chartered Accountancy & Finance
  {
    id: 'exp-rohan-acharya',
    fieldId: 'chartered-accountancy-finance',
    fieldCategory: 'Chartered Accountancy & Finance',
    name: 'CA Rohan Acharya, FCA',
    title: 'Senior Audit Partner & CFO Advisor',
    role: 'Fellow Chartered Accountant (FCA)',
    organization: 'ICAN Registered Practicing Firm, Kathmandu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256',
    stream: 'management',
    specialization: 'ICAN/ICAI Examination, Corporate Taxation & Banking Audit',
    nepaliBackground: 'Cleared CAP-I, II, and III on first attempt, 8+ years practicing across commercial banks and hydropowers',
    yearsExperience: 8,
    collegeAlumni: 'Institute of Chartered Accountants of Nepal (ICAN)',
    bio: 'Helping +2 Management and Science students understand the true rigor, prestige, and financial rewards of Chartered Accountancy in Nepal.',
    keyAdvice: 'CA is not about raw genius; it is about relentless daily discipline. If you can dedicate 6-8 honest hours every day for 5 years, no one can stop you from putting "CA" before your name.',
    topicsCanHelpWith: [
      'ICAN (Nepal) vs ICAI (India) vs ACCA (UK) detailed comparison',
      'CAP-I syllabus preparation and coaching selection in Kathmandu',
      'Articleship training stipend and practical experience in Nepal',
      'Career scope in Nepali commercial banks vs starting your own audit firm'
    ],
    rating: 4.95,
    consultationsCount: 289,
    availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    availableSlots: ['6:30 PM - 8:00 PM NPT'],
    languages: ['Nepali', 'English'],
    isOnlineNow: false,
    statusBadge: 'Available Today',
    nextAvailableTime: 'Today at 6:30 PM NPT',
    nepaliAvailabilityNotice: '🟡 Available Today 6:30 PM NPT • Booking Slots Open',
    fieldExpertiseSummary: 'FCA, First Attempt ICAN Ranker, Bank Audit Specialist',
    suggestedStudentPrompts: [
      'Is CA too difficult for an average student in Nepal?',
      'ICAN vs ACCA vs ICAI: Which is better for a Nepali student?',
      'Can a +2 Science student do CA in Nepal?'
    ],
    sampleQnA: [
      {
        prompt: 'Is CA too difficult for an average student in Nepal?',
        answer: 'Namaste! The myth that CA has only a 1% pass rate scares away many brilliant students. The reality:\n- CAP-I (Foundation) has a 45-55% pass rate.\n- CAP-II (Intermediate) has a 25-35% pass rate.\n- CAP-III (Final) is rigorous, but for students who took their 3-year articleship seriously, the pass rate is 20-30%.\n\nCA tests consistency. If you studied sincerely for +2 and can sit with focus without getting distracted by social media, you can definitely clear CA.'
      },
      {
        prompt: 'ICAN vs ACCA vs ICAI: Which is better for a Nepali student?',
        answer: 'Clear breakdown:\n1. ICAN (Nepal): Mandatory if you want statutory signing power for audit balance sheets of Nepali companies and banks. Most respected in Nepal.\n2. ACCA (UK): Flexible, global recognition, high exam pass flexibility, but cannot sign statutory audits in Nepal without taking ICAN conversion.\n3. ICAI (India): Fantastic if you plan to work in Delhi, Mumbai, or Dubai. To practice in Nepal, you just need to pass ICAN’s Nepal Law & Tax conversion paper.'
      },
      {
        prompt: 'Can a +2 Science student do CA in Nepal?',
        answer: 'Yes! Some of the top CAs in Nepal originally came from +2 Science. Science students possess strong logical problem-solving abilities and mathematical discipline, which makes understanding debits, credits, and financial algorithms fast and intuitive.'
      }
    ]
  },

  // 4. Engineering & Infrastructure
  {
    id: 'exp-pradip-adhikari',
    fieldId: 'engineering-infrastructure',
    fieldCategory: 'Civil, Hydro & Infrastructure',
    name: 'Er. Pradip Adhikari',
    title: 'Senior Hydropower & Tunnel Engineer',
    role: 'Infrastructure Consultant',
    organization: 'Upper Tamakoshi Hydropower Alum / IOE Pulchowk',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256',
    stream: 'science-physical',
    specialization: 'Seismic Structural Design & Hydro Generation Systems',
    nepaliBackground: 'Pulchowk Civil Engineering Alum, worked on mega tunnels and hydro projects across Eastern Nepal',
    yearsExperience: 11,
    collegeAlumni: 'Pulchowk Campus (IOE), TU',
    bio: 'Guiding students toward real engineering craft: structural mechanics, hydropower design, and government Lok Sewa engineering technical exams.',
    keyAdvice: 'Do not just memorize formulas for IOE entrance. Understand how forces travel through beams and soil. Nepal needs builders who take pride in permanent infrastructure.',
    topicsCanHelpWith: [
      'IOE entrance exam 90-day preparation strategy',
      'Civil vs Mechanical vs Electrical in Nepal hydropower sector',
      'Private college vs constituent IOE campuses (Pulchowk, Thapathali, WRC)',
      'Lok Sewa 7th Level Civil Engineer preparation'
    ],
    rating: 4.92,
    consultationsCount: 260,
    availableDays: ['Wednesday', 'Thursday', 'Saturday'],
    availableSlots: ['7:00 PM - 8:30 PM NPT'],
    languages: ['Nepali', 'English'],
    isOnlineNow: false,
    statusBadge: 'Available Today',
    nextAvailableTime: 'Today at 7:00 PM NPT',
    nepaliAvailabilityNotice: '🟡 Available Today 7:00 PM NPT • Hydropower & Civil Advice',
    fieldExpertiseSummary: 'IOE Pulchowk Alum, 11+ yrs in Mega Hydropower & Tunnels',
    suggestedStudentPrompts: [
      'How to crack IOE entrance exam within top 1000 rank?',
      'Is there job scope for Civil Engineers in Nepal right now?',
      'What is the salary of an engineer working in Hydropower in Nepal?'
    ],
    sampleQnA: [
      {
        prompt: 'How to crack IOE entrance exam within top 1000 rank?',
        answer: 'Namaste! The IOE entrance is 140 marks total with negative marking (10% penalty). To secure top 1000:\n1. Mathematics (50 marks) and Physics (45 marks) carry 68% of total weight. Master calculus, vectors, mechanics, and electricity.\n2. Solve PEA or Orbit question banks under strict 2-hour timers.\n3. Never blind guess—negative marking drops your rank by hundreds.'
      },
      {
        prompt: 'Is there job scope for Civil Engineers in Nepal right now?',
        answer: 'Yes! Nepal is undergoing a generational infrastructure upgrade. Hydropower projects (targeting 28,000 MW by 2035), transmission corridors, highway tunnels (Nagdhunga, Siddhababa), and municipal urban infrastructure require thousands of competent site and design engineers.'
      },
      {
        prompt: 'What is the salary of an engineer working in Hydropower in Nepal?',
        answer: 'Fresh civil engineers on hydro sites start around NPR 35,000 - 55,000/month PLUS full site accommodation, food, and remote hardship allowances (which saves 100% of your living expenses). After 4-5 years, Project Managers and Senior Structural Designers earn NPR 1.5 - 3.5 Lakhs per month.'
      }
    ]
  },

  // 5. Law & Judicial Services
  {
    id: 'exp-pragya-sharma',
    fieldId: 'law-judicial-services',
    fieldCategory: 'Law & Judicial Services',
    name: 'Advocate Pragya Sharma',
    title: 'Supreme Court Advocate',
    role: 'Corporate Litigator & Constitutional Counsel',
    organization: 'Supreme Court Bar Association, Kathmandu',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256',
    stream: 'humanities',
    specialization: 'B.A. LL.B Entrance, Public Interest Litigation & Commercial Law',
    nepaliBackground: 'Nepal Law Campus Alum, 7 years arguing constitutional and commercial writs before Supreme Court of Nepal',
    yearsExperience: 7,
    collegeAlumni: 'Nepal Law Campus (TU)',
    bio: 'Demystifying the modern legal career in Nepal: corporate advisory, international arbitration, human rights litigation, and Judicial Service recruitment.',
    keyAdvice: 'Law is not for the faint-hearted; it is for those who burn with a desire for fairness, sharp argumentation, and constitutional defense.',
    topicsCanHelpWith: [
      'Nepal Law Campus vs KU School of Law entrance exam format',
      'Can Science/Management students do well in B.A. LL.B?',
      'Starting salary in corporate law firms vs independent litigation',
      'Judicial Service Lok Sewa exam for District Judges'
    ],
    rating: 4.97,
    consultationsCount: 220,
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    availableSlots: ['5:00 PM - 6:30 PM NPT'],
    languages: ['Nepali', 'English'],
    isOnlineNow: true,
    statusBadge: 'Online Now',
    nextAvailableTime: 'Active Now (Instant Reply)',
    nepaliAvailabilityNotice: '🟢 Online Now • Ask Law & Justice Questions',
    fieldExpertiseSummary: 'Supreme Court Advocate, Nepal Law Campus Graduate',
    suggestedStudentPrompts: [
      'What is tested in Nepal Law Campus B.A. LL.B entrance?',
      'Is Law a good career choice in Nepal for female students?',
      'What are corporate law firms in Nepal and what do they pay?'
    ],
    sampleQnA: [
      {
        prompt: 'What is tested in Nepal Law Campus B.A. LL.B entrance?',
        answer: 'Namaste! The B.A. LL.B entrance exam has 100 marks:\n1. Objective section: General Knowledge, Legal aptitude, Constitution basics, and Current Affairs.\n2. Subjective section: Critical essay writing on contemporary socio-political issues, creative problem-solving, and English comprehension.\nFocus on reading Nepal’s fundamental rights in the 2072 Constitution and daily editorial pages of Kantipur and The Kathmandu Post.'
      },
      {
        prompt: 'Is Law a good career choice in Nepal for female students?',
        answer: 'An exceptional choice! Women advocates in Nepal are leading constitutional arguments in the Supreme Court, serving as District Judges, and managing premier corporate law firms. The legal fraternity increasingly respects merit and eloquence.'
      },
      {
        prompt: 'What are corporate law firms in Nepal and what do they pay?',
        answer: 'Firms like Pioneer Law, Pradhan & Associates, and Gandhi & Associates handle foreign investments, hydropower contracts, and tech company compliance. Junior associates start around NPR 35,000 - 60,000, and mid-level partners earn NPR 1.5 - 3 Lakhs monthly.'
      }
    ]
  },

  // 6. Civil Services & Lok Sewa
  {
    id: 'exp-bikash-thapa',
    fieldId: 'civil-services-lok-sewa',
    fieldCategory: 'Civil Services & Public Policy',
    name: 'Officer Bikash Thapa',
    title: 'Under Secretary (Upa-Sachiv)',
    role: 'Civil Administration & Policy Lead',
    organization: 'Ministry of Federal Affairs & General Administration',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256',
    stream: 'humanities',
    specialization: 'Lok Sewa Aayog Sakha Adhikrit & Nayab Subba Examination',
    nepaliBackground: 'Topped Section Officer examination, served as Assistant Chief District Officer (CDO) in two districts',
    yearsExperience: 12,
    collegeAlumni: 'Tribhuvan University (Public Administration Campus)',
    bio: 'Guiding youths on how to prepare systematically for Lok Sewa Aayog from their college years without burning out.',
    keyAdvice: 'Lok Sewa is not about memorizing random trivia. It is about presenting balanced, constitutionally grounded policy solutions in crisp Nepali handwriting.',
    topicsCanHelpWith: [
      'How to prepare for Lok Sewa during Bachelor years (BBA/BBS/BA)',
      'First paper GK & IQ shortcut techniques',
      'Second, Third, and Fourth paper subjective answer writing structure',
      'Life and benefits of a Section Officer in Nepal'
    ],
    rating: 4.99,
    consultationsCount: 480,
    availableDays: ['Saturday', 'Sunday'],
    availableSlots: ['10:00 AM - 12:00 PM NPT', '4:00 PM - 6:00 PM NPT'],
    languages: ['Nepali', 'English'],
    isOnlineNow: false,
    statusBadge: 'Booking Only',
    nextAvailableTime: 'Saturday at 10:00 AM NPT',
    nepaliAvailabilityNotice: '🔵 Booking Open for Saturday 10:00 AM NPT',
    fieldExpertiseSummary: 'Under Secretary, Nepal Government, Lok Sewa Topper',
    suggestedStudentPrompts: [
      'Which bachelor degree should I study if my ultimate goal is Lok Sewa?',
      'Can an average student pass the Lok Sewa Section Officer exam?',
      'What are the exact perks and prestige of a Section Officer in Nepal?'
    ],
    sampleQnA: [
      {
        prompt: 'Which bachelor degree should I study if my ultimate goal is Lok Sewa?',
        answer: 'Namaste! Any recognized Bachelor degree (BBS, BBA, BA, BSc, BE, MBBS) qualifies you for Section Officer. If your sole focus is Lok Sewa, degrees like BBS or BA (Economics/Political Science) at government colleges offer manageable academic stress, leaving you 4-5 hours daily for Lok Sewa syllabus preparation.'
      },
      {
        prompt: 'Can an average student pass the Lok Sewa Section Officer exam?',
        answer: 'Absolutely! More than 80% of successful civil service officers in Nepal consider themselves "average" students in school. Lok Sewa rewards disciplined revision of the syllabus, structured point-wise writing, and consistent reading of Gorkhapatra Wednesday editions.'
      },
      {
        prompt: 'What are the exact perks and prestige of a Section Officer in Nepal?',
        answer: 'Beyond the monthly salary (~NPR 45,000+), you receive permanent job security, government quarters/allowances, pension/gratuity, respect as the state representative in districts, and priority government nominations for fully paid Master’s degrees in Australia, Japan, or the UK.'
      }
    ]
  },

  // 7. Hospitality & Tourism
  {
    id: 'exp-sujan-shakya',
    fieldId: 'hospitality-tourism-management',
    fieldCategory: 'Hospitality & Tourism',
    name: 'Chef Sujan Shakya',
    title: 'Executive Hotelier & GM',
    role: 'Hospitality Leader & Entrepreneur',
    organization: 'Luxury Boutique Resorts, Pokhara & Ex-Dubai Hyatt',
    avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=256',
    stream: 'management',
    specialization: 'BHM Career Roadmaps, International Internships & F&B Management',
    nepaliBackground: 'NATHM Kalimati graduate, 10+ years across 5-star properties in Dubai and luxury resorts in Nepal',
    yearsExperience: 10,
    collegeAlumni: 'Nepal Academy of Tourism and Hotel Management (NATHM)',
    bio: 'Helping +2 graduates explore the exciting world of hotel management, culinary arts, and global luxury hospitality careers.',
    keyAdvice: 'In hospitality, your personality, genuine warmth, and ability to speak fluent English open doors to the most luxurious destinations on Earth.',
    topicsCanHelpWith: [
      'BHM vs BTTM vs Culinary Arts comparison',
      'NATHM entrance test and low-cost government study pathways',
      'How the 6-month paid international internship works in Dubai/Maldives',
      'Starting your own restaurant or cafe in Nepal'
    ],
    rating: 4.89,
    consultationsCount: 195,
    availableDays: ['Tuesday', 'Friday', 'Saturday'],
    availableSlots: ['4:00 PM - 5:30 PM NPT'],
    languages: ['Nepali', 'English'],
    isOnlineNow: false,
    statusBadge: 'Available Today',
    nextAvailableTime: 'Today at 4:00 PM NPT',
    nepaliAvailabilityNotice: '🟡 Available Today 4:00 PM NPT • Hotel Management Advice',
    fieldExpertiseSummary: 'NATHM Alum, Ex-Hyatt Dubai, Luxury Hotel GM',
    suggestedStudentPrompts: [
      'Is BHM good for students who want to work abroad immediately?',
      'What is the total fee to study BHM at NATHM vs private colleges?',
      'What are the career opportunities in Nepal after BHM?'
    ],
    sampleQnA: [
      {
        prompt: 'Is BHM good for students who want to work abroad immediately?',
        answer: 'Yes! BHM is one of the fastest international launchpads. During your final year, your college sends you on a 6-month paid internship to luxury hotels in Dubai, Qatar, Bahrain, or Maldives. Over 60% of students receive full-time employment visas before they even return to Nepal to receive their graduation certificate!'
      },
      {
        prompt: 'What is the total fee to study BHM at NATHM vs private colleges?',
        answer: 'NATHM (Government Academy in Kalimati) costs around NPR 3.5 - 4.5 Lakhs for the entire 4-year degree. Private colleges affiliated with European/Swiss universities range from NPR 8 - 14 Lakhs. Both provide recognized degrees, but NATHM has legendary industry credibility in Nepal.'
      },
      {
        prompt: 'What are the career opportunities in Nepal after BHM?',
        answer: 'With Marriott, Hilton, Hyatt, and luxury boutique resorts across Kathmandu, Pokhara, and Chitwan, Nepal has an acute shortage of trained supervisory and Food & Beverage staff. You can also become an entrepreneur opening boutique cafes and cloud kitchens.'
      }
    ]
  },

  // 8. Agriculture & Forestry
  {
    id: 'exp-anita-rai-agri',
    fieldId: 'agriculture-forestry-biotech',
    fieldCategory: 'Agriculture & Bio-Sciences',
    name: 'Dr. Anita Rai',
    title: 'Senior Agri-Scientist',
    role: 'Smart Farming Specialist & Researcher',
    organization: 'Himalayan Climate Adaptation & AFU Alum',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=256',
    stream: 'science-bio',
    specialization: 'AFU/IAAS Entrance, Modern Hydroponics & Lok Sewa Krishi Adhikrit',
    nepaliBackground: 'AFU Rampur Chitwan graduate, completed Israel "Learn and Earn" fellowship, advises agro-enterprises',
    yearsExperience: 8,
    collegeAlumni: 'Agriculture and Forestry University (AFU), Rampur',
    bio: 'Guiding science students toward high-impact agricultural sciences, climate adaptation, and lucrative agro-business in Nepal.',
    keyAdvice: 'Do not view agriculture through 19th-century lenses. Today, agriculture is biotechnology, precision sensor farming, drone spraying, and high-value export crops.',
    topicsCanHelpWith: [
      'AFU vs IAAS entrance exam preparation tips',
      'The Israel "Learn and Earn" 11-month paid internship program',
      'Government Agricultural Officer (7th Level) career and scope',
      'Commercial farming feasibility and government subsidies in Nepal'
    ],
    rating: 4.94,
    consultationsCount: 178,
    availableDays: ['Thursday', 'Friday', 'Saturday'],
    availableSlots: ['6:00 PM - 7:30 PM NPT'],
    languages: ['Nepali', 'English'],
    isOnlineNow: true,
    statusBadge: 'Online Now',
    nextAvailableTime: 'Active Now (Instant Reply)',
    nepaliAvailabilityNotice: '🟢 Online Now • Agri & Forestry Career Advice',
    fieldExpertiseSummary: 'AFU Alum, Israel Fellow, Smart Agri Innovator',
    suggestedStudentPrompts: [
      'What are the career options after B.Sc. Agriculture in Nepal?',
      'How difficult is the AFU Rampur entrance examination?',
      'What is the Israel "Learn and Earn" program for agriculture students?'
    ],
    sampleQnA: [
      {
        prompt: 'What are the career options after B.Sc. Agriculture in Nepal?',
        answer: 'Namaste! Agriculture graduates have diverse options:\n1. Lok Sewa: 7th Level Agricultural Officer in all 753 Local Municipalities.\n2. INGOs/NGOs: USAID, FAO, ICIMOD, and Helvetas projects paying NPR 70,000 - 1.5 Lakhs.\n3. Agro-Entrepreneurship: Commercial kiwi, dragon fruit, seed production, or high-tech polyhouse farming.\n4. Foreign Scholarships: Generous Master’s/PhD research assistantships in the USA, Japan, Australia, and Europe.'
      },
      {
        prompt: 'How difficult is the AFU Rampur entrance examination?',
        answer: 'AFU entrance covers Physics, Chemistry, Botany, Zoology, English, and basic Agriculture. It is competitive, but practicing NAME/Agro-Vet question banks for 2 months consistently gives you a very strong chance at merit seats.'
      },
      {
        prompt: 'What is the Israel "Learn and Earn" program for agriculture students?',
        answer: 'A flagship bilateral program between Nepal and Israel where selected students travel to Israel for 11 months of hands-on greenhouse farming, advanced drip-irrigation training, and classroom studies. Students earn approximately NPR 12 - 18 Lakhs in savings while gaining cutting-edge knowledge!'
      }
    ]
  }
];
