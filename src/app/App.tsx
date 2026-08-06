import { useState, useEffect, useRef } from "react";
import "@/styles/smooth-scroll.css";
import "@/styles/fonts.css";
import { Download, ExternalLink, Mail, Phone, MapPin, Copy, Check, Sun, Moon, ArrowDown, Menu, X } from "lucide-react";
import Lenis from "lenis";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { translations } from "./translations/translations";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { EducationSection } from "./components/EducationSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FooterSection } from "./components/FooterSection";

import { CaseStudyModal } from "./components/CaseStudyModal";
import type { WorkExperience, FeaturedProject } from "./types";
import profileImage from "@/assets/profile_2.jpg";
import logoSvg from "@/assets/logo.svg";

// Tool Icons
import FigmaIcon from "@/assets/tools_logos/Figma.svg";
import AdobeCCIcon from "@/assets/tools_logos/Adobe_Creative_Cloud.svg";
import MiroIcon from "@/assets/tools_logos/Miro.svg";
import FramerBlackIcon from "@/assets/tools_logos/Framer_Black.svg";
import ProtoPieIcon from "@/assets/tools_logos/ProtoPie.svg";
import MetaIcon from "@/assets/tools_logos/Meta Business Suite.svg";
import GoogleAdsIcon from "@/assets/tools_logos/Google Ads.svg";
import GoogleAnalyticsIcon from "@/assets/tools_logos/Google Analytics.svg";
import HTMLIcon from "@/assets/tools_logos/HTML5.svg";
import CSSIcon from "@/assets/tools_logos/CSS3.svg";
import TailwindIcon from "@/assets/tools_logos/Tailwind.svg";
import BootstrapIcon from "@/assets/tools_logos/Bootstrap.svg";
import JavascriptIcon from "@/assets/tools_logos/Javascript.svg";
import ClaudeIcon from "@/assets/tools_logos/Claude.svg";
import GeminiIcon from "@/assets/tools_logos/Gemini.svg";
import GoogleAIStudioIcon from "@/assets/tools_logos/Google AI Studio.svg";
import AntigravityIcon from "@/assets/tools_logos/Antigravity.svg";
import StitchIcon from "@/assets/tools_logos/Stitch.svg";
import LovableIcon from "@/assets/tools_logos/Lovable.svg";
import BoltIcon from "@/assets/tools_logos/Bolt.svg";
import JiraIcon from "@/assets/tools_logos/Jira.svg";
import TrelloIcon from "@/assets/tools_logos/Trello.svg";
import MicrosoftOfficeIcon from "@/assets/tools_logos/Microsoft Office.svg";
import GoogleWorkspaceIcon from "@/assets/tools_logos/Google Workspace.svg";

// Simple Live Clock Component (Tbilisi GMT+4 time)
function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Tbilisi is UTC+4. Calculate UTC and add 4 hours.
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const tbilisi = new Date(utc + 3600000 * 4);
      const hours = String(tbilisi.getHours()).padStart(2, "0");
      const minutes = String(tbilisi.getMinutes()).padStart(2, "0");
      const seconds = String(tbilisi.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return <span className=" tracking-wider tabular-nums">{time}</span>;
}

