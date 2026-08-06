import { useState, useRef, useEffect } from "react";

// Global Georgian Mtavruli Unicode mapper
export const m = (text: any) => {
  if (!text || typeof text !== 'string') return text;
  return text.split('').map((char: string) => {
    const code = char.charCodeAt(0);
    if (code >= 0x10D0 && code <= 0x10FA) return String.fromCharCode(code + 0x0BC0);
    return char;
  }).join('');
};

// Counting animation utility for Metric Marvels
export function Counter({ targetValue, suffix = "" }: { targetValue: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, targetValue]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}
export function Marquee({ children, reverse = false }: { children: React.ReactNode, reverse?: boolean }) {
  return (
    <div className="overflow-hidden w-full py-2 text-xs uppercase tracking-widest font-semibold marquee-hover-pause">
      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <div className="flex shrink-0 items-center gap-6 px-3">{children}</div>
        <div className="flex shrink-0 items-center gap-6 px-3">{children}</div>
      </div>
    </div>
  );
}
