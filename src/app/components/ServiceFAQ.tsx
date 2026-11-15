import { useState } from "react";
import { ChevronDown, Diamond, HelpCircle, ArrowRight } from "lucide-react";
import { GoldDivider, SectionBackground, SectionLabel } from "./InnerPageUI";
import { siteContent } from "../content/siteContent";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQVariant = "services" | "international" | "india" | "property";

const FAQ_CONTENT = siteContent.faq;

function FAQRow({ question, answer, isOpen, onToggle }: FAQItem & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="group border-b border-[rgba(184,135,92,0.22)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 py-6 text-left"
      >
        <span className="font-['Playfair_Display'] text-xl leading-snug text-[#1E1E1E] transition-colors group-hover:text-[#9F7048] sm:text-2xl">
          {question}
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(184,135,92,0.34)] bg-[#FFFDF8] text-[#B8875C]">
          <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 pr-0 sm:pr-16">
          <p className="text-base leading-[1.75] text-[#4A403A]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function ServiceFAQ({ variant = "services" }: { variant?: FAQVariant }) {
  const content = FAQ_CONTENT[variant];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <SectionBackground className="pt-14 pb-20 sm:pt-[67px] sm:pb-24 lg:pt-[76px] lg:pb-[108px]" variant="ivory" backgroundType="document">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionLabel>{content.eyebrow}</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl lg:text-[60px]">
              {content.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-[#B8875C]">{content.title.split(" ").slice(-2).join(" ")}</span>
            </h2>
            <GoldDivider className="my-6 justify-start" />
            <p className="max-w-xl text-lg leading-[1.75] text-[#4A403A]">{content.intro}</p>
            <div className="mt-8 flex items-center gap-4 text-[#B8875C]">
              <HelpCircle size={34} strokeWidth={1.5} />
              <div className="h-px flex-1 bg-gradient-to-r from-[#B8875C] to-transparent" />
              <Diamond size={12} className="fill-[#B8875C]/20" />
            </div>
          </div>

          <div className="border-y border-[rgba(184,135,92,0.28)]">
            {content.items.map((item, index) => (
              <FAQRow key={item.question} {...item} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
            ))}
          </div>
        </div>
      </div>
    </SectionBackground>
  );
}
