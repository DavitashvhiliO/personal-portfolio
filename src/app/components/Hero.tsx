import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { m, Marquee } from "../utils";
import profileImage from "@/assets/profile_2.jpg";

export function Hero() {
  const { language, data } = useLanguage();
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

  return (
    <section id="hero" className="min-h-screen lg:h-screen pt-20 pb-4 flex flex-col justify-between relative overflow-hidden bg-background">
        <div id="about" className="w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center justify-center py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Left Bio details (60%) */}
            <div className="lg:col-span-7 flex flex-col gap-5 reveal">
              <div className="pb-3 border-b border-border/40">
                <span className=" text-sm md:text-base text-muted-foreground ">
                  // {language === "en" ? "Product Designer" : "პროდუქტის დიზაინერი"}
                </span>
              </div>
              
              <h1 className=" font-black text-3xl md:text-6xl tracking-tighter text-foreground mt-3 leading-tight">
                {t.name}
              </h1>
              
              <p className=" text-xs md:text-sm leading-relaxed text-muted-foreground max-w-2xl mt-4">
                {t.bio}
              </p>

              {/* CV Download CTA */}
              <div className="pt-6 border-t border-border/60 mt-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1WLmZe8jFMsPjnVU_Qa8tGgdNUj2QDiHQ"
                  download
                  className="inline-flex items-center gap-2.5 border-2 border-foreground px-5 py-3  text-xs hover:bg-foreground hover:text-background transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <Download className="size-4 shrink-0" />
                  <span>{language === "en" ? "Download Resume" : "რეზიუმეს გადმოწერა"}</span>
                </a>
              </div>
            </div>

            {/* Right Portrait (40%) */}
            <div className="lg:col-span-5 flex flex-col gap-4 items-center lg:items-end reveal">
              <div
                className="relative w-full max-w-[320px] aspect-[3/4] overflow-hidden group rotate-[3deg] hover:rotate-0 transition-transform duration-700 ease-out"
              >
                <img
                  alt={t.name}
                  className="w-full h-full object-cover object-top hover-zoom-img transition-all duration-700 grayscale group-hover:grayscale-0"
                  src={profileImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Area: Marquee & Centered Scroll indicator */}
        <div className="w-full mt-auto flex flex-col gap-0">
          <div className="mb-2">
            {(() => {
              const items = language === "en"
                ? ["Product Designer", "UI/UX Strategy", "Scalable Design Systems", "Interaction Design", "User Research", "Usability Testing"]
                : ["პროდუქტის დიზაინი", "UI/UX სტრატეგია", "დიზაინ სისტემები", "ინტერაქციის დიზაინი", "მომხმარებლის კვლევა", "გამოყენებადობის ტესტი"];
              return (
                <Marquee reverse>
                  {items.map((item, i) => (
                    <>
                      <span key={`item-${i}`}>{item}</span>
                      <span key={`sep-${i}`} className="opacity-30">/</span>
                    </>
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
