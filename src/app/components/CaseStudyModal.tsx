import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import type { WorkExperience, FeaturedProject } from "../types";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: WorkExperience | FeaturedProject | null;
  isDarkMode: boolean;
}

export function CaseStudyModal({ isOpen, onClose, data, isDarkMode }: CaseStudyModalProps) {
  if (!data) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-4xl h-[85vh] p-0 overflow-hidden flex flex-col bg-background border-border text-foreground">
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <DialogTitle className="text-2xl font-bold font-display">
            {data.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {data.company} • {data.date}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 p-6">
          <div className="flex flex-col gap-8">
            {/* Case Study Text Content */}
            <div className={`prose max-w-none ${isDarkMode ? "prose-invert" : ""}`}>
              {data.caseStudyText ? (
                <div dangerouslySetInnerHTML={{ __html: data.caseStudyText }} className="whitespace-pre-wrap leading-relaxed" />
              ) : (
                <ul className="list-disc pl-5 space-y-2">
                  {data.desc?.map((d, i) => (
                    <li key={i} className="text-sm leading-6 text-foreground/80">{d}</li>
                  ))}
                  {'descSub' in data && data.descSub && data.descSub.map((d, i) => (
                    <li key={`sub-${i}`} className="text-sm leading-6 mt-2 text-foreground/80">{d}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Case Study Images */}
            {data.caseStudyImages && data.caseStudyImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {data.caseStudyImages?.map((img, i) => (
                  <div key={i} className="rounded-none overflow-hidden border border-border">
                    <img 
                      src={img} 
                      alt={`${data.title} case study image ${i + 1}`} 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
