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

  const navLinks = (
    <>
      <a href="#about" className=" text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
        {language === "en" ? "About" : "შესახებ"}
      </a>
      <a href="#projects" className=" text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
        {language === "en" ? "Selected Works" : "გამორჩეული ნამუშევრები"}
      </a>
      <a href="#experience" className=" text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
        {language === "en" ? "Career Roadmap" : "კარიერული გზამკვლევი"}
      </a>
      <a href="#skills" className=" text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
        {language === "en" ? "Skills & Tools" : "უნარები და ინსტრუმენტები"}
      </a>
      <a href="#education" className=" text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
        {language === "en" ? "Education & Languages" : "განათლება და ენები"}
      </a>
      <a href="#expertise" className=" text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
        {language === "en" ? "What I Do" : "რას ვაკეთებ"}
      </a>
      {/* <a href="#testimonials" className=" text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
        {language === "en" ? "Applause Corner" : "გამოხმაურებები"}
      </a> */}
      <a href="#contact" className=" text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
        {language === "en" ? "Contact" : "კონტაქტი"}
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#hero" className="hover:opacity-75 transition-opacity">
          <img src={logoSvg} alt="Logo" className="h-7 w-auto" />
        </a>

        {/* Nav links (Desktop) */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          {navLinks}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="h-8 px-3 text-[10px] border border-border hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            {language === "en" ? "KA" : "EN"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="size-8 border border-border hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
            aria-label="Toggle monochrome scheme"
          >
            {isDarkMode ? <Sun className="size-4 shrink-0" /> : <Moon className="size-4 shrink-0" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu FAB */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed bottom-6 right-6 z-[100] size-14 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 flex items-center justify-center transition-transform active:scale-95"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X className="size-6 shrink-0" /> : <Menu className="size-6 shrink-0" />}
      </button>

      {/* Mobile Menu Popup */}
      <div className={`md:hidden fixed right-6 bottom-24 w-64 z-[90] overflow-hidden transition-all duration-300 ease-in-out transform origin-bottom-right ${isMobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <nav className="flex flex-col p-6 gap-4 bg-card border border-border shadow-2xl rounded-2xl" onClick={() => setIsMobileMenuOpen(false)}>
          {navLinks}
        </nav>
      </div>
    </header>
  );
}
