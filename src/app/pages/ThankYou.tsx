import { CheckCircle } from "lucide-react";
import { PageHero, SectionBackground } from "../components/InnerPageUI";
import { siteContent } from "../content/siteContent";

export function ThankYou() {
  const content = siteContent.thankYou;

  return (
    <div className="overflow-hidden bg-[#FFFDF8]">
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        backgroundType="contact"
      />

      <SectionBackground className="py-20 sm:py-24 lg:py-[110px]" variant="cream" backgroundType="contact">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(184,135,92,0.38)] bg-white text-[#B8875C] shadow-[0_14px_30px_rgba(42,30,23,0.08)]">
            <CheckCircle size={40} strokeWidth={1.5} />
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl leading-tight text-[#1E1E1E] sm:text-4xl">
            {content.titlePrefix} <span className="text-[#B8875C]">{content.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-[1.75] text-[#4A403A]">
            {content.text}
          </p>
        </div>
      </SectionBackground>
    </div>
  );
}
