import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
// Tools Logos
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

export function SkillsSection({ isDarkMode }: { isDarkMode: boolean }) {
  const { language, data } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-16 border-b border-border/80 pb-6">
            <h2 className=" text-sm md:text-base text-muted-foreground ">
              // {language === "en" ? "Skills & Tools" : "უნარები და ხელსაწყოები"}
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {/* Skills Row */}
            <div className="flex flex-col gap-4">
              <span className=" text-sm md:text-base font-semibold text-muted-foreground border-b border-border pb-2">
                {t.skills}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {data?.skills?.map((skill, i) => (
                  <div key={i} className="border border-border p-6 bg-card/40 hover:border-foreground/30 transition-colors duration-300">
                    <h3 className=" text-base font-bold text-foreground border-b border-border/60 pb-2 mb-3">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.text.split(", ").map((tag, j) => (
                        <span key={j} className="group text-xs md:text-xs border border-border/80 px-2.5 py-1.5 bg-background text-foreground hover:bg-foreground hover:text-background transition-colors flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-foreground/40 group-hover:bg-background rounded-full shrink-0 transition-colors"></span>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Row */}
            <div className="flex flex-col gap-4 mt-8">
              <span className=" text-sm md:text-base font-semibold text-muted-foreground border-b border-border pb-2 ">
                {language === "en" ? "Tools" : "ხელსაწყოები"}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: 'Figma', icon: FigmaIcon },
                  { name: 'Adobe Creative Cloud', icon: AdobeCCIcon },
                  { name: 'Miro', icon: MiroIcon },
                  { name: 'Framer', icon: FramerBlackIcon },
                  { name: 'ProtoPie', icon: ProtoPieIcon },
                  { name: 'Meta Business Suite', icon: MetaIcon },
                  { name: 'Google Ads', icon: GoogleAdsIcon },
                  { name: 'Google Analytics', icon: GoogleAnalyticsIcon },
                  { name: 'HTML5', icon: HTMLIcon },
                  { name: 'CSS3', icon: CSSIcon },
                  { name: 'Tailwind CSS', icon: TailwindIcon },
                  { name: 'Bootstrap', icon: BootstrapIcon },
                  { name: 'JavaScript', icon: JavascriptIcon },
                  { name: 'Claude', icon: ClaudeIcon },
                  { name: 'Gemini', icon: GeminiIcon },
                  { name: 'Google AI Studio', icon: GoogleAIStudioIcon },
                  { name: 'Antigravity', icon: AntigravityIcon },
                  { name: 'Stitch', icon: StitchIcon },
                  { name: 'Lovable', icon: LovableIcon },
                  { name: 'Bolt.new', icon: BoltIcon },
                  { name: 'Jira', icon: JiraIcon },
                  { name: 'Trello', icon: TrelloIcon },
                  { name: 'Microsoft Office', icon: MicrosoftOfficeIcon },
                  { name: 'Google Workspace', icon: GoogleWorkspaceIcon }
                ].map((tool, i) => (
                  <div key={i} className="group text-sm tracking-wider border border-border/30 hover:border-foreground/40 px-4 py-2 bg-background text-foreground transition-colors flex items-center gap-2.5 w-fit cursor-none ">
                    <img src={tool.icon} alt={tool.name} loading="lazy" className={`w-5 h-5 object-contain ${(tool.name === 'Bolt.new' || tool.name === 'Framer') && isDarkMode ? 'invert' : ''}`} />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
