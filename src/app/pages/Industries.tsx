import { Link } from "react-router";
import { Scale, Building2, TrendingUp, Briefcase, Globe, Users, Home as HomeIcon, ArrowRight, CheckCircle } from "lucide-react";
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
      </div>
    </section>
  );
}

const INDUSTRY_ICONS = [Scale, Building2, Briefcase, TrendingUp, Briefcase, TrendingUp, Globe];
const INDUSTRIES = siteContent.industries.items.map((industry, index) => ({
  ...industry,
  icon: INDUSTRY_ICONS[index],
}));

export function Industries() {
  return (
    <div>
      <PageHero
        eyebrow={siteContent.industries.hero.eyebrow}
        title={siteContent.industries.hero.title}
        subtitle={siteContent.industries.hero.subtitle}
      />

      <section className="py-20 bg-[#FFFDF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {INDUSTRIES.map(({ icon: Icon, title, desc, services, cta }) => (
              <div
                key={title}
                className="bg-[#FFFFFF] border border-[rgba(184,135,92,0.15)] rounded-xl p-7 text-center hover:border-[rgba(184,135,92,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(42,30,23,0.08)] transition-[transform,background-color,color,border-color] duration-300 ease-out"
              >
                <div className="flex flex-col items-center justify-center gap-5 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[rgba(184,135,92,0.1)] border border-[rgba(184,135,92,0.2)] flex items-center justify-center">
                    <Icon size={22} className="text-[#B8875C]" />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl text-[#2A1E17] mb-2">{title}</h3>
                    <p className="text-[#3D3D3D] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
                <div className="border-t border-[rgba(184,135,92,0.1)] pt-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {services.map((svc) => (
                      <span key={svc} className="text-xs bg-[rgba(184,135,92,0.08)] border border-[rgba(184,135,92,0.2)] text-[#D2A679] px-2.5 py-1 rounded-full">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 mt-5 text-[#B8875C] hover:text-[#D2A679] text-sm transition-colors"
                >
                  {cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFFDF8] text-center border-t border-[rgba(184,135,92,0.15)]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-['Playfair_Display'] text-3xl text-[#2A1E17] mb-4">{siteContent.industries.cta.title}</h2>
          <p className="text-[#3D3D3D] mb-8">{siteContent.industries.cta.text}</p>
          <Link to="/contact" className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]">
            {siteContent.industries.cta.label} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
