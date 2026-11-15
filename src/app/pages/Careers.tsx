import { useState } from "react";
import { BookOpen, TrendingUp, Users, Target, ArrowRight, Upload, CheckCircle, FileText } from "lucide-react";
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
        <a
          href="#apply"
          className="mt-8 inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
        >
          {siteContent.careers.hero.cta}
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

const WHY_JOIN_ICONS = [BookOpen, TrendingUp, Target, Users, FileText, TrendingUp];
const WHY_JOIN = siteContent.careers.why.items.map((item, index) => ({
  ...item,
  icon: WHY_JOIN_ICONS[index],
}));

export function Careers() {
  const content = siteContent.careers;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
      />

      <section className="py-20 bg-[#FFFDF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#B8875C]" />
              <span className="text-[#B8875C] text-xs tracking-[0.2em] uppercase">{content.why.eyebrow}</span>
              <div className="h-px w-10 bg-[#B8875C]" />
            </div>
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2A1E17]">{content.why.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_JOIN.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#FFFFFF] border border-[rgba(184,135,92,0.15)] rounded-xl p-7 text-center hover:border-[rgba(184,135,92,0.35)] hover:-translate-y-1 transition-[transform,background-color,color,border-color] duration-300 ease-out">
                <div className="w-12 h-12 rounded-full bg-[rgba(184,135,92,0.1)] flex items-center justify-center mx-auto mb-5">
                  <Icon size={22} className="text-[#B8875C]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-[#2A1E17] mb-3">{title}</h3>
                <p className="text-[#3D3D3D] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#open-positions"
              className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
            >
              {content.why.cta}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFFDF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-px w-12 bg-[#B8875C] mb-6" />
              <h2 className="font-['Playfair_Display'] text-3xl text-[#2A1E17] mb-5">{content.internship.title}</h2>
              <p className="text-[#3D3D3D] leading-relaxed mb-8">
                {content.internship.text}
              </p>
              <a
                href="#apply"
                className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
              >
                {content.internship.cta}
                <ArrowRight size={15} />
              </a>
            </div>
            <div className="bg-[#FFFFFF] border border-[rgba(184,135,92,0.2)] rounded-2xl p-8 text-center">
              <h3 className="font-['Playfair_Display'] text-xl text-[#2A1E17] mb-2">{content.internship.exposureTitle}</h3>
              <div className="h-px bg-[rgba(184,135,92,0.15)] mb-5" />
              {content.internship.exposureItems.map((item) => (
                <div key={item} className="flex flex-col items-center justify-center gap-2 py-3 border-b border-[rgba(184,135,92,0.08)] last:border-0">
                  <CheckCircle size={15} className="text-[#B8875C]" />
                  <span className="text-[#2A1E17] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-20 bg-[#FFFDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#B8875C]" />
              <span className="text-[#B8875C] text-xs tracking-[0.2em] uppercase">{content.openings.eyebrow}</span>
              <div className="h-px w-10 bg-[#B8875C]" />
            </div>
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2A1E17]">{content.openings.title}</h2>
          </div>
          <div className="bg-[#FFFFFF] border border-[rgba(184,135,92,0.15)] rounded-xl p-8 text-center">
            <p className="text-[#2A1E17] mb-6">
              {content.openings.text}
            </p>
            <a
              href="#apply"
              className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
            >
              {content.openings.cta}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 bg-[#FFFDF8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-px w-12 bg-[#B8875C] mx-auto mb-6" />
            <h2 className="font-['Playfair_Display'] text-3xl text-[#2A1E17] mb-3">{content.form.title}</h2>
            <p className="text-[#3D3D3D] text-sm">{content.form.intro}</p>
          </div>

          {submitted ? (
            <div className="bg-[#FFFFFF] border border-[rgba(184,135,92,0.3)] rounded-2xl p-12 text-center">
              <CheckCircle size={48} className="text-[#B8875C] mx-auto mb-4" />
              <h3 className="font-['Playfair_Display'] text-2xl text-[#2A1E17] mb-3">{content.form.successTitle}</h3>
              <p className="text-[#3D3D3D]">{content.form.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#FFFFFF] border border-[rgba(184,135,92,0.2)] rounded-2xl p-8 space-y-5 text-center">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#2A1E17] text-sm mb-2">{content.form.labels.name}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={content.form.placeholders.name}
                    className="w-full bg-[#F7F1E8] border border-[rgba(184,135,92,0.2)] text-[#2A1E17] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#B8875C] placeholder-[#7A6F68] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#2A1E17] text-sm mb-2">{content.form.labels.email}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={content.form.placeholders.email}
                    className="w-full bg-[#F7F1E8] border border-[rgba(184,135,92,0.2)] text-[#2A1E17] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#B8875C] placeholder-[#7A6F68] transition-colors"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#2A1E17] text-sm mb-2">{content.form.labels.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={content.form.placeholders.phone}
                    className="w-full bg-[#F7F1E8] border border-[rgba(184,135,92,0.2)] text-[#2A1E17] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#B8875C] placeholder-[#7A6F68] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#2A1E17] text-sm mb-2">{content.form.labels.position}</label>
                  <input
                    type="text"
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    placeholder={content.form.placeholders.position}
                    className="w-full bg-[#F7F1E8] border border-[rgba(184,135,92,0.2)] text-[#2A1E17] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#B8875C] placeholder-[#7A6F68] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#2A1E17] text-sm mb-2">{content.form.labels.resume}</label>
                <label className="w-full bg-[#F7F1E8] border border-dashed border-[rgba(184,135,92,0.3)] text-[#3D3D3D] px-4 py-6 rounded flex flex-col items-center gap-2 cursor-pointer hover:border-[#B8875C] transition-colors">
                  <Upload size={22} className="text-[#B8875C]" />
                  <span className="text-sm">{content.form.placeholders.resume}</span>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>
              </div>
              <div>
                <label className="block text-[#2A1E17] text-sm mb-2">{content.form.labels.message}</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={content.form.placeholders.message}
                  className="w-full bg-[#F7F1E8] border border-[rgba(184,135,92,0.2)] text-[#2A1E17] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#B8875C] placeholder-[#7A6F68] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="mx-auto flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
              >
                {content.form.submit} <ArrowRight size={15} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
