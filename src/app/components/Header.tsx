import { Sun, Moon, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
// Use whatever logo path is correct; assuming Antigravity.svg or logo.svg
import logoSvg from "@/assets/logo.svg";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
}

export function Header({ isDarkMode, setIsDarkMode, isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  const { language, toggleLanguage } = useLanguage();

  const links = [
    { id: "about", en: "About", ka: "შესახებ" },
    { id: "projects", en: "Selected Works", ka: "გამორჩეული ნამუშევრები" },
    { id: "experience", en: "Career Roadmap", ka: "კარიერული გზამკვლევი" },
    { id: "skills", en: "Skills & Tools", ka: "უნარები და ინსტრუმენტები" },
    { id: "education", en: "Education & Languages", ka: "განათლება და ენები" },
    { id: "expertise", en: "What I Do", ka: "რას ვაკეთებ" },
    // { id: "testimonials", en: "Applause Corner", ka: "გამოხმაურებები" },
    { id: "contact", en: "Contact", ka: "კონტაქტი" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#hero" className="hover:opacity-75 transition-opacity">
          <img src={logoSvg} alt="Logo" className="h-7 w-auto" />
        </a>

        {/* Nav links (Desktop) */}
        <nav className="hidden lg:flex gap-3 xl:gap-6">
          {links.map(link => (
            <a key={link.id} href={`#${link.id}`} className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3">
              {language === "en" ? link.en : link.ka}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="min-h-[44px] min-w-[44px] px-4 text-xs border border-border hover:bg-foreground hover:text-background transition-colors flex items-center justify-center shrink-0"
          >
            {language === "en" ? "KA" : "EN"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="size-11 border border-border hover:bg-foreground hover:text-background transition-colors flex items-center justify-center shrink-0"
            aria-label="Toggle monochrome scheme"
          >
            {isDarkMode ? <Sun className="size-4 shrink-0" aria-hidden="true" /> : <Moon className="size-4 shrink-0" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[80] bg-background/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Bottom Sheet */}
      <div 
        className={`lg:hidden fixed inset-x-0 bottom-0 z-[90] bg-card border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl overflow-hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center pt-10 pb-28 px-6 gap-6" onClick={() => setIsMobileMenuOpen(false)}>
          {links.map(link => (
            <a key={link.id} href={`#${link.id}`} className="text-xl md:text-2xl font-bold text-foreground hover:text-muted-foreground transition-colors text-center w-full">
              {language === "en" ? link.en : link.ka}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu FAB (Centered) */}
      <div className="lg:hidden fixed bottom-6 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="pointer-events-auto size-14 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 flex items-center justify-center transition-transform active:scale-95"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="size-6 shrink-0" aria-hidden="true" /> : <Menu className="size-6 shrink-0" aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
