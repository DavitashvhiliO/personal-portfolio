import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Language, PortfolioData } from '../types';
import { translations } from '../translations/translations';
import nsdiImg from '../../assets/Projects/NSDI.webp';
import naprImg from '../../assets/Projects/NAPR.webp';
import reblazeImg from '../../assets/Projects/Reblaze.webp';
import sabadoImg from '../../assets/Projects/Sabado.webp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  data: PortfolioData | null;
  isLoadingData: boolean;
  refetchData: () => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [data, setData] = useState<PortfolioData | null>(null);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  const getFallbackData = (lang: Language): PortfolioData => {
    const t = translations[lang];
    return {
      profile: {
        name: t.name,
        position: t.position,
        bio: t.bio,
      },
      sectionTitles: {
        workExperience: t.workExperience,
        featuredProjects: t.featuredProjects,
        skills: t.skills,
        education: t.educationTitle || t.education,
        tools: t.tools,
        languages: t.languages,
      },
      workExperience: [
        {
          id: 'job1',
          title: t.jobTitle1,
          date: t.jobDate1,
          company: t.jobCompany1,
          companyLinkText: t.jobCompanyLink1Text,
          companyLink: "https://www.worldbank.org/en/news/press-release/2023/10/16/georgia-and-world-bank-launch-project-to-improve-agriculture-irrigation-and-land-management",
          jobIn: t.jobIn1,
          jobInLinkText: t.jobInLink1,
          jobInLink: "https://www.napr.gov.ge/",
          type: t.jobType1,
          desc: t.jobDesc1,
          descSub: t.jobDesc1Sub,
        },
        {
          id: 'job2',
          title: t.jobTitle2,
          date: t.jobDate2,
          company: t.jobCompany2,
          companyLink: "https://www.facebook.com/dentoart2023",
          type: t.jobType2,
          desc: t.jobDesc2,
        },
        {
          id: 'job3',
          title: t.jobTitle3,
          date: t.jobDate3,
          company: t.jobCompany3,
          companyLink: "https://www.facebook.com/DBEFFoundation",
          type: t.jobType3,
          desc: t.jobDesc3,
        },
        {
          id: 'job4',
          title: t.jobTitle4,
          date: t.jobDate4,
          company: t.jobCompany4,
          type: t.jobType4,
          desc: t.jobDesc4,
        },
        {
          id: 'job5',
          title: t.jobTitle5,
          date: t.jobDate5,
          company: t.jobCompany5,
          type: t.jobType5,
          desc: t.jobDesc5,
        }
      ],
      featuredProjects: [
        {
          id: 'proj1',
          title: t.jobTitle1,
          date: t.jobDate1,
          company: lang === 'en' ? 'Georgian National Spatial Data Infrastructure Portal' : 'Georgian National Spatial Data Infrastructure პლატფორმა',
          companyLink: "https://nsdi.gov.ge/",
          desc: [lang === 'en' ? 'National Spatial Data Infrastructure & Web GIS Platform of Georgia. Features a metadata catalog, data editor, and interactive map interface. Currently undergoing continuous layout and functional iterations.' : 'საქართველოს ეროვნული სივრცითი მონაცემებისა და Web GIS პლატფორმა. მოიცავს მეტამონაცემების კატალოგს, რედაქტორს და ინტერაქტიულ რუკას. ამჟამად მიმდინარეობს ინტერფეისისა და ფუნქციონალის იტერაციები.'],
          status: lang === 'en' ? 'In Active Development' : 'აქტიური განვითარების პროცესში',
          domain: 'nsdi.gov.ge',
          image: nsdiImg
        },
        {
          id: 'proj2',
          title: t.jobTitle1,
          date: t.jobDate1,
          company: lang === 'en' ? 'National Agency of Public Registry of Georgia Website' : 'National Agency of Public Registry of Georgia ვებგვერდი',
          companyLink: "https://napr.gov.ge/",
          desc: [t.jobDesc1[1]],
          status: lang === 'en' ? 'In Active Development' : 'აქტიური განვითარების პროცესში',
          domain: 'napr.gov.ge',
          image: naprImg
        },
        {
          id: 'proj3',
          title: t.projectTitle1,
          date: t.projectDate1,
          company: t.projectCompany1,
          companyLink: "https://www.reblaze.com",
          desc: t.projectDesc1,
          status: lang === 'en' ? 'In Development Process' : 'მიმდინარეობს დეველოპმენტი',
          domain: 'reblaze.com',
          isDisabled: true,
          image: reblazeImg
        },
        {
          id: 'proj4',
          title: t.projectTitle2,
          date: t.projectDate2,
          company: t.projectCompany2,
          companyLink: "https://sabado.edu.ge",
          desc: t.projectDesc2,
          status: lang === 'en' ? 'Periodic Updates' : 'პერიოდული განახლებები',
          domain: 'sabado.edu.ge',
          image: sabadoImg
        }
      ],
      skills: [
        { category: t.skillsCategory1, text: t.skillsCategory1Text },
        { category: t.skillsCategory2, text: t.skillsCategory2Text },
        { category: t.skillsCategory3, text: t.skillsCategory3Text }
      ],
      education: {
        title: t.educationTitle || t.education,
        items: [
          { institution: t.edu1Institution, degree: t.edu1Degree },
          { institution: t.edu2Institution, degree: t.edu2Degree },
          { institution: t.edu3Institution, degree: t.edu3Degree },
          { institution: t.edu4Institution, degree: t.edu4Degree },
          { institution: t.edu5Institution, degree: t.edu5Degree }
        ]
      },
      tools: [
        { category: t.toolsCategory1, text: t.toolsCategory1Text },
        { category: t.toolsCategory2, text: t.toolsCategory2Text },
        { category: t.toolsCategory3, text: t.toolsCategory3Text },
        { category: t.toolsCategory4, text: t.toolsCategory4Text }
      ],
      languages: [
        { name: t.lang1, level: t.lang1Level },
        { name: t.lang2, level: t.lang2Level },
        { name: t.lang3, level: t.lang3Level }
      ],
      footer: {
        emailLabel: t.emailLabel,
        phoneLabel: t.phoneLabel,
        addressLabel: t.addressLabel,
        addressText: t.addressText,
        dribbbleLabel: t.dribbbleLabel,
        behanceLabel: t.behanceLabel
      }
    };
  };

  const fetchData = async (lang: Language) => {
    if (!data) setIsLoadingData(true);
    try {
      // Prioritize local translations file directly to prevent any stale/incorrect Firestore data
      setData(getFallbackData(lang));
    } catch (error) {
      console.warn('Error loading translations:', error);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    fetchData(language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ka' : 'en');
  };

  const refetchData = async () => {
    await fetchData(language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, data, isLoadingData, refetchData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}