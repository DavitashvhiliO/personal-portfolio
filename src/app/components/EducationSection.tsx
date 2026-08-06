import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export function EducationSection() {
  const { language, data } = useLanguage();
  const t = translations[language];

  return (
    <section id="education" className="py-16 md:py-24 border-t border-border">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-16 border-b border-border/80 pb-6">
            <h2 className=" text-sm md:text-base text-muted-foreground ">
              // {language === "en" ? "Education & Languages" : "განათლება და ენები"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Education (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className=" text-sm md:text-base font-semibold text-muted-foreground border-b border-border pb-2 ">
                {language === "en" ? "Education" : "განათლება"}
              </span>
              <div className="relative border-l border-border pl-6 ml-3 space-y-8 py-2">
                {data?.education?.items?.map((item, i) => (
                  <div key={i} className="relative group reveal">
                    {/* Timeline dot */}
                    <span className="absolute -left-[31px] top-1.5 size-2.5 rounded-full border border-foreground bg-background group-hover:bg-foreground transition-colors duration-300" />
                    
                    <div className="flex flex-col gap-1 hover:pl-2 transition-all duration-300">
                      <h4 className=" text-sm md:text-base font-bold text-foreground mt-2">
                        {item.degree}
                      </h4>
                      <span className="text-xs md:text-sm text-muted-foreground mt-1">
                        {item.institution}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Languages (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className=" text-sm md:text-base font-semibold text-muted-foreground border-b border-border pb-2 ">
                {language === "en" ? "Languages" : "ენები"}
              </span>
              <div className="flex flex-col gap-6">
                {data?.languages?.map((lang, i) => {
                  let pct = "100%";
                  const langName = lang.name.toLowerCase();
                  if (langName.includes("georgian") || langName.includes("ქართული")) {
                    pct = "100%";
                  } else if (langName.includes("english") || langName.includes("ინგლისური")) {
                    pct = "75%";
                  } else if (langName.includes("russian") || langName.includes("რუსული")) {
                    pct = "35%";
                  } else {
                    pct = "50%";
                  }
                  
                  return (
                    <div key={i} className="flex flex-col gap-2 p-5 border border-border bg-card/20 hover:border-foreground/30 transition-colors duration-300 reveal">
                      <div className="flex justify-between items-baseline">
                        <span className=" text-sm font-bold text-foreground">
                          {lang.name}
                        </span>
                        <span className=" text-[10px] md:text-xs text-muted-foreground">
                          {lang.level}
                        </span>
                      </div>
                      {/* Progress Bar indicator */}
                      <div className="h-1.5 w-full bg-border/40 overflow-hidden mt-1">
                        <div 
                          className="h-full bg-foreground transition-all duration-1000 ease-out" 
                          style={{ width: pct }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
