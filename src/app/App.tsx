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


// Global Georgian Mtavruli Unicode mapper


function ResumeContent() {
  const { language, setLanguage, toggleLanguage, data, isLoadingData } = useLanguage();
  const t = translations[language];

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") return !sessionStorage.getItem("visited");
    return true;
  });
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<WorkExperience | FeaturedProject | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("visited")) return 100;
    return 0;
  });
  const [showContent, setShowContent] = useState(() => {
    if (typeof window !== "undefined") return !!sessionStorage.getItem("visited");
    return false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "interactive">("default");
  
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

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

  // Hide loader after 400ms max
  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
      sessionStorage.setItem("visited", "true");
    }, 400);
    return () => clearTimeout(timer);
  }, [isLoading]);

  // Update loading progress
  useEffect(() => {
    if (!isLoading) return;
    const duration = 400;
    const steps = 20;
    const interval = duration / steps;
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / steps);
      });
    }, interval);
    return () => clearInterval(progressInterval);
  }, [isLoading]);

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
    if (!showContent || isLoadingData) return;
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

    // Dispatch resize to fix Lenis scroll bounds if text height changed
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [showContent, language, isLoadingData]);

  // Map database elements
  const experiences = data?.workExperience || [];
  const projects = data?.featuredProjects || [];
  const featured = projects[0];
  const selectedList = projects.slice(1);

  return (
    <div className={`min-h-screen flex flex-col overflow-x-hidden transition-colors duration-500 ${isDarkMode ? "bg-background text-foreground" : "bg-white text-black"}`}>
      
      {/* Skip to Main Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[300] focus:px-6 focus:py-3 focus:bg-foreground focus:text-background top-0 left-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground transition-all rounded-br-lg"
      >
        {language === "en" ? "Skip to main content" : "მთავარ კონტენტზე გადასვლა"}
      </a>

      {/* Custom Cursor */}
      {!reduceMotion && (
        <>
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
        </>
      )}

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
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero isDarkMode={isDarkMode} />
        <ProjectsSection setSelectedCaseStudy={setSelectedCaseStudy} />
        <ExperienceSection />
        <SkillsSection isDarkMode={isDarkMode} />
        <EducationSection />
        <ExpertiseSection />
        {/* <TestimonialsSection /> */}
      </main>
      
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

