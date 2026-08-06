import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { Counter } from "../utils";

export function ExpertiseSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="expertise" className="py-24 border-t border-border bg-card/10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 flex flex-col gap-4 reveal">
              <h2 className=" text-sm md:text-base text-muted-foreground ">
              // {language === "en" ? "Focus Areas" : "მიმართულებები"}
            </h2>
              <span className=" text-4xl md:text-5xl leading-tight text-foreground">
                {t.creativeExpertiseTitle}
              </span>
              <p className=" not-italic text-sm md:text-base text-muted-foreground mt-4 max-w-md leading-relaxed">
                {t.creativeExpertiseQuote}
              </p>

              {/* METRIC CARDS */}
              <div className="flex flex-col gap-6 mt-10">
                {/* Stat 1 - Experience */}
                <div className="border border-border p-8 bg-card flex flex-col justify-between hover:border-foreground/40 transition-colors">
                  <span className="text-sm font-semibold text-foreground/80 mb-6">
                    {language === "en" ? "Professional Experience" : "წლიანი პროფესიონალური გამოცდილება"}
                  </span>
                  <div className="flex items-baseline mt-auto">
                    <Counter targetValue={4} />
                    <span className="font-bold text-5xl md:text-6xl tracking-tighter text-foreground">+</span>
                  </div>
                </div>

                {/* Stat 2 - Projects */}
                <div className="border border-border p-8 bg-card flex flex-col justify-between hover:border-foreground/40 transition-colors">
                  <span className="text-sm font-semibold text-foreground/80 mb-6">
                    {language === "en" ? "Successful Projects" : "წარმატებული პროექტი"}
                  </span>
                  <div className="flex items-baseline mt-auto">
                    <Counter targetValue={10} />
                    <span className="font-bold text-5xl md:text-6xl tracking-tighter text-foreground">+</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 reveal">
              <ExpertiseAccordion list={t.servicesList} />
            </div>
          </div>
        </div>
      </section>
  );
}

function ExpertiseAccordion({ list }: { list: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-4">
      {list.map((item, i) => (
        <div key={i} className="border-b border-border/40 pb-4">
          <button 
            className="w-full flex justify-between items-center text-left py-2 hover:text-foreground transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-xl md:text-2xl font-semibold text-foreground">{item.title}</span>
            <span className="text-2xl">{openIndex === i ? '−' : '+'}</span>
          </button>
          <div 
            className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="overflow-hidden">
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
