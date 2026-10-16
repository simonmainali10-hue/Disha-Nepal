import type { Career } from '../types/index.ts';

export interface ExtendedCareerGuide {
  jobSatisfaction: string;
  societalContribution: string;
  futureNepalOpportunities: string[];
  learningResources: {
    category: string;
    items: {
      name: string;
      type: 'Local Institute (Nepal)' | 'Online Platform' | 'Free Community' | 'University Initiative';
      locationOrUrl: string;
      description: string;
    }[];
  }[];
}

export interface CareerWithGuide extends Career {
  detailedGuide: ExtendedCareerGuide;
}

export const CAREERS_DATA: CareerWithGuide[] = [
  {
    id: 'software-engineering-it',
    title: 'Software Engineering, AI & IT',
    nepaliTitle: 'सफ्टवेयर इन्जिनियरिङ, एआई तथा सूचना प्रविधि',
    stream: 'science-physical',
    category: 'Information Technology',
    badge: 'Highest Remote & Export Demand',
    summary: 'Build world-class web, mobile, and AI software from Nepal for local fintechs or global US/European tech companies.',
    overview: 'The tech sector in Nepal is currently the fastest-growing service export industry, contributing over $515M annually. Whether pursuing BE Computer, BSc. CSIT, BCA, or BIT, Nepali software engineers can work from Kathmandu, Pokhara, Butwal, or Chitwan while commanding global salaries.',
    durationYears: 4,
    eligibilityGPA: 2.4,
    minRequirements: 'Min C+ in Physics, Chemistry & Mathematics (+2 Science) or Math/Stats for BCA/BIT',
    primaryDegrees: ['BE Computer (IOE / KU / Pokhara)', 'BSc. CSIT (TU)', 'BCA (TU / Purbanchal)', 'BIT (TU / Foreign Affiliated)'],
    entranceExams: [
      { name: 'IOE Entrance', conductingBody: 'Tribhuvan University Institute of Engineering', difficulty: 'Very High', timeline: 'Bhadra / Ashoj', seatsNote: 'Pulchowk, Thapathali, WRC, ERC' },
      { name: 'BSc. CSIT Entrance', conductingBody: 'TU Institute of Science & Technology (IOST)', difficulty: 'High', timeline: 'Bhadra / Ashoj', seatsNote: 'Amrit Science, Patan Multiple, St. Xavier’s' },
      { name: 'KUMAT / KU Engineering Entrance', conductingBody: 'Kathmandu University (Dhulikhel)', difficulty: 'High', timeline: 'Shrawan / Bhadra', seatsNote: 'KU School of Engineering' }
    ],
    topCollegesNepal: ['Pulchowk Campus (IOE)', 'Kathmandu University (KU)', 'Thapathali Campus', 'St. Xavier’s College (Maitighar)', 'Deerwalk Institute of Technology', 'Nepal College of Information Technology (NCIT)'],
    benefits: [
      'Top-tier remote earning potential in USD without leaving Nepal',
      'Merit-driven industry where GitHub portfolio matters more than political connections',
      'Flexible hybrid and work-from-home culture across Kathmandu and Pokhara',
      'High mobility for overseas Master’s degree scholarships (USA, Germany, Finland)'
    ],
    skillsNeeded: {
      technical: [
        'Programming: Python, JavaScript/TypeScript, Java, C++',
        'Full-Stack Frameworks: React, Next.js, Node.js, Django, Spring Boot',
        'Database & Cloud: PostgreSQL, MongoDB, Redis, AWS/Docker basics',
        'AI & Data Tools: PyTorch, scikit-learn, Vector DBs, LangChain'
      ],
      soft: [
        'Async English communication with international clients',
        'Systematic problem-solving and algorithmic thinking',
        'Continuous self-learning (frameworks change every 2 years)',
        'Team collaboration, code reviews, and git etiquette'
      ],
      tools: ['VS Code', 'Git & GitHub', 'Postman', 'Docker', 'Linux/Terminal', 'Figma']
    },
    salaryNPR: {
      entryMonthly: { min: 35000, max: 65000, label: 'NPR 35,000 – 65,000' },
      midMonthly: { min: 85000, max: 200000, label: 'NPR 85,000 – 2,00,000' },
      seniorMonthly: { min: 220000, max: 550000, label: 'NPR 2.2 – 5.5 Lakhs+' },
      overseasAnnualUSD: { min: 50000, max: 130000, label: '$50,000 – $130,000 / yr' },
      marketDemandRating: 5,
      remoteOpportunities: true,
      freelancePotential: 'Exceptional',
      note: 'Leading firms like Leapfrog Technology, Cotiviti, Deerhold, Fusemachines, and Cloudfactory offer formal career ladders, while remote contractors bill $20-$60/hour.'
    },
    motivationFactor: {
      headline: 'Empowering Nepal Through Global Code',
      quote: 'You do not need to stand in airport queues to earn in dollars and build world-scale technology.',
      author: 'Er. Kailash Shrestha, VP of Engineering',
      storySummary: 'Coming from a government school background in Syangja, Kailash studied BSc CSIT at Patan Campus. Through open-source contributions and late-night coding, he now leads a 40-member AI engineering group in Kathmandu serving Fortune 500 US clients.',
      impactInNepal: 'Inflowing foreign currency into Nepal’s banking reserves, mentoring the next generation, and preventing brain-drain.'
    },
    mythsAndRealities: [
      { myth: 'You must get into Pulchowk Campus to become a successful software developer.', reality: 'Pulchowk is prestigious, but 70%+ of top developers in Nepali tech firms come from TU CSIT, BCA, KU, or self-taught backgrounds. GitHub repos and live projects trump college names.' },
      { myth: 'AI will eliminate all coding jobs for junior developers.', reality: 'AI automates boilerplate code, but boosts demand for engineers who understand systems architecture, domain logic, and AI integration.' }
    ],
    tags: ['coding', 'computers', 'remote', 'technology', 'math', 'ai', 'high-salary'],
    popularQuestions: [
      { question: 'BSc. CSIT vs BE Computer: Which one should I prioritize?', answer: 'Both degrees qualify you identically for software jobs in Nepal and abroad. BE Computer covers electronics hardware and IOE engineering syllabus; CSIT is 100% focused on software, algorithms, and computing theory with lower academic exam stress.', expertName: 'Er. Ayush Shrestha', expertRole: 'Lead Software Architect' },
      { question: 'Can I get a software job in Nepal if I did +2 Management with Computer Science?', answer: 'Yes! BCA and BIT programs under TU and Purbanchal University accept +2 Management students. Tech companies interview purely on technical tests and coding rounds.', expertName: 'Pooja Pandey', expertRole: 'Tech Recruiter & HR Lead' }
    ],
    detailedGuide: {
      jobSatisfaction: 'Very high. Nepali software professionals enjoy creative freedom, merit-based promotions, flat hierarchies, modern office campuses in Lalitpur/Kathmandu, and strong camaraderie in tech meetups.',
      societalContribution: 'Powers Nepal’s digital infrastructure—from National ID and Nagarik App to interbank digital payments (eSewa, Khalti, F1Soft) and tele-medicine platforms for remote Himalayan villages.',
      futureNepalOpportunities: [
        'Nepal IT Export Policy 2024 target of 1.5 Lakh tech jobs in 5 years',
        'Surge in US/European off-shore development centers setting up in Kathmandu',
        'Fintech expansion: QR payment integrations, credit-scoring AI models, and remittance automation',
        'Himalayan Climate-tech, Agri-tech and GIS mapping for landslide and flood monitoring'
      ],
      learningResources: [
        {
          category: 'Hands-on Technical Training Institutes in Nepal',
          items: [
            { name: 'Broadway Infosys', type: 'Local Institute (Nepal)', locationOrUrl: 'Tinkune, Kathmandu', description: 'Industry-standard MERN, Python Django, and DevOps courses with project internships.' },
            { name: 'Deerwalk Training Center', type: 'Local Institute (Nepal)', locationOrUrl: 'Sifal, Kathmandu', description: 'Practical hands-on bootcamps modeled on US software development workflows.' },
            { name: 'Dursikshya Education Network', type: 'Local Institute (Nepal)', locationOrUrl: 'Kathmandu', description: 'Data Science, Cloud, and Web development career programs.' }
          ]
        },
        {
          category: 'Free World-Class Online Platforms',
          items: [
            { name: 'CS50x: Introduction to Computer Science', type: 'Online Platform', locationOrUrl: 'cs50.harvard.edu', description: 'The gold standard foundation in computational thinking, C, Python, SQL, and web development.' },
            { name: 'The Odin Project / freeCodeCamp', type: 'Online Platform', locationOrUrl: 'theodinproject.com', description: 'Free, community-driven full-stack JavaScript and Ruby curriculum.' },
            { name: 'roadmap.sh (Developer Roadmaps)', type: 'Online Platform', locationOrUrl: 'roadmap.sh', description: 'Step-by-step visual roadmaps for Frontend, Backend, DevOps, and AI engineers.' }
          ]
        },
        {
          category: 'Nepali Tech Communities & Meetups',
          items: [
            { name: 'TechLekh & Developers Nepal', type: 'Free Community', locationOrUrl: 'Facebook & Discord Communities', description: 'Active community of 60,000+ Nepali programmers sharing job openings and code reviews.' },
            { name: 'Open Knowledge Nepal & Python Nepal (PyData)', type: 'Free Community', locationOrUrl: 'Kathmandu / Online', description: 'Monthly tech talks, open-source sprints, and hackathons.' }
          ]
        }
      ]
    }
  },
  {
    id: 'medical-health-sciences',
    title: 'Medical & Healthcare (MBBS, BDS, Nursing)',
    nepaliTitle: 'चिकित्सा तथा स्वास्थ्य विज्ञान (एमबीबीएस, बीडीएस, नर्सिङ)',
    stream: 'science-bio',
    category: 'Healthcare & Medicine',
    badge: 'Supreme Honor & Public Impact',
    summary: 'Diagnose, heal, and save lives across Nepal’s tertiary hospitals, rural health centers, and global medical research centers.',
    overview: 'Healthcare is a noble calling with immense respect in Nepali society. Admission is centralized via the Common Entrance Examination (CEE) conducted by the Medical Education Commission (MEC), with 75% government scholarship seats in public colleges.',
    durationYears: 5.5,
    eligibilityGPA: 2.4,
    minRequirements: 'Min C+ in Physics, Chemistry & Biology (+2 Science Biology stream) with at least 50% aggregate marks',
    primaryDegrees: ['MBBS (Bachelor of Medicine & Surgery - 5.5 yrs)', 'BDS (Bachelor of Dental Surgery - 5 yrs)', 'BSc. Nursing / BNS (4 yrs)', 'B.Pharmacy (4 yrs)', 'BPT (Physiotherapy - 4.5 yrs)'],
    entranceExams: [
      { name: 'MECEE-BL (Medical Education Common Entrance Exam)', conductingBody: 'Medical Education Commission (MEC) Nepal', difficulty: 'Very High', timeline: 'Mangshir / Poush', seatsNote: 'Centralized exam for MBBS, BDS, Nursing across TU, KU, BPKIHS, PAHS, KAHS' }
    ],
    topCollegesNepal: ['Institute of Medicine (IOM), Maharajgunj Campus', 'BP Koirala Institute of Health Sciences (BPKIHS), Dharan', 'Kathmandu University School of Medical Sciences (KUSMS)', 'Patan Academy of Health Sciences (PAHS)', 'Karnali Academy of Health Sciences (KAHS), Jumla', 'Manipal College of Medical Sciences, Pokhara'],
    benefits: [
      'Peerless societal reverence and the privilege of saving human lives',
      'Lifelong recession-proof career stability—doctors and nurses are always needed',
      'Government bond scholarship opportunities with free education in exchange for rural service',
      'Global licensing pathways (USMLE for USA, PLAB for UK, AMC for Australia)'
    ],
    skillsNeeded: {
      technical: [
        'Anatomical and clinical pathophysiology diagnosis',
        'Pharmacological drug interactions and emergency life support (BLS/ACLS)',
        'Surgical precision, suturing, and clinical charting',
        'Preventive community medicine and epidemiological tracking'
      ],
      soft: [
        'Deep empathy and bedside communication in diverse Nepali dialects',
        'Composure under high-stress emergency resuscitation',
        'Ethical decision-making and patient confidentiality',
        'Interdisciplinary teamwork with nurses, pharmacists, and lab techs'
      ],
      tools: ['Stethoscope', 'Ultrasound & ECG monitors', 'Surgical kits', 'EMR software', 'Diagnostic laboratory analyzers']
    },
    salaryNPR: {
      entryMonthly: { min: 48000, max: 75000, label: 'NPR 48,000 – 75,000' },
      midMonthly: { min: 90000, max: 220000, label: 'NPR 90,000 – 2,20,000' },
      seniorMonthly: { min: 250000, max: 800000, label: 'NPR 2.5 – 8.0 Lakhs+' },
      overseasAnnualUSD: { min: 180000, max: 350000, label: '$180,000 – $350,000 / yr (Post USMLE Residency)' },
      marketDemandRating: 5,
      remoteOpportunities: false,
      freelancePotential: 'Moderate',
      note: 'Government 8th-level Medical Officer scale starts at ~NPR 52,000/month with rural allowances up to 100%. Experienced Super-specialist MD/MS consultants earn NPR 3-8 Lakhs monthly.'
    },
    motivationFactor: {
      headline: 'Healing the Remote Ridges of the Himalayas',
      quote: 'When a mother in Humla looks into your eyes after you save her newborn child, no currency in the world matches that blessing.',
      author: 'Dr. Sneha Karki, Medical Officer & CEE Top Ranker',
      storySummary: 'Sneha completed her MBBS from IOM Maharajgunj on a government scholarship and served two years in Mugu District Hospital. She transformed local maternal delivery safety before pursuing MD Internal Medicine.',
      impactInNepal: 'Bridging the profound healthcare divide between Kathmandu and remote mountain districts.'
    },
    mythsAndRealities: [
      { myth: 'You must pay 50-60 Lakhs to study MBBS in Nepal.', reality: 'Under MEC guidelines, 75% of seats in all public institutions (IOM, BPKIHS, PAHS, KAHS) are 100% full tuition scholarships for deserving CEE rankers.' },
      { myth: 'Once you graduate MBBS, you immediately earn huge wealth.', reality: 'MBBS is a long-term commitment. Early years require rigorous residency (MD/MS) training before peak consulting compensation arrives.' }
    ],
    tags: ['medical', 'biology', 'health', 'doctor', 'nursing', 'cee', 'high-respect'],
    popularQuestions: [
      { question: 'Should I take a drop year to prepare for CEE entrance?', answer: 'Taking one dedicated preparation year is very common in Nepal. Over 60% of students who secure government scholarships at IOM or BPKIHS prepared with structured focus after +2.', expertName: 'Dr. Sneha Karki', expertRole: 'IOM Alum & Resident Doctor' },
      { question: 'What is the scope of BSc Nursing vs MBBS in Nepal and abroad?', answer: 'BSc Nursing has nearly 100% immediate employment in Nepal and unprecedented immigration pathways to the UK (NHS), USA (NCLEX-RN), and Australia.', expertName: 'Nurse Suprina Shrestha', expertRole: 'Senior Critical Care Nurse' }
    ],
    detailedGuide: {
      jobSatisfaction: 'Immense personal fulfillment. Watching patients recover from critical illness provides profound psychological and spiritual meaning unmatched by desk jobs.',
      societalContribution: 'Directly impacts life expectancy, maternal mortality, infectious disease containment (Dengue, Typhoid, Tuberculosis), and national healthcare resilience.',
      futureNepalOpportunities: [
        'Rapid expansion of tertiary multispecialty hospitals across all 7 provinces',
        'Health insurance board (Swasthya Bima Board) expansion driving patient volume',
        'Telemedicine networks connecting rural health posts to Kathmandu specialists',
        'Preventive wellness, diagnostic labs, and medical equipment entrepreneurship'
      ],
      learningResources: [
        {
          category: 'CEE Preparation Institutes in Nepal',
          items: [
            { name: 'NAME Institute for Medical Education', type: 'Local Institute (Nepal)', locationOrUrl: 'Putalisadak, Kathmandu', description: 'Nepal’s premier medical entrance coaching institute with weekly model exams and test series.' },
            { name: 'Vibrant Medical Education', type: 'Local Institute (Nepal)', locationOrUrl: 'New Plaza, Kathmandu', description: 'Experienced faculty for Zoology, Botany, Physics, and Chemistry CEE modules.' }
          ]
        },
        {
          category: 'Digital Medical Learning & Anatomy Portals',
          items: [
            { name: 'Geeky Medics & Amboss Medical', type: 'Online Platform', locationOrUrl: 'geekymedics.com', description: 'Clinical examination OSCE guides and interactive case studies.' },
            { name: 'Kenhub: Learn Human Anatomy', type: 'Online Platform', locationOrUrl: 'kenhub.com', description: 'Comprehensive histology, neuroanatomy, and clinical atlas quizzes.' }
          ]
        }
      ]
    }
  },
  {
    id: 'chartered-accountancy-finance',
    title: 'Chartered Accountancy (CA) & Corporate Finance',
    nepaliTitle: 'चार्टर्ड एकाउन्टेन्सी (सीए) तथा कर्पोरेट फाइनान्स',
    stream: 'management',
    category: 'Finance, Audit & Taxation',
    badge: 'Supreme Corporate Authority & Prestige',
    summary: 'Command financial truth, lead corporate boardrooms, and hold statutory audit signing powers for banks, hydropowers, and government agencies.',
    overview: 'Chartered Accountants (CAs) are the highest financial authorities in Nepal. Regulated by the Institute of Chartered Accountants of Nepal (ICAN), CAs possess exclusive legal authority under the Nepal CA Act to certify financial statements and guide corporate governance.',
    durationYears: 5,
    eligibilityGPA: 2.4,
    minRequirements: 'Min C+ in +2 (Management, Science, or Humanities with Math/Economics)',
    primaryDegrees: ['ICAN (Nepal Scheme: CAP-I, CAP-II, CAP-III + 3 yrs Articleship)', 'ICAI (India Scheme with ICAN Membership exam)', 'ACCA (UK Chartered Certified Accountant)'],
    entranceExams: [
      { name: 'CAP-I Eligibility Assessment', conductingBody: 'Institute of Chartered Accountants of Nepal (ICAN)', difficulty: 'Very High', timeline: 'June & December biannual exams', seatsNote: 'Self-paced professional course with rigorous passing criteria' }
    ],
    topCollegesNepal: ['CCMA Career Corner (Putalisadak)', 'Prime CA (Bagbazar)', 'AOC (Academy of Commerce)', 'Chanakya CA', 'National College of Accountancy (ACCA)'],
    benefits: [
      'Exclusive statutory audit certification authority under Nepal law',
      'Direct pathway to CFO, Director of Finance, and Board Advisory roles',
      'Immense prestige in commercial banks (Nabil, NIC Asia, Global IME, Sanima)',
      'Independent practice potential: own your audit firm and corporate consultancy'
    ],
    skillsNeeded: {
      technical: [
        'Nepal Financial Reporting Standards (NFRS) & IFRS Compliance',
        'Direct & Indirect Nepalese Taxation (Income Tax Act 2058, VAT Act 2052)',
        'Forensic Auditing, Risk Management & Internal Control Audits',
        'Financial Modeling, M&A Valuation & Capital Budgeting'
      ],
      soft: [
        'Unwavering professional ethics and intellectual honesty',
        'Executive negotiation with corporate boards and tax authorities',
        'Deep analytical skepticism and precision under tight deadlines',
        'Leadership of multidisciplinary audit teams during peak season'
      ],
      tools: ['Tally Prime & ERP 9', 'Advanced Financial Excel (Macros, VBA)', 'Finacle Banking Software', 'SAP ERP', 'Power BI']
    },
    salaryNPR: {
      entryMonthly: { min: 55000, max: 95000, label: 'NPR 55,000 – 95,000' },
      midMonthly: { min: 120000, max: 280000, label: 'NPR 1,20,000 – 2,80,000' },
      seniorMonthly: { min: 300000, max: 900000, label: 'NPR 3.0 – 9.0 Lakhs+' },
      overseasAnnualUSD: { min: 65000, max: 140000, label: '$65,000 – $140,000 / yr (Middle East & Global)' },
      marketDemandRating: 5,
      remoteOpportunities: false,
      freelancePotential: 'Exceptional',
      note: 'Freshly qualified CAs in Nepal secure immediate offers from "Big 4" affiliates (BDO, EY associate firms, PKF) and A-class commercial banks. Experienced practitioners with independent audit firms earn substantial seven-figure annual incomes.'
    },
    motivationFactor: {
      headline: 'Guardians of Nepal’s Financial Integrity',
      quote: 'A single pen stroke of a Chartered Accountant certifies the trust of millions of bank depositors.',
      author: 'CA Rohan Acharya, FCA & Senior Audit Partner',
      storySummary: 'Coming from a rural farming family in Jhapa, Rohan cleared CAP-I, II, and III on his first attempts while completing 3 years of rigorous articleship in Kathmandu. At age 28, he became the youngest Chief Risk Officer of an A-Class commercial bank.',
      impactInNepal: 'Preventing financial fraud, optimizing tax revenues for public schools/roads, and structuring financing for mega hydropower projects.'
    },
    mythsAndRealities: [
      { myth: 'CA is an impossible course with a 1% pass rate in Nepal.', reality: 'While CAP-III is rigorous, students with consistent 6-8 hours daily study and disciplined 3-year articleship clear the exam in 5-6 years. The pass rate for committed students is 20-30%.' },
      { myth: 'You must do Indian ICAI; ICAN has no value.', reality: 'ICAN is the sole legal body granting statutory audit licenses for Nepali registered companies and government enterprises. ICAN is now fully autonomous and revered.' }
    ],
    tags: ['finance', 'accounting', 'business', 'audit', 'tax', 'management', 'ca', 'high-salary'],
    popularQuestions: [
      { question: 'ICAN (Nepal) vs ACCA (UK) vs ICAI (India): What is best for a Nepali student?', answer: 'If your goal is to live, practice, and sign audit balance sheets in Nepal, ICAN is essential. ACCA offers global flexibility and paper exemptions. ICAI is great for practice in India and the Middle East, but requires ICAN conversion exams for Nepal practice.', expertName: 'CA Rohan Acharya', expertRole: 'FCA & Managing Partner' },
      { question: 'Do I get paid during the 3-year articleship training?', answer: 'Yes! ICAN mandates a monthly stipend during your 3-year articleship under a certified CA firm (ranging from NPR 8,000 - 20,000/month), giving you paid real-world corporate experience before graduation.', expertName: 'Pooja Pandey', expertRole: 'Corporate Advisor' }
    ],
    detailedGuide: {
      jobSatisfaction: 'High prestige and intellectual challenge. CAs solve complex financial puzzles, uncover corporate irregularities, and steer billion-rupee investment portfolios.',
      societalContribution: 'Guarantees that public taxes are honestly paid, ensures shareholder funds are safe in banks, and provides financial architecture for national infrastructure bonds.',
      futureNepalOpportunities: [
        'Mandatory NFRS adoption for small and medium enterprises (SMEs) across Nepal',
        'Boom in Nepal Stock Exchange (NEPSE) listed companies, rights offerings, and IPOs',
        'Cross-border electricity trade with India/Bangladesh requiring complex financial modeling',
        'Tax digitization, transfer pricing scrutiny, and anti-money laundering (AML) compliance'
      ],
      learningResources: [
        {
          category: 'Premier CA Coaching Institutes in Nepal',
          items: [
            { name: 'CCMA Career Corner', type: 'Local Institute (Nepal)', locationOrUrl: 'Putalisadak, Kathmandu', description: 'Established CA coaching institute with renowned faculty for tax, law, and accounts.' },
            { name: 'Prime CA', type: 'Local Institute (Nepal)', locationOrUrl: 'Bagbazar, Kathmandu', description: 'Structured test series and comprehensive study notes for CAP-I and CAP-II.' },
            { name: 'Academy of Commerce (AOC)', type: 'Local Institute (Nepal)', locationOrUrl: 'Kathmandu', description: 'Dedicated preparation for ICAN and ICAI students.' }
          ]
        },
        {
          category: 'Official Regulatory & Free Study Portals',
          items: [
            { name: 'ICAN Official Knowledge Portal', type: 'University Initiative', locationOrUrl: 'ican.org.np', description: 'Download official study material, past revision test papers (RTPs), and exam guidelines.' },
            { name: 'Inland Revenue Department (IRD Nepal)', type: 'University Initiative', locationOrUrl: 'ird.gov.np', description: 'Study active tax laws, circulars, and annual fiscal budget changes.' }
          ]
        }
      ]
    }
  },
  {
    id: 'engineering-infrastructure',
    title: 'Civil, Hydropower & Electrical Engineering',
    nepaliTitle: 'सिभिल, जलविद्युत् तथा विद्युतीय इन्जिनियरिङ',
    stream: 'science-physical',
    category: 'Engineering & Construction',
    badge: 'Nation Builders of Nepal',
    summary: 'Design highways, tunnels, earthquake-resilient structures, and mega-hydropower projects powering Nepal and South Asia.',
    overview: 'Civil and Hydropower Engineering form the backbone of Nepal’s economic development. With over 40,000 MW of hydroelectric potential and massive ongoing transit projects (Nagdhunga tunnel, fast-track, mountain highways), skilled engineers shape the physical geography of the nation.',
    durationYears: 4,
    eligibilityGPA: 2.4,
    minRequirements: 'Min C+ in Physics, Chemistry & Mathematics in +2 Science',
    primaryDegrees: ['BE Civil Engineering', 'BE Electrical Engineering', 'BE Hydropower Engineering', 'BE Mechanical Engineering'],
    entranceExams: [
      { name: 'IOE Entrance Exam', conductingBody: 'Tribhuvan University IOE', difficulty: 'Very High', timeline: 'Bhadra / Ashoj', seatsNote: 'Computerized exam at IOE ICTC Pulchowk' },
      { name: 'Kathmandu University Engineering Entrance (CBT)', conductingBody: 'KU School of Engineering', difficulty: 'High', timeline: 'Shrawan / Bhadra', seatsNote: 'Dhulikhel Campus' },
      { name: 'Pokhara University Engineering Entrance', conductingBody: 'Pokhara University', difficulty: 'Moderate', timeline: 'Ashoj' }
    ],
    topCollegesNepal: ['Pulchowk Campus (IOE), Lalitpur', 'Thapathali Campus (IOE), Kathmandu', 'Kathmandu University (KU), Dhulikhel', 'Western Regional Campus (WRC), Pokhara', 'Kantipur Engineering College (Dhapakhel)', 'Kathmandu Engineering College (Kalimati)'],
    benefits: [
      'Tangible pride of building permanent national structures (bridges, dams, highways)',
      'High number of Lok Sewa (Public Service Commission) engineering officer vacancies',
      'Immense private consulting, contracting, and construction business potential',
      'Strong international scholarship prospects in structural & geotechnical engineering (Japan, Europe, Canada)'
    ],
    skillsNeeded: {
      technical: [
        'Structural Design: ETABS, SAP2000, SAFE, AutoCAD',
        'Geotechnical & Hydrology: HEC-RAS, ArcGIS, Soil mechanics analysis',
        'Construction Estimation, BOQ preparation, and Nepal Public Procurement Act (PPA)',
        'Project Scheduling & Site Management (Primavera P6, MS Project)'
      ],
      soft: [
        'On-site leadership and labor contractor coordination in challenging terrains',
        'Resilience during harsh weather fieldwork across Himalayan project sites',
        'Negotiation with local communities and environmental stakeholders',
        'Safety-first mindset and zero tolerance for compromised building materials'
      ],
      tools: ['AutoCAD', 'ETABS', 'ArcGIS', 'Total Station / Drone surveying', 'MS Project', 'HEC-RAS']
    },
    salaryNPR: {
      entryMonthly: { min: 32000, max: 55000, label: 'NPR 32,000 – 55,000' },
      midMonthly: { min: 75000, max: 175000, label: 'NPR 75,000 – 1,75,000' },
      seniorMonthly: { min: 200000, max: 450000, label: 'NPR 2.0 – 4.5 Lakhs+' },
      overseasAnnualUSD: { min: 60000, max: 120000, label: '$60,000 – $120,000 / yr' },
      marketDemandRating: 4,
      remoteOpportunities: false,
      freelancePotential: 'High',
      note: 'Hydropower projects provide full accommodation, food, and remote site hardship allowances on top of base salary. Lok Sewa 7th Level Civil Engineers earn government pay scale with pension benefits.'
    },
    motivationFactor: {
      headline: 'Connecting Nepal’s Isolated Valleys',
      quote: 'When the bridge you designed connects two separated mountains and children walk safely to school, you leave an eternal legacy.',
      author: 'Er. Pradip Adhikari, Senior Hydropower Specialist',
      storySummary: 'After graduating from Pulchowk Campus, Pradip worked on the Upper Tamakoshi 456 MW project. Navigating geological faults and underground caverns, he witnessed Nepal turn from load-shedding to an electricity-exporting nation.',
      impactInNepal: 'Powering factories, building disaster-resilient housing post-2015 earthquake, and spurring clean energy exports to India.'
    },
    mythsAndRealities: [
      { myth: 'Civil engineering has too many graduates in Nepal and no jobs remain.', reality: 'Generic office workers face competition, but engineers skilled in specialized domains (Tunneling, Slope Stabilization, Hydropower Electromechanics, Contract Law) have massive unmet demand.' },
      { myth: 'All civil engineers must stay in Kathmandu offices.', reality: 'The highest career growth and financial allowances occur during initial 3-5 years on-site at major hydropower, highway, and bridge locations.' }
    ],
    tags: ['engineering', 'civil', 'hydropower', 'construction', 'ioe', 'infrastructure', 'pulchowk'],
    popularQuestions: [
      { question: 'Is Pulchowk IOE entrance very difficult to crack?', answer: 'It is competitive with ~12,000 applicants for limited government quota seats, but solving past 10 years PEA/IOE question banks systematically over 3 months guarantees a top 1000 rank.', expertName: 'Er. Pradip Adhikari', expertRole: 'IOE Pulchowk Alum' },
      { question: 'What is the future of Hydropower in Nepal for new engineers?', answer: 'Nepal is targeting 28,000 MW by 2035 with signed export agreements with India and Bangladesh. Hydropower, transmission line, and substation engineers have guaranteed career demand for the next 25 years.', expertName: 'Er. Kailash Shrestha', expertRole: 'Infrastructure Consultant' }
    ],
    detailedGuide: {
      jobSatisfaction: 'High fulfillment from seeing tangible physical results of your calculations. Building bridges, tunnels, and clean power plants that last for centuries.',
      societalContribution: 'Eradicates electricity shortages, prevents landslide fatalities through geotextile engineering, and reduces transportation costs across mountainous regions.',
      futureNepalOpportunities: [
        'Nagdhunga and Siddhababa tunnel projects initiating a new era of underground engineering in Nepal',
        'Cross-border transmission lines: 400kV Butwal-Gorakhpur and Dhalkebar-Muzaffarpur lines',
        'Smart city urban planning and water supply megaprojects (Melamchi Phase II, provincial water pipelines)',
        'Private hydropower independent power producer (IPP) investments totaling billions of rupees'
      ],
      learningResources: [
        {
          category: 'IOE Entrance Coaching Institutes in Nepal',
          items: [
            { name: 'PEA Association Pvt. Ltd.', type: 'Local Institute (Nepal)', locationOrUrl: 'Thapathali, Kathmandu', description: 'Nepal’s pioneer engineering entrance coaching institute with exhaustive mock tests.' },
            { name: 'Orbit Engineering College / Entrance', type: 'Local Institute (Nepal)', locationOrUrl: 'Putalisadak, Kathmandu', description: 'Experienced professors covering Mathematics, Physics, Chemistry, and English.' }
          ]
        },
        {
          category: 'Engineering Software & Structural Design Platforms',
          items: [
            { name: 'CSI Knowledge Base (ETABS & SAP2000)', type: 'Online Platform', locationOrUrl: 'csiamerica.com', description: 'Official tutorials on seismic building codes and finite element modeling.' },
            { name: 'Coursera / Autodesk Civil 3D Certification', type: 'Online Platform', locationOrUrl: 'autodesk.com', description: 'Roadway alignment, earthwork calculation, and pipe network modeling.' }
          ]
        }
      ]
    }
  },
  {
    id: 'law-judicial-services',
    title: 'Law & Judicial Services (B.A. LL.B)',
    nepaliTitle: 'कानुन तथा न्याय सेवा (बी.ए. एल.एल.बी)',
    stream: 'humanities',
    category: 'Legal Studies & Advocacy',
    badge: 'Shield of Justice & Constitutional Power',
    summary: 'Defend human rights, litigate high-stakes commercial disputes, shape national legislation, or become a judge in Nepal’s judicial system.',
    overview: 'The 5-year B.A. LL.B program in Nepal has evolved from a traditional discipline into one of the most intellectually prestigious degrees. With Nepal’s federal constitution and burgeoning corporate transactions, young lawyers command huge influence.',
    durationYears: 5,
    eligibilityGPA: 2.4,
    minRequirements: 'Min C+ in +2 in any stream (Science, Management, Humanities, or Law)',
    primaryDegrees: ['B.A. LL.B (Bachelor of Arts & Bachelor of Laws - 5 yrs integrated)', 'B.B.M. LL.B (KU School of Law)', 'LL.M (Master of Laws)'],
    entranceExams: [
      { name: 'Nepal Law Campus B.A. LL.B Entrance Exam', conductingBody: 'Tribhuvan University Faculty of Law', difficulty: 'Very High', timeline: 'Bhadra / Ashoj', seatsNote: '105 regular merit seats at Nepal Law Campus Exhibition Road' },
      { name: 'KUSOL Law Entrance Exam', conductingBody: 'Kathmandu University School of Law (Dhulikhel)', difficulty: 'High', timeline: 'Shrawan / Bhadra', seatsNote: 'Corporate & Commercial law specialization' },
      { name: 'Pokhara & Purbanchal University Law Entrances', conductingBody: 'Affiliated Law Colleges', difficulty: 'Moderate', timeline: 'Ashoj' }
    ],
    topCollegesNepal: ['Nepal Law Campus (TU), Exhibition Road Kathmandu', 'Kathmandu University School of Law (KUSOL), Dhulikhel', 'National Law College (NaLC), Lalitpur', 'Chakrabarti Habi Education Academy College of Law', 'Prithvi Narayan Campus (Law Faculty), Pokhara'],
    benefits: [
      'Constitutional standing to represent citizens and enterprises in all courts including the Supreme Court',
      'Multiple career paths: Supreme Court litigation, corporate legal counsel, NGO/INGO advocacy, and Judicial Service Lok Sewa (District Judge exam)',
      'Immense intellectual respect and voice in public policy and television debates',
      'Open to graduates from ALL +2 streams (Science, Management, or Humanities)'
    ],
    skillsNeeded: {
      technical: [
        'Nepalese Constitutional Law, Civil Code (Muluki Dewani Samhita) & Criminal Code',
        'Legal drafting of writ petitions, contracts, arbitration claims, and charge-sheets',
        'Statutory interpretation, legal precedent research (Nepal Kanoon Patrika - NKP)',
        'Commercial law: Companies Act, Foreign Investment & Technology Transfer Act (FITTA)'
      ],
      soft: [
        'Persuasive courtroom advocacy and oral presentation in formal Nepali & English',
        'Cross-examination and strategic argument formulation',
        'Unshakeable moral backbone in the face of pressure',
        'Client empathy and mediation/dispute resolution'
      ],
      tools: ['Nepal Kanoon Patrika (NKP) Database', 'Supreme Court e-filing portal', 'Legal drafting templates', 'Kanoon Kitab Byabastha Samiti official gazettes']
    },
    salaryNPR: {
      entryMonthly: { min: 30000, max: 60000, label: 'NPR 30,000 – 60,000' },
      midMonthly: { min: 80000, max: 220000, label: 'NPR 80,000 – 2,20,000' },
      seniorMonthly: { min: 250000, max: 800000, label: 'NPR 2.5 – 8.0 Lakhs+' },
      overseasAnnualUSD: { min: 55000, max: 120000, label: '$55,000 – $120,000 / yr (International Human Rights & LLM)' },
      marketDemandRating: 4,
      remoteOpportunities: false,
      freelancePotential: 'Exceptional',
      note: 'Senior Advocates in Nepal charge NPR 50,000 - 3,00,000 per courtroom hearing for high-stakes corporate and constitutional writs. Corporate law firms (Pioneer Law, Pradhan & Associates) pay lucrative retainer salaries.'
    },
    motivationFactor: {
      headline: 'Defending the Defenseless Under the Law',
      quote: 'Law is not merely words in statute books; it is the ultimate weapon that stands between justice and tyranny in our democracy.',
      author: 'Advocate Pragya Sharma, Supreme Court Practitioner',
      storySummary: 'After studying +2 Science in Chitwan, Pragya switched to B.A. LL.B at Nepal Law Campus. She won landmark public interest litigation (PIL) petitions guaranteeing maternal health services in Karnali.',
      impactInNepal: 'Enforcing rule of law, protecting fundamental constitutional rights, and enabling ethical foreign investment in Nepal.'
    },
    mythsAndRealities: [
      { myth: 'Law is only for students who had weak grades in +2.', reality: 'B.A. LL.B entrance is one of the most competitive exams in Nepal today, attracting top GPA scorers from St. Xavier’s, Budhanilkantha, and Prasadi.' },
      { myth: 'Lawyers in Nepal only fight petty land disputes.', reality: 'Modern corporate law covers cross-border mergers, foreign tech investments, hydropower power purchase agreements (PPA), and cyberlaw.' }
    ],
    tags: ['law', 'advocate', 'justice', 'court', 'humanities', 'supreme-court', 'constitution'],
    popularQuestions: [
      { question: 'Can a +2 Science student apply for B.A. LL.B?', answer: 'Absolutely! More than 40% of students entering Nepal Law Campus and KUSOL come from +2 Science backgrounds. Their analytical and systematic thinking is a tremendous asset in legal research.', expertName: 'Advocate Pragya Sharma', expertRole: 'Supreme Court Advocate' },
      { question: 'What is the difference between Nepal Law Campus and KU School of Law?', answer: 'Nepal Law Campus (TU) has deep legacy, affordable fees (~NPR 50,000 total for 5 years), and strong criminal/constitutional focus. KU School of Law has modern infrastructure, strict semester calendars, and specialized corporate/commercial law curriculum.', expertName: 'Advocate Pragya Sharma', expertRole: 'Supreme Court Advocate' }
    ],
    detailedGuide: {
      jobSatisfaction: 'Very high intellectual engagement. Every case is a new puzzle involving human psychology, constitutional principles, and societal equity.',
      societalContribution: 'Defends marginalized citizens, holds corrupt officials accountable through writ jurisdiction, and ensures commercial contracts are honored.',
      futureNepalOpportunities: [
        'Cross-border international commercial arbitration in Kathmandu',
        'Intellectual property, patent law, and software trademark protection',
        'Environmental litigation and climate change loss-and-damage claims for the Himalayas',
        'Direct recruitment to Judicial Service (Nayab Subba, Section Officer, and Bench Officer)'
      ],
      learningResources: [
        {
          category: 'B.A. LL.B Entrance Preparation Centers in Nepal',
          items: [
            { name: 'Kanoon Byabasayi Sansar / CLAT Nepal', type: 'Local Institute (Nepal)', locationOrUrl: 'Bagbazar, Kathmandu', description: 'Subjective writing, contemporary constitutional issues, and mock entrance exams.' },
            { name: 'Legal Aid and Consultancy Centers', type: 'Local Institute (Nepal)', locationOrUrl: 'Kathmandu', description: 'Internship and shadowing programs for pre-law students.' }
          ]
        },
        {
          category: 'Official Nepal Legal Databases',
          items: [
            { name: 'Nepal Law Commission (Nepal Kanoon Aayog)', type: 'University Initiative', locationOrUrl: 'lawcommission.gov.np', description: 'Access all revised Nepali acts, codes, and regulations in both Nepali and English.' },
            { name: 'Supreme Court of Nepal (Sarbochha Adalat)', type: 'University Initiative', locationOrUrl: 'supremecourt.gov.np', description: 'Daily cause lists, landmark full-bench verdicts, and legal bulletin publications.' }
          ]
        }
      ]
    }
  },
  {
    id: 'civil-services-lok-sewa',
    title: 'Civil Services & Public Administration (Lok Sewa)',
    nepaliTitle: 'निजामती सेवा तथा सार्वजनिक प्रशासन (लोक सेवा आयोग)',
    stream: 'humanities',
    category: 'Government & Public Policy',
    badge: 'Permanent Authority, Pension & Public Trust',
    summary: 'Drive national governance, administer districts as Chief District Officer (CDO), and execute policy in Singha Durbar ministries.',
    overview: 'The Public Service Commission (Lok Sewa Aayog) is the most trusted institution in Nepal. Joining the civil service as a Section Officer (Sakha Adhikrit) or Nayab Subba offers permanent job security, administrative power, national leadership, and pension benefits.',
    durationYears: 3,
    eligibilityGPA: 2.0,
    minRequirements: 'Bachelor’s degree in any discipline (BBA, BBS, BA, BSc, BE, MBBS) for Section Officer',
    primaryDegrees: ['Any Bachelor’s Degree (BBA, BBS, BA, B.Sc, BE, B.A. LL.B)'],
    entranceExams: [
      { name: 'Lok Sewa Sakha Adhikrit (Section Officer) Exam', conductingBody: 'Public Service Commission (Lok Sewa Aayog)', difficulty: 'Very High', timeline: 'Mangsir / Poush notifications, Chaitra / Baisakh exams', seatsNote: 'Open merit + Inclusive quotas (Women, Janajati, Madhesi, Dalit, Backward regions)' }
    ],
    topCollegesNepal: ['Public Administration Campus (Balkhu, TU)', 'Shanker Dev Campus', 'Tri-Chandra Multiple Campus', 'Padma Kanya Multiple Campus', 'St. Xavier’s College'],
    benefits: [
      'Unmatched lifelong job security with government pension and family medical benefits',
      'Direct executive power to implement development projects and maintain district law and order',
      'Merit-based selection with 100% transparent examination conducted by Lok Sewa Aayog',
      'Fully funded Master’s and PhD scholarships in prestigious foreign universities (Australia, Japan, UK) through government nominations'
    ],
    skillsNeeded: {
      technical: [
        'Constitution of Nepal 2072 and Administrative Law',
        'Public Financial Management (PFM), Budgeting & Public Procurement Rules',
        'Contemporary Socio-Economic issues, Federal Governance, and Foreign Policy',
        'Official Nepali administrative writing, minute-keeping, and office management'
      ],
      soft: [
        'Impartiality, honesty, and resistance to political inducements',
        'Public crisis leadership during natural disasters and civil unrest',
        'Diplomatic communication with citizens from all walks of life',
        'Strategic long-term thinking for national socio-economic policy'
      ],
      tools: ['Lok Sewa syllabus question papers', 'Nagarik App & Government e-Governance portals', 'Nepal Gazette (Rajpatra)', 'National Planning Commission publications']
    },
    salaryNPR: {
      entryMonthly: { min: 43000, max: 55000, label: 'NPR 43,000 – 55,000' },
      midMonthly: { min: 60000, max: 95000, label: 'NPR 60,000 – 95,000' },
      seniorMonthly: { min: 85000, max: 150000, label: 'NPR 85,000 – 1,50,000+' },
      overseasAnnualUSD: { min: 35000, max: 70000, label: 'Diplomatic Postings in Nepali Embassies Abroad' },
      marketDemandRating: 5,
      remoteOpportunities: false,
      freelancePotential: 'Low',
      note: 'Base salary is standardized by Nepal Government Civil Service scales. Benefits include government quarters, vehicle with fuel for senior officers, Dashain bonus, gratuity/pension, and international training allowances.'
    },
    motivationFactor: {
      headline: 'Serving 30 Million Nepali Citizens',
      quote: 'Politicians come and go every 5 years; the permanent government of Nepal is the civil servant who runs the nation every single day.',
      author: 'Officer Bikash Thapa, Under Secretary (Upa-Sachiv)',
      storySummary: 'Born in a remote village in Darchula, Bikash studied under oil lamps. He prepared for Lok Sewa while doing his BBS at Shanker Dev Campus. After topping the Section Officer exam, he coordinated the distribution of vital supplies during the earthquake.',
      impactInNepal: 'Ensuring honest distribution of public funds, running federal ministries, and representing Nepal on international climate summits.'
    },
    mythsAndRealities: [
      { myth: 'You need political connections (chakhadi) to pass Lok Sewa.', reality: 'Lok Sewa Aayog is recognized as Nepal’s most incorruptible institution. Coding of answer sheets and double-blind checking ensure pure merit and preparation prevail.' },
      { myth: 'Civil servants only do slow bureaucratic paperwork.', reality: 'Young proactive officers today drive digital government services, e-passports, instant disaster relief logistics, and innovative urban solutions.' }
    ],
    tags: ['government', 'lok-sewa', 'public-service', 'officer', 'administration', 'singha-durbar', 'pension'],
    popularQuestions: [
      { question: 'What bachelor degree is best if I want to crack Lok Sewa after graduation?', answer: 'Any recognized bachelor degree qualifies you! Many successful officers choose BBA, BBS, or BA (Economics/Political Science) because it gives them time for parallel Lok Sewa general studies preparation.', expertName: 'Officer Bikash Thapa', expertRole: 'Under Secretary, Nepal Government' },
      { question: 'When should a student start preparing for Lok Sewa?', answer: 'Starting early habit of reading daily national newspapers (Gorkhapatra, Kantipur, The Kathmandu Post) during your bachelor years builds unmatched general knowledge for the first-paper GK & IQ.', expertName: 'Officer Bikash Thapa', expertRole: 'Under Secretary, Nepal Government' }
    ],
    detailedGuide: {
      jobSatisfaction: 'Deep pride in serving the public and flying the flag of Nepal on official duty. Transforming government policies into real human benefits.',
      societalContribution: 'Core executioner of constitutionally guaranteed citizen rights, public health centers, road tenders, and peace and order in 77 districts.',
      futureNepalOpportunities: [
        'Implementation of federal civil service structures across 7 Provinces and 753 Local Governments',
        'Specialized cadres in Foreign Affairs (Pararastra), Revenue (Rajaswa), and Auditing (Lekha)',
        'Diplomatic postings as Second Secretary and First Secretary in embassies in Washington, Geneva, Tokyo, Beijing',
        'High civil service appointments: Joint Secretary, Secretary, and Chief Secretary (Mukhya Sachiv)'
      ],
      learningResources: [
        {
          category: 'Lok Sewa Preparation Institutes in Kathmandu',
          items: [
            { name: 'SOPAN Nepal', type: 'Local Institute (Nepal)', locationOrUrl: 'Bagbazar, Kathmandu', description: 'Renowned faculty of active Joint Secretaries and Under Secretaries guiding written papers.' },
            { name: 'Kuber Adhikari GK/IQ Classes', type: 'Local Institute (Nepal)', locationOrUrl: 'Putalisadak & Online', description: 'Specialized shortcut techniques for Lok Sewa IQ and general knowledge papers.' },
            { name: 'Prashasan.com & Loksewa Guide App', type: 'Online Platform', locationOrUrl: 'prashasan.com', description: 'Daily updates on administrative notices, vacancy publications, and current affairs.' }
          ]
        },
        {
          category: 'Official Government Resources',
          items: [
            { name: 'Lok Sewa Aayog Official Website', type: 'University Initiative', locationOrUrl: 'psc.gov.np', description: 'Annual exam calendars, updated syllabus, and merit list announcements.' },
            { name: 'Gorkhapatra Wednesday Edition (Budhabar Bisesh)', type: 'Online Platform', locationOrUrl: 'gorkhapatraonline.com', description: 'Weekly official mock questionnaires and model answers for Lok Sewa candidates.' }
          ]
        }
      ]
    }
  },
  {
    id: 'hospitality-tourism-management',
    title: 'Hospitality, Culinary Arts & Tourism (BHM / BTTM)',
    nepaliTitle: 'हस्पिटालिटी, कुलिनरी आर्ट्स तथा पर्यटन व्यवस्थापन (बीएचएम)',
    stream: 'management',
    category: 'Hospitality & Tourism',
    badge: 'Nepal’s Global Ambassador Industry',
    summary: 'Lead luxury five-star resorts, international hotel chains in Dubai, Qatar, Maldives, or pioneer boutique eco-tourism in Annapurna and Everest.',
    overview: 'Tourism is the economic lifeblood of Nepal. With breathtaking mountain geography and international hotel brands (Marriott, Hyatt, Hilton, Dusit Thani) opening across Kathmandu, Pokhara, and Chitwan, BHM graduates enjoy instant global employability.',
    durationYears: 4,
    eligibilityGPA: 2.0,
    minRequirements: 'Min D+ / C in +2 in any stream (Management, Science, or Humanities)',
    primaryDegrees: ['BHM (Bachelor of Hotel Management - 4 yrs)', 'BTTM (Bachelor of Travel & Tourism Management)', 'Bachelor in Culinary Arts (BCA/Foreign Affiliated)'],
    entranceExams: [
      { name: 'CMAT (Central Management Admissions Test)', conductingBody: 'Tribhuvan University Faculty of Management', difficulty: 'Moderate', timeline: 'Bhadra / Ashoj', seatsNote: 'CMAT score required for TU affiliated BHM colleges' },
      { name: 'KUUMAT / Private College Entrances', conductingBody: 'KU / Silver Mountain / GATE / NATHM', difficulty: 'Moderate', timeline: 'Shrawan / Bhadra' }
    ],
    topCollegesNepal: ['Nepal Academy of Tourism and Hotel Management (NATHM), Kalimati', 'Silver Mountain School of Hotel Management (Lainchaur)', 'GATE (Global Academy of Tourism & Hospitality Education)', 'Nesfield International College', 'International School of Tourism and Hotel Management (IST)'],
    benefits: [
      'Built-in 6-month paid international internship (in Dubai, Malaysia, Maldives, China, or Bahrain) during the final year',
      'Dynamic, non-monotonous lifestyle interacting with international globetrotters and VIP delegates',
      'High growth into General Manager (GM), Executive Chef, and Food & Beverage Director roles',
      'Tremendous entrepreneurial opportunity to build boutique resorts, cafes, and trekking agencies in Nepal'
    ],
    skillsNeeded: {
      technical: [
        'Food & Beverage Service & International Gastronomy / Culinary Arts',
        'Front Office Property Management Systems (Opera PMS, Amadeus)',
        'Revenue Management, Occupancy Forecasting & Banquet Logistics',
        'International Food Safety & HACCP Hygiene Certification'
      ],
      soft: [
        'Exemplary hospitality etiquette, warm demeanor, and crisis composure',
        'Multilingual communication (Fluency in English, conversational French/German/Chinese is a massive advantage)',
        'Customer satisfaction psychology and complaint resolution',
        'Leadership of high-energy kitchen and service brigade teams'
      ],
      tools: ['Opera PMS', 'Micros POS', 'Commercial Culinary Equipment', 'Beverage & Barista setups', 'Amadeus GDS']
    },
    salaryNPR: {
      entryMonthly: { min: 28000, max: 48000, label: 'NPR 28,000 – 48,000' },
      midMonthly: { min: 65000, max: 150000, label: 'NPR 65,000 – 1,50,000' },
      seniorMonthly: { min: 180000, max: 450000, label: 'NPR 1.8 – 4.5 Lakhs+' },
      overseasAnnualUSD: { min: 40000, max: 95000, label: '$40,000 – $95,000 / yr (Gulf Luxury Resorts & Cruise Ships)' },
      marketDemandRating: 4,
      remoteOpportunities: false,
      freelancePotential: 'Moderate',
      note: 'Hotel salaries include mandatory service charge (SC) distribution which often adds an extra NPR 15,000 - 35,000 monthly in 5-star properties. Gulf international transfers offer tax-free USD packages with flights and luxury accommodation.'
    },
    motivationFactor: {
      headline: 'The Art of Atithi Devo Bhava',
      quote: 'Nepal is blessed with the highest mountains on Earth; our hospitality professionals ensure the world falls in love with our people.',
      author: 'Chef Sujan Shakya, Executive Hotelier',
      storySummary: 'Sujan graduated from NATHM Kalimati and interned in Dubai. Returning to Pokhara, he established an award-winning eco-lodge overlooking Phewa Lake that now employs 65 local youths and sources 100% organic local produce.',
      impactInNepal: 'Promoting Nepal’s positive global brand, creating rural employment, and driving foreign tourist expenditures into local economies.'
    },
    mythsAndRealities: [
      { myth: 'BHM is just about waiting tables and cleaning rooms.', reality: 'BHM is comprehensive business management covering multi-million-dollar asset management, financial yield calculations, international marketing, and luxury brand standards.' },
      { myth: 'There are no good luxury hotels in Nepal to build a career.', reality: 'With Marriott, Hilton, Hyatt Regency, Dusit Thani, and luxury boutique resorts across Pokhara and Chitwan, Nepal has entered a golden age of hospitality.' }
    ],
    tags: ['hospitality', 'hotel-management', 'tourism', 'culinary', 'chef', 'management', 'international-career'],
    popularQuestions: [
      { question: 'What is the role of the foreign internship in BHM?', answer: 'In the 7th or 8th semester, reputable BHM colleges send students for 6-12 months paid internships to 5-star properties in Dubai, Qatar, Malaysia, or Maldives. Many students receive full-time job offers before graduation!', expertName: 'Chef Sujan Shakya', expertRole: 'Executive Hotelier' },
      { question: 'Is NATHM Kalimati better than private hotel management colleges?', answer: 'NATHM is a government institution under the Ministry of Tourism with the lowest fee structure (~NPR 3.5 Lakhs total) and stellar alumni reputation. Top private colleges (Silver Mountain, GATE) offer European university affiliations with higher fees.', expertName: 'Chef Sujan Shakya', expertRole: 'Executive Hotelier' }
    ],
    detailedGuide: {
      jobSatisfaction: 'Vibrant, cosmopolitan working environment with daily social interaction and tangible artistic joy in culinary and event execution.',
      societalContribution: 'Directly channels foreign exchange into rural trekking regions, supports organic farming supply chains, and showcases Nepali cultural heritage.',
      futureNepalOpportunities: [
        'New international airports in Pokhara and Bhairahawa expanding regional tourism hubs',
        'Rise of luxury experiential glamping and wellness retreats in Mustang, Nagarkot, and Chitwan',
        'High demand for Nepali hospitality executives on international luxury cruise liners (Royal Caribbean, Carnival)',
        'Food & Beverage brand franchising and specialty Himalayan coffee shop chains'
      ],
      learningResources: [
        {
          category: 'Premier Hospitality Academies in Nepal',
          items: [
            { name: 'NATHM (Nepal Academy of Tourism and Hotel Management)', type: 'University Initiative', locationOrUrl: 'Kalimati, Kathmandu', description: 'Government benchmark academy with fully equipped training kitchens, mock hotels, and labs.' },
            { name: 'GATE College (Global Academy of Tourism & Hospitality)', type: 'Local Institute (Nepal)', locationOrUrl: 'Mandikhatar, Kathmandu', description: 'Swiss-standard hospitality and culinary academy with international certification.' }
          ]
        },
        {
          category: 'International Hospitality & Culinary Knowledge',
          items: [
            { name: 'American Hotel & Lodging Educational Institute (AHLEI)', type: 'Online Platform', locationOrUrl: 'ahlei.org', description: 'Global professional hospitality certifications recognized in 100+ countries.' },
            { name: 'Hospitality Channel & Culinary Arts Free Masterclasses', type: 'Online Platform', locationOrUrl: 'YouTube & Rouxbe', description: 'Professional knife skills, pastry fundamentals, and hospitality management webinars.' }
          ]
        }
      ]
    }
  },
  {
    id: 'agriculture-forestry-biotech',
    title: 'Agricultural Science & Forestry (B.Sc. Ag / B.Sc. Forestry)',
    nepaliTitle: 'कृषि विज्ञान तथा वन विज्ञान (बी.एससी. एजी / फरेस्ट्री)',
    stream: 'science-bio',
    category: 'Bio-Sciences & Sustainability',
    badge: 'Food Sovereignty & Climate Guardians',
    summary: 'Revolutionize commercial smart farming, lead climate adaptation in the Himalayas, and manage Nepal’s world-renowned community forests.',
    overview: 'Agriculture contributes 24% to Nepal’s GDP. The transition from subsistence to precision commercial agriculture, protected organic crops, and sustainable timber/carbon credit markets makes B.Sc. Ag and Forestry graduates vital national problem solvers.',
    durationYears: 4,
    eligibilityGPA: 2.2,
    minRequirements: 'Min C in Physics, Chemistry & Biology (+2 Science)',
    primaryDegrees: ['B.Sc. Agriculture (4 yrs - AFU & IAAS)', 'B.Sc. Forestry (4 yrs - IOF)', 'B.V.Sc & A.H (Veterinary Science - 5 yrs)'],
    entranceExams: [
      { name: 'AFU Entrance Exam', conductingBody: 'Agriculture and Forestry University, Rampur, Chitwan', difficulty: 'High', timeline: 'Bhadra / Ashoj', seatsNote: 'Chitwan, Hetauda, and constituent colleges' },
      { name: 'IAAS Entrance Exam', conductingBody: 'Institute of Agriculture and Animal Science (TU)', difficulty: 'High', timeline: 'Ashoj / Kartik', seatsNote: 'Paklihawa, Lamjung, and Gauradaha campuses' },
      { name: 'IOF Forestry Entrance', conductingBody: 'Institute of Forestry (TU), Pokhara & Hetauda', difficulty: 'Moderate', timeline: 'Ashoj' }
    ],
    topCollegesNepal: ['Agriculture and Forestry University (AFU), Rampur, Chitwan', 'IAAS Paklihawa Campus, Bhairahawa', 'IAAS Lamjung Campus, Sundarbazar', 'Institute of Forestry (IOF), Pokhara Campus', 'Himalayan College of Agricultural Sciences and Technology (HICAST)', 'Gokuleshwor College of Agriculture, Baitadi'],
    benefits: [
      'High number of Lok Sewa technical agricultural officer (Krishi Adhikrit) postings in all 753 municipalities',
      'Huge international funding for climate change adaptation and biodiversity conservation in Nepal',
      'Massive commercial agri-business opportunities: high-value cardamom, kiwi, avocado, organic coffee, and smart greenhouses',
      'Generous Master’s and PhD scholarships in Israel, Japan, USA, and Australia'
    ],
    skillsNeeded: {
      technical: [
        'Soil chemistry testing, pest pathology, and integrated pest management (IPM)',
        'Hydroponic and drip-irrigation greenhouse climate automation',
        'GIS mapping of forest carbon sinks and watershed conservation',
        'Post-harvest cold chain logistics and agri-commodity supply chain finance'
      ],
      soft: [
        'Grassroots communication with rural farmers in local dialects',
        'Fieldwork endurance in diverse agro-climatic ecological zones',
        'Grant proposal writing for international donors (USAID, FAO, ICIMOD, WWF)',
        'Entrepreneurial risk assessment and market linkage creation'
      ],
      tools: ['Soil Testing Spectrophotometers', 'ArcGIS & QGIS', 'Greenhouse sensors', 'Seed germination analyzers', 'Statistical software (R, SPSS)']
    },
    salaryNPR: {
      entryMonthly: { min: 32000, max: 55000, label: 'NPR 32,000 – 55,000' },
      midMonthly: { min: 70000, max: 160000, label: 'NPR 70,000 – 1,60,000' },
      seniorMonthly: { min: 180000, max: 400000, label: 'NPR 1.8 – 4.0 Lakhs+' },
      overseasAnnualUSD: { min: 45000, max: 95000, label: '$45,000 – $95,000 / yr (International Development & Research)' },
      marketDemandRating: 4,
      remoteOpportunities: false,
      freelancePotential: 'High',
      note: 'Every Rural Municipality (Gaupalika) in Nepal now has dedicated 7th-level Agricultural and Livestock Officer vacancies. International development organizations (USAID, ICIMOD, Helvetas) pay attractive compensation packages.'
    },
    motivationFactor: {
      headline: 'Feeding the Nation, Conserving the Himalayas',
      quote: 'The nation that cannot feed itself can never truly be sovereign. Transforming Nepal from food importer to self-reliant producer is our sacred mission.',
      author: 'Dr. Anita Rai, Agri-Scientist & Smart Farming Pioneer',
      storySummary: 'Graduating from AFU Rampur, Anita trained in Israel under the "Learn and Earn" program. She returned to Kavre to launch a cooperative of 200 women farmers using climate-controlled drip irrigation, tripling their annual yield.',
      impactInNepal: 'Reversing arable land abandonment, boosting rural household incomes, and combating climate desertification.'
    },
    mythsAndRealities: [
      { myth: 'Studying agriculture means doing traditional manual digging.', reality: 'Modern B.Sc. Ag focuses on genetic breeding, soil microbiomes, automated drone pesticide dispersal, cold-storage supply chains, and policy economics.' },
      { myth: 'Only students who failed medical entrances choose agriculture.', reality: 'Agri-science is now a top-choice degree with highly competitive AFU/IAAS entrances and exceptional opportunities in INGOs and overseas research.' }
    ],
    tags: ['agriculture', 'forestry', 'science', 'farming', 'climate', 'sustainability', 'biodiversity'],
    popularQuestions: [
      { question: 'What is the "Learn and Earn" agricultural program in Israel?', answer: 'AFU and IAAS graduates can participate in the government-supported Israel agricultural internship program, gaining 11 months of world-class high-tech farming experience while earning NPR 12-18 Lakhs.', expertName: 'Dr. Anita Rai', expertRole: 'Agricultural Scientist' },
      { question: 'Are there good job opportunities in Nepal after B.Sc. Forestry?', answer: 'Yes! Nepal’s forestry officers manage national parks (Chitwan, Bardia, Sagarmatha), coordinate with community forest user groups (CFUGs), and work on lucrative carbon-credit programs funded by the World Bank.', expertName: 'Dr. Anita Rai', expertRole: 'Agricultural Scientist' }
    ],
    detailedGuide: {
      jobSatisfaction: 'Healthy, active outdoor career close to nature and rural communities. Seeing green harvests thrive and biodiversity flourish.',
      societalContribution: 'Protects Nepal’s endangered wildlife (One-horned Rhino, Bengal Tiger), secures domestic food security, and mitigates climate-induced landslides.',
      futureNepalOpportunities: [
        'Commercialization of organic Himalayan herbs (Yarsagumba, Chiraito) and export to global pharmaceutical markets',
        'Carbon credit trading under REDD+ generating millions of dollars for Nepali forest communities',
        'Private investment in smart commercial dairy, trout fisheries, and dragon fruit farming',
        'ICIMOD, WWF, and IUCN climate-resilience research initiatives based in Kathmandu'
      ],
      learningResources: [
        {
          category: 'Agriculture & Forestry Entrance Coaching Centers',
          items: [
            { name: 'Kisan Coaching / Agro-Vet Entrance Forum', type: 'Local Institute (Nepal)', locationOrUrl: 'Chitwan & Putalisadak', description: 'Comprehensive question banks for AFU, IAAS, and Veterinary entrance examinations.' },
            { name: 'Nepal Agricultural Research Council (NARC)', type: 'University Initiative', locationOrUrl: 'Khumaltar, Lalitpur', description: 'Student open days, crop disease bulletins, and research paper libraries.' }
          ]
        },
        {
          category: 'Global Agricultural Knowledge Portals',
          items: [
            { name: 'FAO (Food and Agriculture Organization) e-learning Academy', type: 'Online Platform', locationOrUrl: 'fao.org', description: 'Free certified courses on sustainable food systems, climate-smart agriculture, and nutrition.' },
            { name: 'CGIAR & World Agroforestry Center', type: 'Online Platform', locationOrUrl: 'cgiar.org', description: 'Global scientific breakthroughs in high-yield drought-tolerant crop varieties.' }
          ]
        }
      ]
    }
  },
  {
    id: 'digital-design-product-marketing',
    title: 'UI/UX Design, Product & Digital Media',
    nepaliTitle: 'युआई/युएक्स डिजाइन, प्रडक्ट तथा डिजिटल मिडिया',
    stream: 'emerging',
    category: 'Creative Tech & Media',
    badge: 'Fastest Route to High Remote Income',
    summary: 'Design intuitive smartphone apps, global SaaS user interfaces, and build high-impact creative digital brands from Nepal.',
    overview: 'As software products multiply, UI/UX Designers and Digital Product Specialists have become as critical as coders. Students with a flair for visual aesthetics, psychology, and empathy can enter this high-paying global field immediately after +2 without requiring an engineering degree.',
    durationYears: 3,
    eligibilityGPA: 2.0,
    minRequirements: 'Open to all +2 streams (Management, Humanities, Science, Fine Arts)',
    primaryDegrees: ['B.Des (Design) / BIM / BCA / BA Fine Arts / Professional Certification'],
    entranceExams: [
      { name: 'Portfolio Evaluation & Design Aptitude', conductingBody: 'KU Center for Art & Design / Private Academies', difficulty: 'Moderate', timeline: 'Ongoing / Shrawan' }
    ],
    topCollegesNepal: ['Kathmandu University Center for Art & Design (BFA/BDes)', 'Deerwalk Institute (UI/UX Bootcamps)', 'Srijana College of Fine Arts', 'Broadway Infosys UI/UX Academy'],
    benefits: [
      'Portfolio-first hiring: zero corporate gatekeeping; your Behance/Figma work speaks for you',
      'Rapid transition from student to earning $1,500 - $3,500/month in global remote freelance contracts',
      'Creative joy of seeing your designs used by hundreds of thousands of app users in Nepal and abroad',
      'No rigid math or physics requirements—welcomes creative thinkers from all +2 backgrounds'
    ],
    skillsNeeded: {
      technical: [
        'UI/UX Design: Figma, Auto-layout, Design Systems, Wireframing & Prototyping',
        'User Research: Usability testing, user journey mapping, qualitative interviews',
        'Visual Design: Typography hierarchy, color psychology, responsive layout grids',
        'Basic Frontend understanding: HTML5, CSS3, Tailwind CSS principles'
      ],
      soft: [
        'Deep user empathy and understanding of non-tech-savvy Nepali users',
        'Clear design critique communication and defense of design decisions',
        'Cross-functional collaboration with software developers and product managers',
        'Rapid iterative prototyping and reception of client feedback'
      ],
      tools: ['Figma', 'FigJam', 'Adobe Illustrator & Photoshop', 'Lottie / Rive', 'Webflow', 'Notion']
    },
    salaryNPR: {
      entryMonthly: { min: 35000, max: 60000, label: 'NPR 35,000 – 60,000' },
      midMonthly: { min: 80000, max: 190000, label: 'NPR 80,000 – 1,90,000' },
      seniorMonthly: { min: 200000, max: 500000, label: 'NPR 2.0 – 5.0 Lakhs+' },
      overseasAnnualUSD: { min: 45000, max: 110000, label: '$45,000 – $110,000 / yr (Remote Product Designer)' },
      marketDemandRating: 5,
      remoteOpportunities: true,
      freelancePotential: 'Exceptional',
      note: 'Senior Product Designers in Kathmandu working for US/European venture-backed startups regularly take home NPR 3-5 Lakhs monthly while living with their families in Nepal.'
    },
    motivationFactor: {
      headline: 'Designing the Digital Future of Nepal',
      quote: 'Design is not just what it looks like and feels like; design is how easily a Nepali grandmother can send money home using a mobile wallet.',
      author: 'Anita Rai, Staff Product Designer',
      storySummary: 'After +2 Humanities, Anita learned Figma through online YouTube tutorials. Within two years, she redesigned prominent payment apps in Nepal and now designs design systems for a Scandinavian fintech.',
      impactInNepal: 'Making technology simple, accessible, and inclusive for every Nepali citizen regardless of literacy.'
    },
    mythsAndRealities: [
      { myth: 'You must know how to code complex backend algorithms to be a UI/UX designer.', reality: 'UI/UX focuses on user psychology, layout aesthetics, and design thinking. Knowing how code works is helpful, but you never write backend code.' },
      { myth: 'Designers in Nepal only get paid low graphic design fees.', reality: 'Graphic poster design is distinct from Product/UI/UX design. Product designers solve multi-million dollar business conversion problems and earn developer-grade salaries.' }
    ],
    tags: ['design', 'ui-ux', 'figma', 'creative', 'remote', 'product', 'freelance'],
    popularQuestions: [
      { question: 'How can I build a UI/UX portfolio with no experience after +2?', answer: 'Pick 2 everyday Nepali apps that have frustrating interfaces (e.g. government portals or bus booking) and redesign them! Document your research, user interviews, wireframes, and final Figma prototypes on Behance or a free Notion portfolio.', expertName: 'Anita Rai', expertRole: 'Staff Product Designer' },
      { question: 'Do I need an expensive Mac to learn UI/UX design?', answer: 'Not at all! Figma runs directly inside the Google Chrome browser on any basic Windows, Linux, or Mac laptop.', expertName: 'Anita Rai', expertRole: 'Staff Product Designer' }
    ],
    detailedGuide: {
      jobSatisfaction: 'Very high. Freedom to craft visually stunning, human-centered experiences while avoiding stressful late-night server bug debugging.',
      societalContribution: 'Removes friction from digital public services (Nagarik App, driving license renewals, health portals) so all citizens can navigate modern digital life.',
      futureNepalOpportunities: [
        'E-commerce user experience optimization for Daraz, SastoDeal, and specialized niche retail',
        'Global remote design agencies hiring junior and mid-level Figma wizards from Nepal',
        'Micro-interactions and animation design for mobile gaming and Web3 interfaces',
        'Voice user interface (VUI) design for Nepali and regional language voice queries'
      ],
      learningResources: [
        {
          category: 'UI/UX Bootcamps & Institutes in Nepal',
          items: [
            { name: 'Broadway Infosys UI/UX Design Masterclass', type: 'Local Institute (Nepal)', locationOrUrl: 'Tinkune, Kathmandu', description: 'Comprehensive design thinking, wireframing, and Figma component libraries.' },
            { name: 'Deerwalk Training Center UI/UX Track', type: 'Local Institute (Nepal)', locationOrUrl: 'Sifal, Kathmandu', description: 'Mentored portfolio building with direct placement linkages in software companies.' }
          ]
        },
        {
          category: 'Free Global Design Knowledge Resources',
          items: [
            { name: 'Figma Community & Official YouTube Channel', type: 'Online Platform', locationOrUrl: 'youtube.com/@Figma', description: 'Official tutorials on auto-layout, variables, interactive prototyping, and design systems.' },
            { name: 'Laws of UX & Nielsen Norman Group (NN/g)', type: 'Online Platform', locationOrUrl: 'lawsofux.com', description: 'Cognitive psychology principles behind clean user experience design.' }
          ]
        }
      ]
    }
  }
];
