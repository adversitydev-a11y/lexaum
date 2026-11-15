import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, ArrowRight } from "lucide-react";
import { siteContent } from "../content/siteContent";

function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative py-24 bg-[#FFFDF8] overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-10 bg-[#B8875C]" />
          <span className="text-[#B8875C] text-xs tracking-[0.2em] uppercase">{eyebrow}</span>
          <div className="h-px w-10 bg-[#B8875C]" />
        </div>
        <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2A1E17] mb-5 leading-tight">{title}</h1>
        <p className="text-[#3D3D3D] text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
        >
          {siteContent.faqPage.hero.cta}
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

const FAQ_DATA = siteContent.faqPage.groups;

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-lg transition-[transform,background-color,color,border-color] duration-200 ease-out ${open ? "border-[rgba(184,135,92,0.4)] bg-[rgba(184,135,92,0.04)]" : "border-[rgba(184,135,92,0.15)] bg-[#FFFFFF]"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`transition-colors ${open ? "text-[#D2A679]" : "text-[#2A1E17]"} text-sm leading-relaxed`}>
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#B8875C] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="h-px bg-[rgba(184,135,92,0.15)] mb-4" />
          <p className="text-[#3D3D3D] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <div>
      <PageHero
        eyebrow={siteContent.faqPage.hero.eyebrow}
        title={siteContent.faqPage.hero.title}
        subtitle={siteContent.faqPage.hero.subtitle}
      />

      <section className="py-20 bg-[#FFFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {FAQ_DATA.map(({ category, items, cta }) => (
              <div key={category}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-[rgba(184,135,92,0.15)]" />
                  <h2 className="font-['Playfair_Display'] text-xl text-[#B8875C] whitespace-nowrap">
                    {category}
                  </h2>
                  <div className="h-px flex-1 bg-[rgba(184,135,92,0.15)]" />
                </div>
                <div className="space-y-3">
                  {items.map(({ q, a }) => (
                    <AccordionItem key={q} question={q} answer={a} />
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-5 text-[#B8875C] hover:text-[#D2A679] text-sm transition-colors"
                >
                  {cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-[#FFFDF8] border-t border-[rgba(184,135,92,0.15)]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="h-px w-12 bg-[#B8875C] mx-auto mb-6" />
          <h2 className="font-['Playfair_Display'] text-2xl text-[#2A1E17] mb-3">{siteContent.faqPage.finalCta.title}</h2>
          <p className="text-[#3D3D3D] text-sm mb-7">{siteContent.faqPage.finalCta.text}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]">
              {siteContent.faqPage.finalCta.primary} <ArrowRight size={14} />
            </Link>
            <a href={siteContent.faqPage.finalCta.phoneHref} className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded border border-[rgba(184,135,92,0.42)] bg-white/70 px-5 py-2.5 text-center text-sm font-medium text-[#1E1E1E] shadow-[0_12px_30px_rgba(42,30,23,0.05)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-[#B8875C] hover:bg-[#FAF4EA] hover:text-[#9F7048]">
              {siteContent.faqPage.finalCta.secondary}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
