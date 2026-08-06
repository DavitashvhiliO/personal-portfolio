import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="testimonials" className="py-24 border-t border-border bg-card/20">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-border/80 pb-6">
            <h2 className=" text-sm md:text-base text-muted-foreground ">
              // {language === "en" ? "Client Reviews" : "შეფასებები"}
            </h2>
          </div>

          <div className="reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.testimonialsList.slice(0, 4).map((item, i) => {
                const rotates = ["rotate-[1.5deg]", "rotate-[-1.5deg]", "rotate-[-1deg]", "rotate-[1deg]"];
                const rotateClass = rotates[i % rotates.length];
                
                return (
                  <div 
                    key={i} 
                    className={`border border-border p-6 bg-background flex flex-col justify-between h-72 transition-all duration-300 hover:rotate-0 hover:shadow-lg hover:border-foreground/30 ${rotateClass}`}
                  >
                    <div className="text-left  text-4xl text-border/20 select-none">“</div>
                    <p className="text-sm text-foreground/90 leading-relaxed  -mt-4 italic">
                      "{item.quote}"
                    </p>
                    <div className="border-t border-border/80 pt-4 mt-4 flex flex-col items-start">
                      <span className="font-semibold text-xs text-foreground">{item.name}</span>
                      <span className="text-[10px]  text-muted-foreground mt-0.5">{item.role}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
}