// Counting animation utility for Metric Marvels
export function Counter({ targetValue, suffix = "" }: { targetValue: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        } else {
          setHasStarted(false);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 1800; // ms
    const stepTime = Math.max(Math.floor(duration / targetValue), 10);
    const step = targetValue > 150 ? Math.ceil(targetValue / 60) : 1;

    const timer = setInterval(() => {
      start += step;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, targetValue]);

  return (
    <span ref={elementRef} className=" font-bold text-5xl md:text-7xl tracking-tighter tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// Infinite scrolling marquee helper
function Marquee({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="w-full overflow-hidden flex select-none py-4 border-y border-border/60 bg-background/50 backdrop-blur-sm">
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        <div className="flex gap-16 pr-16 items-center whitespace-nowrap">
          {children}
        </div>
        <div className="flex gap-16 pr-16 items-center whitespace-nowrap" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

// Testimonials (Applause Corner) carousel slider
function TestimonialsSlider({ list }: { list: any[] }) {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const next = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % list.length);
      setIsFading(false);
    }, 200);
  };

  const prev = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + list.length) % list.length);
      setIsFading(false);
    }, 200);
  };

  return (
    <div className="w-full max-w-4xl mx-auto border border-border p-6 md:p-12 bg-card relative">
      <div className="text-left  text-4xl text-border/20 absolute top-4 left-6 select-none">“</div>
      <div className="min-h-[160px] flex items-center justify-center text-center">
        <p className={` not-italic font-medium text-lg md:text-2xl leading-relaxed text-foreground transition-opacity duration-200 ${isFading ? "opacity-0" : "opacity-100"}`}>
          "{list[index].quote}"
        </p>
      </div>
      <div className="flex justify-between items-center border-t border-border/80 pt-6 mt-6">
        <div className={`flex flex-col text-left transition-opacity duration-200 ${isFading ? "opacity-0" : "opacity-100"}`}>
          <span className="font-semibold text-sm tracking-wider text-foreground ">{list[index].name}</span>
          <span className="text-xs text-muted-foreground mt-0.5">{list[index].role}</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="size-10 border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors text-lg"
            aria-label="Previous Testimonial"
          >
            ←
          </button>
          <button
            onClick={next}
            className="size-10 border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors text-lg"
            aria-label="Next Testimonial"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

// Service Accordion component
function ExpertiseAccordion({ list }: { list: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();

  return (
    <div className="flex flex-col w-full border-t border-border">
      {list.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.id} className="border-b border-border transition-all duration-300">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
            >
              <div className="flex items-baseline gap-6 md:gap-12">
                <span className=" text-xs text-muted-foreground">——</span>
                <span className={` text-lg md:text-2xl font-semibold ${language === "en" ? "tracking-wider" : "tracking-normal"} text-foreground transition-colors group-hover:text-muted-foreground `}>
                  {item.title}
                </span>
              </div>
              <span className="text-2xl font-light transform transition-transform duration-300">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[300px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="pl-6 md:pl-24 max-w-3xl flex flex-col gap-5">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px]  tracking-widest border border-border/80 text-muted-foreground "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Tool Logo Renderer Helper
function renderToolIcon(toolName: string) {
  const name = toolName.toLowerCase();
  
  if (name.includes("figma")) {
    return (
      <svg className="size-3.5 shrink-0" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 19C19 8.51 10.49 0 0 0V19H19Z" fill="#F24E1E"/>
        <path d="M19 0C29.49 0 38 8.51 38 19C38 29.49 29.49 38 19 38V19H19Z" fill="#FF7262"/>
        <path d="M19 38C19 27.51 10.49 19 0 19V38H19Z" fill="#A259FF"/>
        <path d="M0 38C0 48.49 8.51 57 19 57C29.49 57 38 48.49 38 38V38H0Z" fill="#1ABC9C"/>
      </svg>
    );
  }
  
  if (name.includes("photoshop") || name.includes("adobe ps") || name === "ps") {
    return (
      <span className="text-[8px] font-black px-1 py-0.5 bg-[#001E36] text-[#00C8FF] rounded-sm shrink-0 leading-none">Ps</span>
    );
  }
  
  if (name.includes("illustrator") || name.includes("adobe ai") || name === "ai") {
    return (
      <span className="text-[8px] font-black px-1 py-0.5 bg-[#330000] text-[#FF9A00] rounded-sm shrink-0 leading-none">Ai</span>
    );
  }
  
  if (name.includes("after effects") || name.includes("ae")) {
    return (
      <span className="text-[8px] font-black px-1 py-0.5 bg-[#17002E] text-[#D1A0FF] rounded-sm shrink-0 leading-none">Ae</span>
    );
  }
  
  if (name.includes("webflow")) {
    return (
      <svg className="size-3.5 shrink-0 text-[#4353FF] fill-current" viewBox="0 0 100 100">
        <path d="M91.4 15.5l-20 69H55.2l12.4-42.8L51.8 84.5H35.6L48 41.7 32 84.5H16.2L36.3 15.5h16.2l-12.4 42.8 15.8-42.8h16.2L59.7 58.3l15.5-42.8z" />
      </svg>
    );
  }
  
  if (name.includes("wordpress")) {
    return (
      <svg className="size-3.5 shrink-0 fill-current text-[#21759B]" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.95 9.87c.03-.27.05-.53.05-.77 0-1.13-.4-1.93-.75-2.52-.47-.73-1.07-1.4-1.07-2.18 0-.93.73-1.8 1.77-1.8.08 0 .15 0 .23.01C18.23 6.13 19 8.48 19 11v.87zm-1.89 2.51c.33-.93.63-1.9.63-2.58 0-.82-.23-1.42-.47-1.85-.3-.54-.6-1.07-.6-1.78 0-.96.76-1.88 1.83-1.88.26 0 .5.04.73.12-1.3-1.54-3.23-2.52-5.4-2.52-2.3 0-4.36 1.1-5.69 2.82.26.02.48.03.67.03 1.07 0 2.73-.13 2.73-.13.55-.03.62.77.07.82 0 0-.56.07-1.18.1l3.75 11.16 2.25-6.75-1.6-4.41c-.56-.03-1.09-.1-1.09-.1-.56-.03-.49-.83.07-.82 0 0 1.7.13 2.7.13 1.07 0 2.73-.13 2.73-.13.55-.03.62.77.07.82 0 0-.56.07-1.18.1l3.72 11.08.97-3.24zm-9.08.68L7.23 6.13c-.62-.03-1.18-.1-1.18-.1-.56-.03-.49-.83.07-.82 0 0 1.73.13 2.73.13.9 0 2.5-.13 2.5-.13.55-.03.62.77.07.82 0 0-.52.07-1.1.1l3.66 10.9-3.92-11.83z"/>
      </svg>
    );
  }
  
  if (name.includes("git") || name.includes("github")) {
    return (
      <svg className="size-3.5 shrink-0 fill-current text-foreground group-hover:text-background transition-colors" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    );
  }

  return <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full shrink-0"></span>;
}

// Global Georgian Mtavruli Unicode mapper
export const m = (text: any) => {
  if (!text || typeof text !== 'string') return text;
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= 0x10D0 && code <= 0x10FA) return String.fromCharCode(code + 0x0BC0);
    return char;
  }).join('');
};

function ResumeContent() {
  const { language, setLanguage, toggleLanguage, data, isLoadingData } = useLanguage();
  const t = translations[language];

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<WorkExperience | FeaturedProject | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "interactive">("default");

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("davitashviliotari@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("+995599711037");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  useEffect(() => {
    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let rafId = 0;
    const ease = 0.16;

    const handleMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const handleOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setCursorVariant(el.closest("a, button, [role='button']") ? "interactive" : "default");
    };

    const tick = () => {
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      setCursorPos({ x: current.x, y: current.y });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  // Hide loader after 1.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Update loading progress
  useEffect(() => {
    const duration = 1500;
    const steps = 100;
    const interval = duration / steps;
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, interval);
    return () => clearInterval(progressInterval);
  }, []);

  // Toggle local class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Lenis smooth scroll
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduceMotion,
      lerp: 0.08,
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href^='#']");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      
      let targetId = href.substring(1);
      if (targetId === "about") targetId = "hero";
      
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;
      e.preventDefault();
      
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 64;
      lenis.scrollTo(offsetPosition, { duration: 1.2 });
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Reveal scroll observer
  useEffect(() => {
    if (!showContent) return;
    const targets = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [showContent, language]);

  // Map database elements
  const experiences = data?.workExperience || [];
  const projects = data?.featuredProjects || [];
  const featured = projects[0];
  const selectedList = projects.slice(1);

  return (
    <div className={`min-h-screen flex flex-col  transition-colors duration-500 ${isDarkMode ? "bg-background text-foreground" : "bg-white text-black"}`}>
      {/* Hide cursor styles */}
      <style>{`@media (hover: hover) and (pointer: fine) { body, a, button, [role="button"], input, textarea, select { cursor: none !important; } }`}</style>
      
      {/* Custom Cursor */}
      <div
        aria-hidden="true"
        className="fixed pointer-events-none z-[200] rounded-full hidden md:block transition-[width,height,background-color,border-color] duration-300 ease-out"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: cursorVariant === "interactive" ? 44 : 20,
          height: cursorVariant === "interactive" ? 44 : 20,
          transform: "translate(-50%, -50%)",
          border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.75)" : "1px solid rgba(0, 0, 0, 0.75)",
          background: cursorVariant === "interactive" ? (isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.06)") : "transparent",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed pointer-events-none z-[201] rounded-full hidden md:block transition-opacity duration-200"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: 4,
          height: 4,
          transform: "translate(-50%, -50%)",
          background: isDarkMode ? "#ffffff" : "#000000",
          opacity: cursorVariant === "interactive" ? 0 : 1,
        }}
      />

      {/* Loading Screen */}
      {(isLoading || isLoadingData) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-6 w-72">
            <span className="text-4xl  font-semibold tracking-wide tabular-nums text-foreground">
              {loadingProgress}%
            </span>
            <div className="w-full h-[1px] bg-border overflow-hidden">
              <div
                className="h-full bg-foreground transition-all duration-100"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* FIXED HEADER */}
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />


      {/* HERO & ABOUT ME SECTION */}
      
      <Hero />
      <ProjectsSection setSelectedCaseStudy={setSelectedCaseStudy} />
      <ExperienceSection />
      <SkillsSection isDarkMode={isDarkMode} />
      <EducationSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <FooterSection />


      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        data={selectedCaseStudy}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ResumeContent />
    </LanguageProvider>
  );
}

