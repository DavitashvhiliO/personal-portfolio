import type { WorkExperience } from "../types";

interface ExperienceCardProps {
  job: WorkExperience;
  isDarkMode: boolean;
  onClick: (job: WorkExperience) => void;
}

export function ExperienceCard({ job, isDarkMode, onClick }: ExperienceCardProps) {
  const cardClass = `group relative rounded-sm p-5 transition-all duration-300 cursor-pointer ${isDarkMode ? "hover:bg-[#1a1e27] border border-transparent hover:border-[#2a2f3a]" : "hover:bg-gray-50 border border-transparent hover:border-gray-200"}`;

  return (
    <article className={`reveal ${cardClass}`} onClick={() => onClick(job)} role="button" tabIndex={0}>
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex-1">
          <h3 className={`font-medium text-base leading-5 tracking-[0.08px] mb-2 ${isDarkMode ? "text-white" : "text-[#2e2e48]"}`}>
        {job.title}
      </h3>

      <div className="flex flex-wrap gap-1 items-center mb-2">
        <span className={`text-sm leading-5 tracking-[0.08px] ${isDarkMode ? "text-[#5eead4]" : "text-[#0d9488]"}`}>
          {job.date}
        </span>
        <div className={`h-[12px] w-0 border-l ${isDarkMode ? "border-gray-600" : "border-[#79819a]"}`}></div>
        
        {job.companyLink ? (
          <a
            href={job.companyLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`text-sm leading-5 tracking-[0.08px] transition-all duration-[600ms] ${isDarkMode ? "text-[#5eead4] hover:text-[#99f6e4]" : "text-[#0d9488] hover:text-[#0f766e]"}`}
          >
            {job.companyLinkText || job.company}
          </a>
        ) : (
          <span className={`text-sm leading-5 tracking-[0.08px] ${isDarkMode ? "text-[#5eead4]" : "text-[#0d9488]"}`}>
            {job.company}
          </span>
        )}

        {job.jobIn && (
          <>
            <span className={`text-xs leading-5 tracking-[0.06px] ${isDarkMode ? "text-gray-300" : "text-[#262626]"}`}>
              {job.jobIn}
            </span>
            {job.jobInLink ? (
              <a
                href={job.jobInLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`text-xs leading-5 tracking-[0.06px] transition-all duration-[600ms] ${isDarkMode ? "text-[#5eead4] hover:text-[#99f6e4]" : "text-[#0d9488] hover:text-[#0f766e]"}`}
              >
                {job.jobInLinkText}
              </a>
            ) : (
              <span className={`text-xs leading-5 tracking-[0.06px] ${isDarkMode ? "text-gray-300" : "text-[#262626]"}`}>
                {job.jobInLinkText}
              </span>
            )}
          </>
        )}

        <div className={`h-[12px] w-0 border-l ${isDarkMode ? "border-gray-600" : "border-[#79819a]"}`}></div>
        <span className={`text-sm leading-5 tracking-[0.08px] ${isDarkMode ? "text-gray-400" : "text-[#79819a]"}`}>
          {job.type}
        </span>
      </div>

      <ul className={`list-disc text-sm leading-5 tracking-[0.06px] space-y-2 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
        {job.desc?.slice(0, 2).map((desc, i) => (
          <li key={i} className="ml-5">{desc}</li>
        ))}
      </ul>
      {((job.desc?.length || 0) > 2 || job.caseStudyText) && (
        <div className={`mt-3 text-sm font-medium flex items-center gap-1 ${isDarkMode ? "text-[#93c5fd]" : "text-[#1e40af]"}`}>
          Read Full <span>&rarr;</span>
        </div>
      )}
        </div>

        {/* Thumbnail Images */}
        {job.thumbnails && job.thumbnails.length > 0 && (
          <div className="w-full sm:w-48 shrink-0 flex items-center justify-center relative h-32 sm:h-full min-h-[120px] mt-4 sm:mt-0">
             {job.thumbnails[0] && (
                <img 
                  src={job.thumbnails[0]} 
                  alt="Thumbnail 1"
                  className={`absolute w-32 h-24 object-cover rounded-lg shadow-lg border-2 ${isDarkMode ? "border-[#1a1e27]" : "border-white"} rotate-[-6deg] z-10 transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:-translate-x-4 group-hover:scale-110`}
                />
             )}
             {job.thumbnails[1] && (
                <img 
                  src={job.thumbnails[1]} 
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
