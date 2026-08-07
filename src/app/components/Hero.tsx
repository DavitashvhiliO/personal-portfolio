import { useState, useEffect } from "react";
import { Download, ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { m, Marquee } from "../utils";

// New Profile Image
import profileImage from "@/assets/profile_img.webp";

// PDF Resumes
import resumeEnDark from "@/assets/Resume/Otar-Davitashvili-Resume-EN-Dark.pdf";
import resumeEnLight from "@/assets/Resume/Otar-Davitashvili-Resume-EN-Light.pdf";
import resumeKaDark from "@/assets/Resume/Otar-Davitashvili-Resume-KA-Dark.pdf";
import resumeKaLight from "@/assets/Resume/Otar-Davitashvili-Resume-KA-Light.pdf";

interface HeroProps {
  isDarkMode?: boolean;
}

export function Hero({ isDarkMode = true }: HeroProps) {
  const { language, data } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [isFading, setIsFading] = useState(false);
  const [index, setIndex] = useState(0);

  const list = [
    { name: language === "en" ? "Otar Davitashvili" : m("ოთარ დავითაშვილი"), role: language === "en" ? "UI/UX Designer" : "UI/UX დიზაინერი" },
    { name: language === "en" ? "Stitch" : "Stitch", role: language === "en" ? "Founder" : "დამფუძნებელი" },
    { name: language === "en" ? "Wolt" : "Wolt", role: language === "en" ? "Courier Partner" : "კურიერი პარტნიორი" },
    { name: language === "en" ? "Tbilisi State University" : m("თბილისის სახელმწიფო უნივერსიტეტი"), role: language === "en" ? "Sociology" : "სოციოლოგია" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % list.length);
        setIsFading(false);
      }, 200);
    }, 2500);
    return () => clearInterval(timer);
  }, [list.length]);

  // Determine correct PDF to download
  let resumePdfUrl = resumeEnDark;
  if (language === 'ka') {
    resumePdfUrl = isDarkMode ? resumeKaDark : resumeKaLight;
  } else {
    resumePdfUrl = isDarkMode ? resumeEnDark : resumeEnLight;
  }

  return (
    <section id="hero" className="min-h-screen lg:h-screen pt-24 pb-4 flex flex-col justify-between relative overflow-hidden bg-background">
        <div id="about" className="w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center justify-center py-4">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center w-full">
            
            {/* Left Bio details (60% on Desktop, bottom on Mobile) */}
            <div className="lg:col-span-7 flex flex-col gap-5 reveal w-full">
              <div className="pb-3 border-b border-border/40 hidden lg:block">
                <span className=" text-sm md:text-base text-muted-foreground ">
                  // {language === "en" ? "Product Designer" : "პროდუქტის დიზაინერი"}
                </span>
              </div>
              
              <h1 className=" font-black text-4xl md:text-6xl tracking-tighter text-foreground mt-2 lg:mt-3 leading-tight">
                {t.name}
              </h1>
              
              <p className=" text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mt-2 lg:mt-4">
                {t.bio}
              </p>

              {/* CV Download CTA */}
              <div className="pt-6 border-t border-border/60 mt-4">
                <a
                  href={resumePdfUrl}
                  download
                  className="inline-flex items-center gap-2.5 border-2 border-foreground px-5 py-3 text-sm hover:bg-foreground hover:text-background transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <Download className="size-4 shrink-0" />
                  <span>{language === "en" ? "Download Resume" : "რეზიუმეს გადმოწერა"}</span>
                </a>
              </div>
            </div>

            {/* Right Portrait (40% on Desktop, top on Mobile) */}
            <div className="lg:col-span-5 flex flex-col gap-4 items-start lg:items-end reveal w-full">
              <div
                className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-full lg:max-w-[320px] lg:h-auto lg:aspect-[3/4] overflow-hidden group lg:rotate-[3deg] lg:hover:rotate-0 transition-transform duration-700 ease-out rounded-full lg:rounded-none border-2 lg:border-0 border-border"
              >
                <img
                  alt={t.name}
                  className="w-full h-full object-cover object-top hover-zoom-img transition-all duration-700 grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
                  src={profileImage}
                />
              </div>
              
              {/* Mobile-only subtitle next to or below image */}
              <div className="block lg:hidden mt-2">
                <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                  {language === "en" ? "Product Designer" : "პროდუქტის დიზაინერი"}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Area: Marquee & Centered Scroll indicator */}
        <div className="w-full mt-auto flex flex-col gap-0">
          <div className="mb-2">
            {(() => {
              const baseItems = language === "en"
                ? ["Product Designer", "UI/UX Strategy", "Scalable Design Systems", "Interaction Design", "User Research", "Usability Testing"]
                : ["პროდუქტის დიზაინი", "UI/UX სტრატეგია", "დიზაინ სისტემები", "ინტერაქციის დიზაინი", "მომხმარებლის კვლევა", "გამოყენებადობის ტესტი"];
              const items = [...baseItems, ...baseItems, ...baseItems];
              return (
                <Marquee reverse>
                  {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <span>{item}</span>
                      <span className="opacity-30">/</span>
                    </div>
                  ))}
                </Marquee>
              );
            })()}
          </div>

          {/* Centered borderless scroll button with extra spacing */}
          <div className="w-full flex justify-center items-center pt-8 pb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 text-foreground/70 hover:text-foreground hover:underline transition-all  text-xs"
            >
              <span>{language === "en" ? "Scroll to Explore" : "ჩამოსქროლე"}</span>
              <ArrowDown className="size-4 animate-bounce text-foreground/80" />
            </a>
          </div>
        </div>
      </section>
  );
}
