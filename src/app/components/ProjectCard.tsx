import type { FeaturedProject } from "../types";

interface ProjectCardProps {
  project: FeaturedProject;
  isDarkMode: boolean;
  onClick: (project: FeaturedProject) => void;
}

export function ProjectCard({ project, isDarkMode, onClick }: ProjectCardProps) {
  const cardClass = `group relative rounded-sm p-5 transition-all duration-300 cursor-pointer ${isDarkMode ? "hover:bg-[#1a1e27] border border-transparent hover:border-[#2a2f3a]" : "hover:bg-gray-50 border border-transparent hover:border-gray-200"}`;

  return (
    <article className={`reveal ${cardClass}`} onClick={() => onClick(project)} role="button" tabIndex={0}>
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex-1">
          <h3 className={`font-medium text-base leading-5 tracking-[0.08px] mb-2 ${isDarkMode ? "text-white" : "text-[#2e2e48]"}`}>
        {project.title}
      </h3>

      <div className="flex flex-wrap gap-1 items-center mb-2">
        <span className={`text-sm leading-5 tracking-[0.08px] ${isDarkMode ? "text-[#5eead4]" : "text-[#0d9488]"}`}>
          {project.date}
        </span>
        <div className={`h-[12px] w-0 border-l ${isDarkMode ? "border-gray-600" : "border-[#79819a]"}`}></div>
        
        {project.companyLink ? (
          <a
            href={project.companyLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`text-sm leading-5 tracking-[0.08px] transition-all duration-[600ms] ${isDarkMode ? "text-[#5eead4] hover:text-[#99f6e4]" : "text-[#0d9488] hover:text-[#0f766e]"}`}
          >
            {project.company}
          </a>
        ) : (
          <span className={`text-sm leading-5 tracking-[0.08px] ${isDarkMode ? "text-gray-200" : "text-[#262626]"}`}>
            {project.company}
          </span>
        )}
      </div>

      <ul className={`list-disc text-sm leading-5 tracking-[0.06px] space-y-2 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
        {project.desc?.slice(0, 2).map((desc, i) => (
          <li key={i} className="ml-5">{desc}</li>
        ))}
      </ul>
      {((project.desc?.length || 0) > 2 || project.caseStudyText) && (
        <div className={`mt-3 text-sm font-medium flex items-center gap-1 ${isDarkMode ? "text-[#93c5fd]" : "text-[#1e40af]"}`}>
          Read Full <span>&rarr;</span>
        </div>
      )}
        </div>

        {/* Thumbnail Images */}
        {project.thumbnails && project.thumbnails.length > 0 && (
          <div className="w-full sm:w-48 shrink-0 flex items-center justify-center relative h-32 sm:h-full min-h-[120px] mt-4 sm:mt-0">
             {project.thumbnails[0] && (
                <img 
                  src={project.thumbnails[0]} 
                  alt="Thumbnail 1"
                  className={`absolute w-32 h-24 object-cover rounded-lg shadow-lg border-2 ${isDarkMode ? "border-[#1a1e27]" : "border-white"} rotate-[-6deg] z-10 transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:-translate-x-4 group-hover:scale-110`}
                />
             )}
             {project.thumbnails[1] && (
                <img 
                  src={project.thumbnails[1]} 
                  alt="Thumbnail 2"
                  className={`absolute w-32 h-24 object-cover rounded-lg shadow-lg border-2 ${isDarkMode ? "border-[#1a1e27]" : "border-white"} rotate-[6deg] z-20 transition-transform duration-500 group-hover:rotate-[12deg] group-hover:translate-x-4 group-hover:scale-110`}
                />
             )}
          </div>
        )}
      </div>
    </article>
  );
}
