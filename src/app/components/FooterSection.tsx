import { useState } from "react";
import { Copy, Check, ExternalLink, Download, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { m } from "../utils";

export function FooterSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("davitashviliotari@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("+995599711037");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <>
      <section id="contact" className="py-16 md:py-24 border-t border-border">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left H2 text (60%) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <h2 className=" text-sm md:text-base text-muted-foreground ">
              // {language === "en" ? "Inquiries & Contact" : "კონტაქტი & კითხვები"}
            </h2>
                <span className=" text-5xl md:text-7xl font-bold text-foreground leading-[1.0]">
                  {t.haveProject} <br />
                  <span className="font-normal text-muted-foreground/80">
                    {language === "en" ? "Start a project." : "დაიწყე პროექტი."}
                  </span>
                </span>
              </div>

              {/* Availability dates */}
              <div className="flex flex-col gap-2 pt-6">
                <span className=" text-xs text-muted-foreground">
                  {language === "en" ? "Availability" : "ხელმისაწვდომი სტატუსი"}
                </span>
                <span className="text-sm font-semibold">
                  ● {t.availableFromLabel} (2026)
                </span>
              </div>
            </div>

            {/* Right Booking details (40%) -> Now Email details */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8 border border-border p-8 bg-card">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "en" 
                    ? "Let's turn your vision into a living digital product. Whether you're launching a new venture, designing a complex web system, or looking to scale your user experience — skip the scheduling and write to me directly at my email address. I will get back to you within 24 hours."
                    : "თუ ახალ პროექტს იწყებ ან არსებულის გაუმჯობესება გსურს, მომწერე შენი იდეის შესახებ. ერთად ვიმუშაოთ და ვაქციოთ ის თანამედროვე ციფრულ პროდუქტად."
                  }
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:davitashviliotari@gmail.com"
                  className="w-full block text-center py-4 bg-foreground text-background  text-xs hover:bg-muted-foreground transition-all duration-300 border border-transparent"
                >
                  {language === "en" ? "Write an Email ↗" : "მომწერე ელ-ფოსტაზე ↗"}
                </a>
                
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-3 py-3 border border-border text-xs hover:border-foreground transition-colors bg-background"
                >
                  {copiedEmail ? <Check className="size-4 text-green-500" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                  <span>{copiedEmail ? (language === "en" ? "Copied" : "დაკოპირებულია") : (language === "en" ? "Copy Email Address" : "დააკოპირე")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-auto border-t border-border bg-background py-16">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
          {/* Big Display Name */}
          <div className="w-full text-center border-b border-border/60 pb-8 reveal">
            <h2 className=" font-bold text-6xl md:text-[8vw] tracking-tighter text-foreground leading-none">
              {t.name}
            </h2>
          </div>

          {/* Footer Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left py-4 reveal">
            <div className="flex flex-col gap-2">
              <span className=" text-xs text-muted-foreground">
                {language === "en" ? "Direct Email" : "ელ-ფოსტა"}
              </span>
              <button
                onClick={handleCopyEmail}
                className="group flex items-center justify-between border border-border px-4 py-3 bg-card  text-xs text-foreground hover:border-foreground/50 transition-colors text-left"
              >
                <span className="truncate">davitashviliotari@gmail.com</span>
                {copiedEmail ? <Check className="size-4 text-green-500 shrink-0 ml-2" aria-hidden="true" /> : <Copy className="size-4 shrink-0 opacity-40 group-hover:opacity-80 transition-opacity ml-2" aria-hidden="true" />}
              </button>
              {copiedEmail && <span className=" text-xs text-green-500">{t.emailCopied}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <span className=" text-xs text-muted-foreground">
                {language === "en" ? "Location" : "ლოკაცია"}
              </span>
              <div className="border border-border px-4 py-3 bg-card  text-xs text-foreground flex items-center justify-between">
                <span>{language === "en" ? "Tbilisi, Georgia" : "თბილისი, საქართველო"}</span>
                <MapPin className="size-4 shrink-0 opacity-40" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Social Links List */}
          <div className="flex flex-wrap justify-between items-center gap-6 border-t border-border/60 pt-8 reveal">
            <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
              <a
                href="https://dribbble.com/DavitashviliO"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Dribbble
              </a>
              <a
                href="https://www.behance.net/DavitashviliO"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Behance
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <span className=" text-xs text-muted-foreground">
              © 2026 Otar Davitashvili — All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
