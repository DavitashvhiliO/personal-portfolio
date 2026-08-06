import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { m } from "../App";
import mockupImg from "@/assets/profile_2.jpg";

export function ProjectsSection({ setSelectedCaseStudy }: { setSelectedCaseStudy: any }) {
  const { language, data } = useLanguage();
  const t = translations[language];
  const projects = data?.featuredProjects || [];

  return (
    <section id="projects" className="py-24 border-t border-border bg-card/20">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-border/80 pb-6">
            <h2 className=" text-sm md:text-base text-muted-foreground ">
              // {language === "en" ? "Selected Works" : "ნამუშევრები"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {projects.map((project, index) => {
              const placeholderImages = [
                "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
              ];
              const mockupImg = placeholderImages[index % placeholderImages.length];

              // Define status badge styling
              let badgeClass = "bg-emerald-600 text-white";
              if (project.status === "Optimizing" || project.status === "მიმდინარეობს გაუმჯობესება") {
                badgeClass = "bg-blue-600 text-white";
              } else if (project.status === "In Development" || project.status === "დეველოპმენტის პროცესში") {
                badgeClass = "bg-amber-500 text-black";
              }

              return (
                <div key={project.id} className="reveal">
                  <div
                    className="group bg-card/20 p-4 hover:bg-card transition-colors duration-500 flex flex-col gap-6 h-full"
                  >
                    {/* Image Top */}
                    <div className="w-full aspect-video relative overflow-hidden bg-muted shrink-0">
                      <img 
                        src={project.image || mockupImg} 
                        alt={project.company} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                      {/* Status Badge */}
                      {project.status && (
                        <span className={`absolute top-3 left-3  text-[9px] px-2 py-1 font-semibold shadow-md ${badgeClass}`}>
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Content Bottom */}
                    <div className="flex flex-col flex-1">

                      
                      <h4 className=" text-2xl text-foreground font-bold mb-4">
                        {project.company}
                      </h4>
                      
                      <div className="h-[60px] mb-4">
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {project.desc?.join(' ')}
                        </p>
                      </div>

                      {/* Subtle Case Study Link right below bullets */}
                      <button
                        disabled
                        className="text-left font-bold text-[9px] text-foreground/50 border-b border-foreground/30 transition-colors w-fit mb-8 pb-0.5 inline-flex items-center gap-1.5 cursor-not-allowed group/btn"
                      >
                        <span>
                          {language === "en" ? "Case Study — Coming Soon" : "ქეისის მიმოხილვა — მალე დაემატება"}
                        </span>
                        <span className="transition-transform">→</span>
                      </button>

                      {/* Full-width Live Site Button at the bottom */}
                      <a
                        href={project.companyLink || "https://otardavitashvili.com"}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-auto w-full block text-center py-3.5 bg-foreground text-background border border-foreground text-[10px] transition-colors duration-500 ease-in-out ${project.isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-background hover:text-foreground'}`}
                      >
                        {project.domain || "Visit Site"} ↗
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
