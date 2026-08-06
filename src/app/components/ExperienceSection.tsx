import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export function ExperienceSection() {
  const { language, data } = useLanguage();
  const t = translations[language];
  const experiences = data?.workExperience || [];

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-16 border-b border-border/80 pb-6">
            <h2 className=" text-sm md:text-base text-muted-foreground ">
              // {language === "en" ? "Career Roadmap" : "კარიერული გზა"}
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {experiences.map((job) => (
              <div
                key={job.id}
                className="flex flex-col gap-4 pb-12 border-b border-border/60 last:border-0 last:pb-0 reveal group"
              >
                {/* Meta Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                  <div>
                    <h4 className=" text-xl font-bold text-foreground">
                      {job.title}
                    </h4>
                    <div className="text-sm text-foreground/80  mt-1 flex flex-wrap gap-1">
                      <span>{job.company}</span>
                      {job.jobInLinkText && <span className="text-muted-foreground">({job.jobInLinkText})</span>}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-baseline gap-3 shrink-0 mt-2 md:mt-0">
                    <span className=" text-xs md:text-sm text-muted-foreground">
                      {job.date}
                    </span>
                    <span className=" text-[10px] md:text-xs text-muted-foreground bg-card border border-border px-1.5 py-0.5">
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Description & Buttons */}
                <div className="flex flex-col max-w-4xl gap-5">
                  <ul className={`space-y-2.5 text-sm text-muted-foreground leading-relaxed ${job.desc?.length > 1 ? "list-disc pl-4" : ""}`}>
                    {job.desc?.map((descLine, i) => (
                      <li key={i}>{descLine}</li>
                    ))}
                  </ul>
                  
                  {/* Custom Buttons */}
                  {job.id === 'job1' && (
                    <div className="flex flex-wrap gap-3 mt-1">
                      <a href="https://nsdi.gov.ge/ka" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm tracking-widest border border-border/80 hover:bg-foreground hover:text-background transition-colors text-foreground">
                        nsdi.gov.ge ↗
                      </a>
                      <a href="https://www.napr.gov.ge/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm tracking-widest border border-border/80 hover:bg-foreground hover:text-background transition-colors text-foreground">
                        napr.gov.ge ↗
                      </a>
                    </div>
                  )}
                  {job.id === 'job2' && (
                    <div className="flex flex-wrap gap-3 mt-1">
                      <a href="https://www.facebook.com/profile.php?id=61576642025771" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm tracking-widest border border-border/80 hover:bg-foreground hover:text-background transition-colors text-foreground">
                        Dento-Art ↗
                      </a>
                    </div>
                  )}
                  {job.id === 'job3' && (
                    <div className="flex flex-wrap gap-3 mt-1">
                      <a href="https://www.facebook.com/profile.php?id=61589685841374" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm tracking-widest border border-border/80 hover:bg-foreground hover:text-background transition-colors text-foreground">
                        DBEF ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
