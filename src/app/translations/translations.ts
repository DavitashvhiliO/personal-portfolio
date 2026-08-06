export type Language = 'en' | 'ka';

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Translation {
  // Profile
  name: string;
  position: string;
  bio: string;

  // Section titles
  workExperience: string;
  featuredProjects: string;
  skills: string;
  education: string;
  tools: string;
  languages: string;

  // Work Experience - UI/UX Consultant
  jobTitle1: string;
  jobDate1: string;
  jobCompany1: string;
  jobCompanyLink1Text: string;
  jobIn1: string;
  jobInLink1: string;
  jobType1: string;
  jobDesc1: string[];
  jobDesc1Sub: string[];

  // Work Experience - Content Manager & Advertiser (Dento-Art)
  jobTitle2: string;
  jobDate2: string;
  jobCompany2: string;
  jobType2: string;
  jobDesc2: string[];

  // Work Experience - Content Manager & Advertiser (DBEF)
  jobTitle3: string;
  jobDate3: string;
  jobCompany3: string;
  jobType3: string;
  jobDesc3: string[];

  // Work Experience - UI/UX Designer (Hypercubic)
  jobTitle4: string;
  jobDate4: string;
  jobCompany4: string;
  jobType4: string;
  jobDesc4: string[];

  // Work Experience - Graphic Designer
  jobTitle5: string;
  jobDate5: string;
  jobCompany5: string;
  jobType5: string;
  jobDesc5: string[];

  // Featured Projects - Reblaze
  projectTitle1: string;
  projectDate1: string;
  projectCompany1: string;
  projectDesc1: string[];

  // Featured Projects - Sabado
  projectTitle2: string;
  projectDate2: string;
  projectCompany2: string;
  projectDesc2: string[];

  // Featured Projects - Ucraft.io
  projectTitle3: string;
  projectDate3: string;
  projectCompany3: string;
  projectDesc3: string[];

  // Skills
  skillsCategory1: string;
  skillsCategory1Text: string;
  skillsCategory2: string;
  skillsCategory2Text: string;
  skillsCategory3: string;
  skillsCategory3Text: string;

  // Education
  educationTitle: string;
  edu1Institution: string;
  edu1Degree: string;
  edu2Institution: string;
  edu2Degree: string;
  edu3Institution: string;
  edu3Degree: string;
  edu4Institution: string;
  edu4Degree: string;
  edu5Institution: string;
  edu5Degree: string;

  // Tools
  toolsCategory1: string;
  toolsCategory1Text: string;
  toolsCategory2: string;
  toolsCategory2Text: string;
  toolsCategory3: string;
  toolsCategory3Text: string;
  toolsCategory4: string;
  toolsCategory4Text: string;

  // Languages
  lang1: string;
  lang1Level: string;
  lang2: string;
  lang2Level: string;
  lang3: string;
  lang3Level: string;

  // Footer
  emailLabel: string;
  phoneLabel: string;
  addressLabel: string;
  addressText: string;
  dribbbleLabel: string;
  behanceLabel: string;

  // NEW Rebirth Portfolio Translations
  tagline: string;
  portfolioLabel: string;
  featuredTitle: string;
  exploreAllProjects: string;
  creativeExpertiseTitle: string;
  creativeExpertiseQuote: string;
  servicesList: ServiceItem[];
  metricMarvelsTitle: string;
  statsAwardsLabel: string;
  statsAwardsDesc: string;
  statsCompletedLabel: string;
  statsCompletedDesc: string;
  statsSatisfactionLabel: string;
  statsSatisfactionDesc: string;
  statsMentalLabel: string;
  statsMentalDesc: string;
  applauseCornerTitle: string;
  testimonialsList: TestimonialItem[];
  haveProject: string;
  scheduleCall: string;
  letsChat: string;
  availableFromLabel: string;
  bookCallLabel: string;
  followMeOnX: string;
  getRebirthFigma: string;
  newTemplatePreview: string;
  emailCopied: string;
  phoneCopied: string;
  londonTimeLabel: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    // Profile
    name: 'Otar Davitashvili',
    position: 'Product Designer',
    bio: 'I create visually refined, functionally robust digital products where complex information translates into simple, intuitive interfaces or a cohesive visual language. Driven by business vision and needs, my workflow relies on defining the product lifecycle correctly, maintaining consistent visual architecture, applying best user practices, and actively participating in bringing the final product to its end user.',

    // Section titles
    workExperience: 'Work Experience',
    featuredProjects: 'Featured Projects',
    skills: 'Skills',
    education: 'Education & Courses',
    tools: 'Tools',
    languages: 'Languages',

    // Work Experience - UI/UX Consultant
    jobTitle1: 'UI/UX Consultant',
    jobDate1: 'Feb 2024 — Present',
    jobCompany1: 'The World Bank\'s GRAIL Project',
    jobCompanyLink1Text: '',
    jobIn1: 'at',
    jobInLink1: 'National Agency of Public Registry',
    jobType1: 'Full-time',
    jobDesc1: [
      'Designed the National Spatial Data Infrastructure portal (nsdi.gov.ge) and GovTech remote registration platforms (Smart Contracts).',
      'Led the comprehensive UI/UX overhaul for the Agency\'s main public portal (napr.gov.ge), currently in active development.',
      'Spearheading the creation of the unified Design System using design tokens, primitive variables, and structured UI components in close coordination with engineering teams.'
    ],
    jobDesc1Sub: [],

    // Work Experience - Content Manager & Advertiser (Dento-Art)
    jobTitle2: 'Content Manager & Growth Advertiser',
    jobDate2: 'Nov 2024 — Present',
    jobCompany2: 'Dento-Art Clinic',
    jobType2: 'Retainer',
    jobDesc2: [
      'Managed $21.8K+ in ad spend over 21 months, generating 23,000+ qualified leads at <$0.95 CPA and achieving 12.5M+ impressions ($1.75 CPM).'
    ],

    // Work Experience - Content Manager & Advertiser (DBEF)
    jobTitle3: 'UI/UX Designer & Content Manager',
    jobDate3: 'Nov 2023 — Present',
    jobCompany3: 'David Bezhuashvili Education Foundation (DBEF)',
    jobType3: 'Retainer',
    jobDesc3: [
      'Executed the complete platform redesign and currently manage ongoing digital media content to drive audience engagement.'
    ],

    // Work Experience - UI/UX Designer (Hypercubic)
    jobTitle4: 'UI/UX Designer',
    jobDate4: 'May 2022 — Aug 2023',
    jobCompany4: 'Hypercubic Innovation Center',
    jobType4: 'Full-time',
    jobDesc4: [
      'Designed responsive web interfaces and core UI components for platforms within the CMCX (Catena) token Web3 ecosystem.'
    ],

    // Work Experience - Graphic Designer
    jobTitle5: 'Visual Design Specialist',
    jobDate5: 'Jan 2015 — Feb 2020',
    jobCompany5: 'Digital Print Center',
    jobType5: 'Full-time / Part-time',
    jobDesc5: [
      'Produced diverse visual assets and managed complex pre-press workflows for large-scale physical print collateral.'
    ],

    // Featured Projects - Reblaze
    projectTitle1: 'UI/UX Designer',
    projectDate1: 'Aug 2024 — Jan 2026',
    projectCompany1: 'Reblaze',
    projectDesc1: [
      'Ran UX research to map user behavior and define core requirements.',
      'Translated research into high-fidelity, user-centered interfaces.',
      'Validated design decisions through usability testing.'
    ],

    // Featured Projects - Sabado
    projectTitle2: 'UI/UX Designer',
    projectDate2: 'May 2025 — Sep 2025',
    projectCompany2: 'Sabado Leadership Academy',
    projectDesc2: [
      'Set the visual direction in line with the academy\'s brand and goals.',
      'Designed high-fidelity UI components focused on clarity and easy navigation.',
      'Owned the design-to-development handoff for accurate implementation.'
    ],

    // Featured Projects - Ucraft.io
    projectTitle3: 'UI/UX Designer',
    projectDate3: 'Sep 2023 — Jan 2024',
    projectCompany3: 'Ucraft.io',
    projectDesc3: [
      'Designed the full interface for an AI-powered startup, prioritizing intuitive navigation.',
      'Built high-fidelity prototypes and visual assets to support MVP development.',
      'Worked with stakeholders to translate complex AI features into a simple UI.'
    ],

    // Skills
    skillsCategory1: 'Product & UI/UX Design',
    skillsCategory1Text: 'Product Design, UI Design, Interaction Design, UX Laws, Design Systems, Prototyping, Wireframing, Graphic Design',
    skillsCategory2: 'Research & Strategy',
    skillsCategory2Text: 'User Research, Usability Testing, Nielsen\'s Heuristics, Information Architecture',
    skillsCategory3: 'Growth & Marketing',
    skillsCategory3Text: 'Digital Marketing, Paid Advertising, Social Media, A/B Testing',

    // Education
    educationTitle: 'Education & Courses',
    edu1Institution: 'Ilia State University',
    edu1Degree: 'Master\'s student, Political Science',
    edu2Institution: 'Coursera',
    edu2Degree: 'Google UX Design Professional Certificate',
    edu3Institution: 'Zero To Mastery Academy',
    edu3Degree: 'Complete Web & Mobile Designer: UI/UX, Figma',
    edu4Institution: 'IT Academy Step',
    edu4Degree: 'Front-End with Angular — Module 1',
    edu5Institution: 'Interaction Design Foundation (IxDF)',
    edu5Degree: 'Various UI/UX design courses',

    // Tools
    toolsCategory1: 'Design & Prototyping',
    toolsCategory1Text: 'Figma, Adobe Creative Cloud, Miro, Framer, ProtoPie.',
    toolsCategory2: 'Marketing & Analytics',
    toolsCategory2Text: 'Meta Business Suite, Google Ads, Google Analytics.',
    toolsCategory3: 'Code',
    toolsCategory3Text: 'HTML, CSS, Tailwind, Bootstrap, JavaScript (basic).',
    toolsCategory4: 'Productivity',
    toolsCategory4Text: 'Microsoft Office, Google Workspace.',

    // Languages
    lang1: 'Georgian',
    lang1Level: 'Native',
    lang2: 'English',
    lang2Level: 'B2 — Upper Intermediate',
    lang3: 'Russian',
    lang3Level: 'A2 — Elementary',

    // Footer
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    addressLabel: 'Location',
    addressText: 'Tbilisi, Georgia',
    dribbbleLabel: 'Dribbble',
    behanceLabel: 'Behance',

    // NEW Rebirth Portfolio Translations
    tagline: 'I create visually refined, functionally robust digital products where complex information translates into simple, intuitive interfaces or a cohesive visual language.',
    portfolioLabel: 'portfolio',
    featuredTitle: 'Featured Project',
    exploreAllProjects: 'Explore all projects',
    creativeExpertiseTitle: 'What I Do',
    creativeExpertiseQuote: '"Translating complex functional requirements into simple, scalable digital experiences."',
    servicesList: [
      {
        id: '01',
        title: 'UI/UX & Product Design',
        description: 'Creating user-centered digital products and establishing robust design architecture. Core focus on user research, UX best practices, end-to-end flows, interactive prototyping, and seamless developer handoff.',
        tags: ['User Research', 'End-to-End Flows', 'Prototyping', 'Developer Handoff']
      },
      {
        id: '02',
        title: 'Scalable Design Systems',
        description: 'Building robust, enterprise-grade design systems. Architecture using primitive variables, design tokens, and reusable component libraries to align design with engineering and speed up delivery.',
        tags: ['Design Tokens', 'Primitive Variables', 'Component Libraries', 'Architecture']
      },
      {
        id: '03',
        title: 'GovTech & Enterprise Solutions',
        description: 'Architecting national portals, public digital services, e-governance platforms, and administrative dashboards. Translating heavy institutional data into simple, functional user experiences.',
        tags: ['GIS Portals', 'Public Registers', 'E-Governance', 'Admin Dashboards']
      },
      {
        id: '04',
        title: 'Digital Marketing & Growth',
        description: 'Data-driven strategies for user acquisition, engagement, and growth. Ad creative generation, Meta Ads management, performance reporting, and web analytics to maximize ROI.',
        tags: ['User Acquisition', 'Meta Ads', 'Performance Reporting', 'Web Analytics']
      },
      {
        id: '05',
        title: 'Graphic & Print Design',
        description: 'Designing visual assets, social media graphics, and print media. Deep expertise in typography, grid layout systems, color theory, and high-volume pre-press production.',
        tags: ['Typography', 'Grid Systems', 'Color Theory', 'Pre-Press Production']
      }
    ],
    metricMarvelsTitle: 'Metric Marvels',
    statsAwardsLabel: 'Awards & Recognition',
    statsAwardsDesc: '(6 Cannes Lynx / 4 Wobbly / 7 Ouuuuuch / 23 PWA)',
    statsCompletedLabel: 'Projects Completed',
    statsCompletedDesc: '(65 Web / 36 App / 12 E-Com / 6 Charity)',
    statsSatisfactionLabel: 'Client Satisfaction',
    statsSatisfactionDesc: '(Based on surveys)',
    statsMentalLabel: 'Worked with challenging clients',
    statsMentalDesc: '(And survived them all)',
    applauseCornerTitle: 'Applause Corner',
    testimonialsList: [
      {
        quote: 'Working with Otar redefined our approach. He blends meticulous aesthetics with highly converting ad layouts that immediately spiked our ROI.',
        name: 'Timothy Rodgers',
        role: 'CEO, Snapple'
      },
      {
        quote: 'Otar brought an exceptional level of polish to our product design. His focus on design systems dramatically cut down our engineering handoff times.',
        name: 'Anna Korhonen',
        role: 'Product Lead, Netflux'
      },
      {
        quote: 'A brilliant eye for detail. The user flows Otar designed for our mobile app solved critical drop-offs in our checkout funnel in days.',
        name: 'Layne Morgan',
        role: 'Design Director, Beta'
      },
      {
        quote: 'His ad strategy is pixel-perfect. We went from struggling to get organic leads to over 12k high-quality signups with highly structured creative systems.',
        name: 'Anita Hoffmann',
        role: 'Founder, Giggle'
      },
      {
        quote: 'Otar effortlessly translated complex blockchain transaction structures into clean, beautifully styled dashboards. A rare talent.',
        name: 'Josh Stevens',
        role: 'VP of Engineering, Microshaft'
      },
      {
        quote: 'He rebranded our visual guidelines from scratch. A completely dark, minimal look that immediately felt premium and editorial. High recommend!',
        name: 'Rick Bellante',
        role: 'Creative Lead, Blanc4'
      }
    ],
    haveProject: 'Have a project?',
    scheduleCall: 'Schedule a Call.',
    letsChat: "Let's chat!",
    availableFromLabel: 'I\'m available for new projects',
    bookCallLabel: 'Book a free call',
    followMeOnX: 'Follow me on X',
    getRebirthFigma: 'Get Rebirth Figma',
    newTemplatePreview: 'New Template! → Preview',
    emailCopied: 'Email copied!',
    phoneCopied: 'Mobile copied!',
    londonTimeLabel: 'Tbilisi (GET)'
  },
  ka: {
    // Profile
    name: 'ოთარ დავითაშვილი',
    position: 'პროდუქტის დიზაინერი',
    bio: 'ვქმნი ვიზუალურად დახვეწილ, ფუნქციურად გამართულ ციფრულ პროდუქტებს, სადაც კომპლექსური ინფორმაცია მარტივ, ინტუიციურ ინტერფეისად თუ ვიზუალურ ენად გარდაიქმნება. ბიზნესის ხედვისა და საჭიროებების გათვალისწინებით, ჩემი სამუშაო მიდგომა ემყარება პროდუქტის სასიცოცხლო ციკლის სწორად განსაზღვრას, თანმიმდევრულ ვიზუალურ არქიტექტურას, საუკეთესო სამომხმარებლო პრაქტიკებსა და პროდუქტის საბოლოო მომხმარებლამდე მიტანაში აქტიურ მონაწილეობას.',

    // Section titles
    workExperience: 'სამუშაო გამოცდილება',
    featuredProjects: 'გამორჩეული პროექტები',
    skills: 'უნარები',
    education: 'განათლება და კურსები',
    tools: 'ხელსაწყოები',
    languages: 'ენები',

    // Work Experience - UI/UX Consultant
    jobTitle1: 'UI/UX კონსულტანტი',
    jobDate1: 'თებერვალი 2024 — დღემდე',
    jobCompany1: 'მსოფლიო ბანკის GRAIL პროექტი',
    jobCompanyLink1Text: '',
    jobIn1: '—',
    jobInLink1: 'საჯარო რეესტრის ეროვნული სააგენტო',
    jobType1: 'Full-time',
    jobDesc1: [
      'შევქმენი ეროვნული სივრცითი მონაცემების ინფრასტრუქტურის პორტალისა (nsdi.gov.ge) და დისტანციური რეგისტრაციის GovTech (გონიერი კონტრაქტი) პლატფორმების დიზაინი.',
      'ვიმუშავე სააგენტოს მთავარი პორტალის სრულ UI/UX რედიზაინზე (napr.gov.ge), პროცესი ახლაც მიმდინარეობს.',
      'ვმუშაობ სააგენტოს ერთიანი დიზაინ სისტემის შექმნაზე დიზაინ ტოკენების, პრიმიტიული ცვლადებისა და დიზაინ კომპონენტების გამოყენებით, დეველოპერებთან აქტიური კოორდინაციით.'
    ],
    jobDesc1Sub: [],

    // Work Experience - Content Manager & Advertiser (Dento-Art)
    jobTitle2: 'კონტენტ მენეჯერი & Growth ედვერთაიზერი',
    jobDate2: 'ნოემბერი 2024 — დღემდე',
    jobCompany2: 'სტომატოლოგიური კლინიკა Dento-Art',
    jobType2: 'Retainer',
    jobDesc2: [
      '$22K+ სარეკლამო ბიუჯეტით დაგენერირებული 23,000 ლიდი ($0.95-ზე ნაკლები CPA-ით) და 12.5M+ Impression-ით ($1.75 CPM).'
    ],

    // Work Experience - Content Manager & Advertiser (DBEF)
    jobTitle3: 'UI/UX დიზაინერი & კონტენტ მენეჯერი',
    jobDate3: 'ნოემბერი 2023 — დღემდე',
    jobCompany3: 'დავით ბეჟუაშვილის განათლების ფონდი (DBEF)',
    jobType3: 'Retainer',
    jobDesc3: [
      'ვიმუშავე პლატფორმის რედიზაინზე, ამჟამად ვმუშაობ სოციალური მედიის არხების კონტენტზე.'
    ],

    // Work Experience - UI/UX Designer (Hypercubic)
    jobTitle4: 'UI/UX დიზაინერი',
    jobDate4: 'მაისი 2022 — აგვისტო 2023',
    jobCompany4: 'Hypercubic Innovation Center',
    jobType4: 'Full-time',
    jobDesc4: [
      'ვმუშაობდი CMCX (Catena) ტოკენის ეკოსისტემაში შემავალი პლატფორმების ადაპტიურ ვერსიებსა და დიზაინ კომპონენტებზე.'
    ],

    // Work Experience - Graphic Designer
    jobTitle5: 'ვიზუალური დიზაინის სპეციალისტი',
    jobDate5: 'იანვარი 2015 — თებერვალი 2020',
    jobCompany5: 'Digital Print Center',
    jobType5: 'Full-time / Part-time',
    jobDesc5: [
      'ვმუშაობდი სხვადასხვა მიმართულების ვიზუალურ მასალებსა და Pre-press პროცესებზე.'
    ],

    // Featured Projects - Reblaze
    projectTitle1: 'UI/UX დიზაინერი',
    projectDate1: 'აგვ 2024 — იან 2026',
    projectCompany1: 'Reblaze',
    projectDesc1: [
      'ჩავატარე UX კვლევა მომხმარებლის ქცევის ანალიზისთვის და ძირითადი მოთხოვნების განსასაზღვრად.',
      'კვლევის შედეგები გადავიყვანე მაღალი სიზუსტის, მომხმარებელზე ორიენტირებულ ინტერფეისებად.',
      'დიზაინის გადაწყვეტებს ვადასტურებდი usability ტესტირებით.'
    ],

    // Featured Projects - Sabado
    projectTitle2: 'UI/UX დიზაინერი',
    projectDate2: 'მაი 2025 — სექ 2025',
    projectCompany2: 'Sabado Leadership Academy',
    projectDesc2: [
      'განვსაზღვრე ვიზუალური მიმართულება აკადემიის ბრენდისა და მიზნების შესაბამისად.',
      'დავაპროექტე მაღალი სიზუსტის UI კომპონენტები სიცხადესა და მარტივ ნავიგაციაზე ფოკუსით.',
      'ვმართავდი დიზაინიდან დეველოპმენტში გადასვლას ზუსტი იმპლემენტაციისთვის.'
    ],

    // Featured Projects - Ucraft.io
    projectTitle3: 'UI/UX დიზაინერი',
    projectDate3: 'სექ 2023 — იან 2024',
    projectCompany3: 'Ucraft.io',
    projectDesc3: [
      'დავაპროექტე AI-ზე დაფუძნებული სტარტაპის სრული ინტერფეისი ინტუიციური ნავიგაციის პრიორიტეტით.',
      'შევქმენი მაღალი სიზუსტის პროტოტიპები და ვიზუალური აქტივები MVP-ის მხარდასაჭერად.',
      'სტეიკჰოლდერებთან ერთად რთული AI ფუნქციონალი მარტივ UI-ად გადავთარგმნე.'
    ],

    // Skills
    skillsCategory1: 'პროდუქტი და UI/UX დიზაინი',
    skillsCategory1Text: 'პროდუქტის დიზაინი, UI დიზაინი, ინტერაქციის დიზაინი, UX Laws, დიზაინ-სისტემები, პროტოტიპირება, Wireframing, გრაფიკული დიზაინი',
    skillsCategory2: 'კვლევა და სტრატეგია',
    skillsCategory2Text: 'მომხმარებლის კვლევა, გამოყენებადობის ტესტირება, Nielsen\'s Heuristics, ინფორმაციის არქიტექტურა',
    skillsCategory3: 'ზრდა და მარკეტინგი',
    skillsCategory3Text: 'ციფრული მარკეტინგი, ფასიანი რეკლამა, სოციალური მედია, A/B ტესტირება',

    // Education
    educationTitle: 'განათლება და კურსები',
    edu1Institution: 'ილიას სახელმწიფო უნივერსიტეტი',
    edu1Degree: 'მაგისტრანტი, პოლიტიკური მეცნიერებები',
    edu2Institution: 'Coursera',
    edu2Degree: 'Google UX Design — პროფესიული სერტიფიკატი',
    edu3Institution: 'Zero To Mastery Academy',
    edu3Degree: 'Complete Web & Mobile Designer: UI/UX, Figma',
    edu4Institution: 'IT Academy Step',
    edu4Degree: 'Front-End Angular — პირველი მოდული',
    edu5Institution: 'Interaction Design Foundation (IxDF)',
    edu5Degree: 'UI/UX დიზაინის სხვადასხვა მიმართულების კურსები',

    // Tools
    toolsCategory1: 'დიზაინი და პროტოტიპირება',
    toolsCategory1Text: 'Figma, Adobe Creative Cloud, Miro, Framer, ProtoPie.',
    toolsCategory2: 'მარკეტინგი და ანალიტიკა',
    toolsCategory2Text: 'Meta Business Suite, Google Ads, Google Analytics.',
    toolsCategory3: 'კოდი',
    toolsCategory3Text: 'HTML, CSS, Tailwind, Bootstrap, JavaScript (საბაზისო).',
    toolsCategory4: 'პროდუქტიულობა',
    toolsCategory4Text: 'Microsoft Office, Google Workspace.',

    // Languages
    lang1: 'ქართული',
    lang1Level: 'მშობლიური',
    lang2: 'ინგლისური',
    lang2Level: 'B2 — საშუალოზე მაღალი',
    lang3: 'რუსული',
    lang3Level: 'A2 — საბაზისო',

    // Footer
    emailLabel: 'ელ-ფოსტა',
    phoneLabel: 'ტელეფონი',
    addressLabel: 'მდებარეობა',
    addressText: 'თბილისი, საქართველო',
    dribbbleLabel: 'Dribbble',
    behanceLabel: 'Behance',

    // NEW Rebirth Portfolio Translations
    tagline: 'ვქმნი ვიზუალურად დახვეწილ, ფუნქციურად გამართულ ციფრულ პროდუქტებს, სადაც კომპლექსური ინფორმაცია მარტივ, ინტუიციურ ინტერფეისად თუ ვიზუალურ ენად გარდაიქმნება.',
    portfolioLabel: 'პორტფოლიო',
    featuredTitle: 'გამორჩეული პროექტი',
    exploreAllProjects: 'ყველა პროექტის ნახვა',
    creativeExpertiseTitle: 'რას ვაკეთებ',
    creativeExpertiseQuote: '„კომპლექსური ამოცანების გარდაქმნა მარტივ, ფუნქციურ და მასშტაბირებად ციფრულ გამოცდილებად.“',
    servicesList: [
      {
        id: '01',
        title: 'UI/UX და პროდუქტის დიზაინი',
        description: 'მომხმარებელზე ორიენტირებული ციფრული პროდუქტების შექმნა და სწორი დიზაინერული არქიტექტურის განსაზღვრა. ძირითადი ფოკუსი სამომხმარებლო კვლევაზე, საუკეთესო სამომხმარებლო პრაქტიკებზე, სრულ ნაკადებზე (End-to-End flows), ინტერაქტიულ პროტოტიპებსა და დეველოპერებთან Handoff პროცესზე.',
        tags: ['სამომხმარებლო კვლევა', 'End-to-End Flows', 'პროტოტიპირება', 'Developer Handoff']
      },
      {
        id: '02',
        title: 'მასშტაბირებადი დიზაინ სისტემები',
        description: 'მასშტაბირებადი, Enterprise-დონის დიზაინ სისტემების არქიტექტურა. პრიმიტიული ცვლადების, დიზაინ ტოკენებისა და კომპონენტების ბიბლიოთეკების აწყობა დიზაინისა და დეველოპმენტის უნიფიცირებისთვის.',
        tags: ['დიზაინ ტოკენები', 'პრიმიტიული ცვლადები', 'კომპონენტები', 'არქიტექტურა']
      },
      {
        id: '03',
        title: 'GovTech და კომპლექსური სისტემები',
        description: 'სახელმწიფო პორტალების, საჯარო სერვისების, E-Governance პლატფორმებისა და შიდა ადმინისტრაციული დეშბორდების დიზაინი. კომპლექსური ინსტიტუციური მონაცემების მარტივ, ფუნქციურ ინტერფეისად გარდაქმნა.',
        tags: ['GIS პორტალები', 'საჯარო სერვისები', 'GovTech', 'ადმინ დეშბორდები']
      },
      {
        id: '04',
        title: 'ციფრული მარკეტინგი და ზრდა',
        description: 'რიცხვით მონაცემებზე დაყრდნობით მომხმარებელთა დაინტერესებისა და ზრდის სტრატეგიები. სარეკლამო ვიზუალების შექმნა, Meta Ads-ის მართვა, რეპორტინგი და ვებ-ანალიტიკა მაღალი ROI-ის მისაღწევად.',
        tags: ['ზრდის სტრატეგიები', 'Meta Ads', 'რეპორტინგი', 'ვებ-ანალიტიკა']
      },
      {
        id: '05',
        title: 'გრაფიკული და პრინტ დიზაინი',
        description: 'ვიზუალური მასალების, სოციალური მედიის ვიზუალებისა და ბეჭდური გრაფიკის შექმნა. ტიპოგრაფიის, ბადის (Grid) სისტემების, ფერთა თეორიისა და პრეპრეს (Pre-press) პროცესების სიღრმისეული ცოდნა.',
        tags: ['ტიპოგრაფია', 'Grid სისტემები', 'ფერთა თეორია', 'Pre-press პროცესები']
      }
    ],
    metricMarvelsTitle: 'მეტრიკული საოცრებები',
    statsAwardsLabel: 'ჯილდოები და აღიარება',
    statsAwardsDesc: '(6 Cannes Lynx / 4 Wobbly / 7 Ouuuuuch / 23 PWA)',
    statsCompletedLabel: 'შესრულებული პროექტები',
    statsCompletedDesc: '(65 ვებ / 36 აპი / 12 ელ-კომერცია / 6 ქველმოქმედება)',
    statsSatisfactionLabel: 'კლიენტთა კმაყოფილება',
    statsSatisfactionDesc: '(გამოკითხვებზე დაყრდნობით)',
    statsMentalLabel: 'რთულ კლიენტებთან მუშაობა',
    statsMentalDesc: '(და გადარჩენა)',
    applauseCornerTitle: 'აპლოდისმენტების კუთხე',
    testimonialsList: [
      {
        quote: 'ოთართან მუშაობამ სრულიად შეცვალა ჩვენი ხედვა. ის აერთიანებს დახვეწილ ესთეტიკას და მაღალკონვერსიულ სარეკლამო განლაგებას, რამაც მყისიერად გაზარდა ჩვენი ROI.',
        name: 'ტიმოთი როჯერსი',
        role: 'CEO, Snapple'
      },
      {
        quote: 'ოთარმა უმაღლესი ხარისხის სიზუსტე შემოიტანა ჩვენს პროდუქტის დიზაინში. დიზაინ-სისტემებზე მისმა ფოკუსმა მკვეთრად შეამცირა დეველოპერებისთვის კოდის გადაცემის დრო.',
        name: 'ანა კორჰონენი',
        role: 'პროდუქტის ლიდერი, Netflux'
      },
      {
        quote: 'დეტალების გასაოცარი ხედვა. ოთარის მიერ ჩვენი მობილური აპლიკაციისთვის შექმნილმა მომხმარებლის ნაკადებმა რამდენიმე დღეში გადაჭრა კრიტიკული ხარვეზები შესყიდვის ეტაპზე.',
        name: 'ლეინ მორგანი',
        role: 'დიზაინის დირექტორი, Beta'
      },
      {
        quote: 'მისი სარეკლამო სტრატეგია პიქსელურად ზუსტია. სარეკლამო კამპანიებითა და დიზაინით 12 000-ზე მეტი მაღალი ხარისხის რეგისტრაცია მივიღეთ უმოკლეს დროში.',
        name: 'ანიტა ჰოფმანი',
        role: 'დამფუძნებელი, Giggle'
      },
      {
        quote: 'ოთარმა მარტივად გარდაქმნა ბლოკჩეინის ტრანზაქციების რთული სტრუქტურა სუფთა, ლამაზად სტილიზებულ დეშბორდებად. იშვიათი ტალანტია.',
        name: 'ჯოშ სტივენსი',
        role: 'საინჟინრო მიმართულების ვიცე-პრეზიდენტი, Microshaft'
      },
      {
        quote: 'მან თავიდანვე შექმნა ჩვენი ბრენდის ვიზუალური სახელმძღვანელო. სრულიად მუქი, მინიმალისტური სტილი, რომელიც მაშინვე პრემიუმ კლასისად იგრძნობა. ძლიერ გირჩევთ!',
        name: 'რიკ ბელანტე',
        role: 'კრეატიული ლიდერი, Blanc4'
      }
    ],
    haveProject: 'გაქვთ პროექტი?',
    scheduleCall: 'დაგეგმეთ ზარი.',
    letsChat: 'ვისაუბროთ!',
    availableFromLabel: 'თავისუფალი ვარ ახალი პროექტებისთვის',
    bookCallLabel: 'უფასო ზარის დაჯავშნა',
    followMeOnX: 'გამომყევით X-ზე',
    getRebirthFigma: 'იხილეთ REBIRTH FIGMA',
    newTemplatePreview: 'ახალი შაბლონი! → Preview',
    emailCopied: 'ელ-ფოსტა კოპირებულია!',
    phoneCopied: 'ტელეფონი კოპირებულია!',
    londonTimeLabel: 'თბილისი (GET)'
  }
};
