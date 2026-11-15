import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ShieldCheck, Users, ArrowRight,
  ChevronRight, Star, Diamond, Scale, CalendarDays, Phone, Shield, CheckCircle
} from "lucide-react";
import heroBackground from "../../imports/hero baground.png";
import internationalLegalImage from "../../imports/International Legal Operations.png";
import propertyLegalImage from "../../imports/Property Legal Services.png";
import narayanaImage from "../../imports/Narayana Phanikumar Olety.png";
import aboutOfficeImage from "../../imports/about section image.png";
import { siteContent } from "../content/siteContent";

const homeContent = siteContent.home;
const WHY_CARD_ICONS = [Shield, ShieldCheck, Users, CheckCircle];
const WHY_CARDS = homeContent.why.cards.map((card, index) => ({
  ...card,
  icon: WHY_CARD_ICONS[index],
}));

const CONTENT_PRACTICE_IMAGES = {
  international: internationalLegalImage,
  property: propertyLegalImage,
};
const CONTENT_PRACTICE_AREAS = homeContent.practice.areas.map((area) => ({
  ...area,
  image: CONTENT_PRACTICE_IMAGES[area.imageKey],
}));
const TESTIMONIAL_IMAGES = {
  narayana: narayanaImage,
};
const CONTENT_TESTIMONIALS = homeContent.testimonials.items.map((testimonial) => ({
  ...testimonial,
  image: testimonial.imageKey ? TESTIMONIAL_IMAGES[testimonial.imageKey] : undefined,
}));

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % CONTENT_TESTIMONIALS.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentTestimonial = CONTENT_TESTIMONIALS[activeTestimonial];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[97vh] flex items-center bg-[#FFFDF8] overflow-hidden">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8]/95 via-[#FFFDF8]/78 to-[#FFFDF8]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8] via-transparent to-[#FFFDF8]/25" />

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-2xl">
            <div className="animate-fade-up flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#B8875C]" />
              <span className="text-[#B8875C] text-xs tracking-[0.2em] uppercase">{homeContent.hero.eyebrow}</span>
            </div>
            <h1 className="animate-fade-up delay-100 font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#2A1E17] leading-[1.15] mb-6">
              {homeContent.hero.titlePrefix}{" "}
              <span className="text-[#B8875C]">{homeContent.hero.highlightedTitle}</span> {homeContent.hero.titleSuffix}
            </h1>
            <p className="animate-fade-up delay-200 text-[#3D3D3D] text-lg leading-relaxed mb-8 max-w-lg">
              {homeContent.hero.description}
            </p>
            <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="premium-button inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
              >
                {homeContent.hero.primaryCta}
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded border border-[rgba(184,135,92,0.42)] bg-white/70 px-5 py-2.5 text-center text-sm font-medium text-[#1E1E1E] shadow-[0_12px_30px_rgba(42,30,23,0.05)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-[#B8875C] hover:bg-[#FAF4EA] hover:text-[#9F7048]"
              >
                {homeContent.hero.secondaryCta}
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Lexaum LLP */}
      <section className="relative -mt-px overflow-hidden bg-[#FFFDF8] py-24 sm:py-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="animate-fade-up flex items-center gap-2">
                <div className="h-px w-8 bg-[#B8875C]" />
                <span className="text-[#B8875C] text-xs tracking-[0.2em] uppercase">{homeContent.about.eyebrow}</span>
              </div>
              <h2 className="animate-fade-up font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2A1E17] leading-tight">
                {homeContent.about.titlePrefix} <span className="text-[#B8875C]">{homeContent.about.highlightedTitle}</span>
              </h2>
              <p className="animate-fade-up text-[#4A403A] text-lg leading-relaxed">
                {homeContent.about.description}
              </p>
              <div className="animate-fade-up grid sm:grid-cols-2 gap-6 pt-4">
                {homeContent.about.features.map(({ title, desc }, index) => {
                  const FeatureIcon = [Shield, ShieldCheck, Users, CheckCircle][index];
                  return (
                    <div key={title} className="flex gap-3">
                      <FeatureIcon className="text-[#B8875C] shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-[#2A1E17]">{title}</h4>
                        <p className="text-sm text-[#4A403A] mt-1">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="animate-fade-up pt-6">
                <Link
                  to="/about"
                  className="premium-button inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
                >
                  {homeContent.about.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            {/* Right Column: Office/Legal-themed Image */}
            <div className="animate-fade-up lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#B8875C]/10 to-transparent rounded-[24px] -z-10" />
              <div className="relative h-[480px] overflow-hidden rounded-[20px] border border-[rgba(184,135,92,0.22)] shadow-[0_20px_50px_rgba(42,30,23,0.12)]">
                <img
                  src={aboutOfficeImage}
                  alt={homeContent.about.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2A1E17]/22 via-[#B8875C]/10 to-[#FFFDF8]/16" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E17]/12 via-transparent to-[#FFFDF8]/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="relative -mt-px overflow-hidden bg-[#FFFDF8] py-24 sm:py-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up text-center mb-[65px]">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-[#B8875C]" />
              <span className="text-[#B8875C] text-xs tracking-[0.34em] uppercase">{homeContent.practice.eyebrow}</span>
              <div className="h-px w-12 bg-[#B8875C]" />
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#2A1E17] sm:text-5xl lg:text-[62px] mb-5">
              {homeContent.practice.titlePrefix} <span className="text-[#B8875C]">{homeContent.practice.highlightedTitle}</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B8875C]" />
              <Diamond size={13} className="text-[#B8875C] fill-[#B8875C]/15" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B8875C]" />
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <div className="animate-fade-up lg:sticky lg:top-24">
              <p className="max-w-md text-base leading-[1.8] text-[#4A403A]">
                {homeContent.practice.description}
              </p>
              <div className="mt-9 border-l border-[rgba(184,135,92,0.28)] pl-5">
                {CONTENT_PRACTICE_AREAS.map(({ number, title }) => (
                  <div key={number} className="mb-4 flex items-start gap-3 last:mb-0">
                    <span className="font-['Playfair_Display'] text-2xl text-[#B8875C]">{number}</span>
                    <span className="pt-1 text-sm font-medium leading-snug text-[#4A403A]">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up border-t border-[rgba(184,135,92,0.26)]">
              {CONTENT_PRACTICE_AREAS.map(({ number, title, desc, href, cta, image, previewServices }) => (
                <article
                  key={title}
                  className="group border-b border-[rgba(184,135,92,0.26)]"
                >
                  <Link
                    to={href}
                    className="grid gap-6 py-7 outline-none transition-colors duration-300 hover:bg-[#FAF4EA]/45 focus-visible:bg-[#FAF4EA]/55 sm:py-8 lg:grid-cols-[112px_minmax(0,1fr)_210px] lg:gap-8 lg:px-6"
                  >
                    <div className="flex items-center justify-between order-1 lg:order-1 lg:block lg:pt-1">
                      <span className="font-['Playfair_Display'] text-4xl leading-none text-[#B8875C] lg:text-5xl">
                        {number}
                      </span>
                    </div>
                    <div className="relative order-2 block h-[220px] overflow-hidden rounded-[18px] border border-[rgba(184,135,92,0.18)] lg:order-3 lg:h-[170px]">
                      <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-72 transition duration-500 group-hover:scale-105 group-hover:opacity-95" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8]/45 via-transparent to-[#2A1E17]/18" />
                    </div>
                    <div className="min-w-0 order-3 lg:order-2">
                      <h3 className="max-w-2xl font-['Playfair_Display'] text-3xl leading-[1.12] text-[#2A1E17] sm:text-4xl">
                        {title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-[1.75] text-[#4A403A] sm:text-base">
                        {desc}
                      </p>
                      <div className="mt-5 grid gap-x-6 gap-y-2 overflow-hidden text-sm text-[#2A1E17] opacity-100 transition-all duration-500 sm:grid-cols-2 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-focus-within:max-h-40 lg:group-focus-within:opacity-100">
                        {previewServices.map((service) => (
                          <span key={service} className="flex items-center gap-2">
                            <span className="h-px w-5 bg-[#B8875C]" aria-hidden="true" />
                            {service}
                          </span>
                        ))}
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B8875C]">
                        {cta}
                        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="animate-fade-up mt-14 border-y border-[rgba(184,135,92,0.24)] py-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl leading-tight text-[#2A1E17] sm:text-3xl">
                {homeContent.practice.bottomCta.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-[1.75] text-[#4A403A] sm:text-base">
                {homeContent.practice.bottomCta.text}
              </p>
            </div>
            <Link
              to={homeContent.practice.bottomCta.href}
              className="premium-button mt-6 inline-flex h-10 min-w-[180px] shrink-0 transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048] sm:mt-0"
            >
              {homeContent.practice.bottomCta.button}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Lexaum LLP */}
      <section className="relative -mt-px overflow-hidden bg-[#FFFDF8] py-24 sm:py-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up text-center mb-[60px]">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-[#B8875C]" />
              <span className="text-[#B8875C] text-xs tracking-[0.24em] uppercase">{homeContent.why.eyebrow}</span>
              <div className="h-px w-12 bg-[#B8875C]" />
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#2A1E17] sm:text-5xl lg:text-[62px] mb-5">
              {homeContent.why.titlePrefix} <span className="text-[#B8875C]">{homeContent.why.highlightedTitle}</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B8875C]" />
              <Diamond size={13} className="text-[#B8875C] fill-[#B8875C]/15" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B8875C]" />
            </div>
            <p className="text-[#4A403A] text-lg leading-relaxed max-w-[650px] mx-auto">
              {homeContent.why.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-8 lg:grid-cols-4">
            {WHY_CARDS.map(({ icon: Icon, title, desc, delayClass }) => (
              <div
                key={title}
                className={`animate-fade-up ${delayClass} group relative flex flex-col items-center justify-between bg-white border border-[rgba(184,135,92,0.22)] rounded-[18px] px-3 pt-12 pb-6 text-center shadow-[0_18px_45px_rgba(42,30,23,0.08)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-2 hover:border-[rgba(184,135,92,0.38)] hover:shadow-[0_24px_60px_rgba(42,30,23,0.12)] sm:px-6 sm:pt-14 sm:pb-8`}
              >
                <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(184,135,92,0.24)] bg-[#FAF4EA] shadow-[0_12px_28px_rgba(42,30,23,0.08)] transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                  <Icon size={22} strokeWidth={1.8} className="text-[#B8875C] sm:h-[26px] sm:w-[26px]" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-base leading-snug text-[#2A1E17] mb-3 sm:text-xl">
                    {title}
                  </h3>
                  <div className="h-px w-8 bg-[#B8875C] mx-auto mb-4" />
                  <p className="text-[#4A403A] text-xs leading-relaxed sm:text-sm">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="relative -mt-px overflow-hidden bg-[#FFFDF8] py-24 sm:py-[112px]">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B8875C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.5em] text-[#B8875C]">
                {homeContent.testimonials.eyebrow}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B8875C]" />
            </div>
          <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl lg:text-[62px]">
            {homeContent.testimonials.titlePrefix} <span className="text-[#B8875C]">{homeContent.testimonials.highlightedTitle}</span>
          </h2>
            <div className="mx-auto mt-6 flex max-w-[220px] items-center justify-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B8875C]" />
              <Diamond size={12} className="fill-[#B8875C]/20 text-[#B8875C]" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B8875C]" />
            </div>
          </div>

          <div className="animate-fade-up mx-auto mt-12 flex max-w-md flex-col items-center md:hidden">
            <div
              key={currentTestimonial.id}
              className="group flex min-h-[300px] w-full flex-col items-center justify-between rounded-[22px] border border-[rgba(184,135,92,0.32)] bg-white/90 px-7 py-9 text-center shadow-[0_24px_60px_rgba(42,30,23,0.08),0_6px_0_rgba(184,135,92,0.08)] transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out"
            >
              <div>
                <div className="font-['Playfair_Display'] text-[64px] leading-none text-[#B8875C] opacity-90">
                  &ldquo;
                </div>
                <p className="mt-1 font-['Playfair_Display'] text-lg italic leading-[1.75] text-[#1E1E1E]">
                  {currentTestimonial.text}
                </p>
              </div>
              <div>
                <div className="my-6 h-px w-full bg-[rgba(184,135,92,0.18)]" />
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgba(184,135,92,0.34)] bg-[#FFFDF8] shadow-[0_12px_28px_rgba(42,30,23,0.07)]">
                    {currentTestimonial.image ? (
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.clientName ?? currentTestimonial.clientType}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Users size={20} strokeWidth={1.8} className="text-[#B8875C]" />
                    )}
                  </div>
                  <div>
                    {currentTestimonial.clientName ? (
                      <>
                        <p className="font-['Playfair_Display'] text-base font-semibold text-[#B8875C]">
                          {currentTestimonial.clientName}
                        </p>
                        <p className="text-sm text-[#4A403A]">
                          {currentTestimonial.clientRole}
                        </p>
                      </>
                    ) : (
                      <p className="font-['Playfair_Display'] text-base font-semibold uppercase tracking-wider text-[#B8875C]">
                        {currentTestimonial.clientType}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-6 flex justify-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-[#B8875C] text-[#B8875C]" />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {CONTENT_TESTIMONIALS.map((testimonial, index) => (
                <span
                  key={testimonial.id}
                  className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                    index === activeTestimonial ? "w-7 bg-[#B8875C]" : "w-2 bg-[rgba(184,135,92,0.28)]"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 hidden max-w-7xl items-stretch justify-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
            {CONTENT_TESTIMONIALS.map(({ id, text, clientType, clientName, clientRole, image }) => (
              <div
                key={id}
                className="animate-fade-up group flex min-h-[300px] flex-col items-center justify-between rounded-[22px] border border-[rgba(184,135,92,0.32)] bg-white/90 px-8 py-10 text-center shadow-[0_24px_60px_rgba(42,30,23,0.08),0_6px_0_rgba(184,135,92,0.08)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-2 hover:border-[rgba(184,135,92,0.52)] hover:shadow-[0_32px_74px_rgba(42,30,23,0.12),0_8px_0_rgba(184,135,92,0.14)] sm:px-10 sm:py-12"
              >
                <div>
                  <div className="font-['Playfair_Display'] text-[68px] leading-none text-[#B8875C] opacity-90">
                    &ldquo;
                  </div>
                  <p className="mt-1 font-['Playfair_Display'] text-lg italic leading-[1.75] text-[#1E1E1E]">
                    {text}
                  </p>
                </div>
                <div>
                  <div className="my-6 h-px w-full bg-[rgba(184,135,92,0.18)]" />
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgba(184,135,92,0.34)] bg-[#FFFDF8] shadow-[0_12px_28px_rgba(42,30,23,0.07)] transition-transform duration-300 group-hover:scale-105">
                      {image ? (
                        <img
                          src={image}
                          alt={clientName ?? clientType}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Users size={20} strokeWidth={1.8} className="text-[#B8875C]" />
                      )}
                    </div>
                    <div>
                      {clientName ? (
                        <>
                          <p className="font-['Playfair_Display'] text-base font-semibold text-[#B8875C]">
                            {clientName}
                          </p>
                          <p className="text-sm text-[#4A403A]">
                            {clientRole}
                          </p>
                        </>
                      ) : (
                        <p className="font-['Playfair_Display'] text-base font-semibold uppercase tracking-wider text-[#B8875C]">
                          {clientType}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} className="fill-[#B8875C] text-[#B8875C]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="relative -mt-px min-h-[500px] overflow-hidden bg-[#FFFDF8] py-24 sm:py-[100px]">
        <div className="relative mx-auto max-w-[1000px] px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-up mx-auto mb-8 flex max-w-[320px] items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B8875C]" />
            <Scale size={40} strokeWidth={1.5} className="shrink-0 text-[#B8875C]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B8875C]" />
          </div>

          <h2 className="animate-fade-up font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl lg:text-[62px]">
            {homeContent.cta.titlePrefix} <span className="text-[#B8875C]">{homeContent.cta.highlightedTitle}</span>?
          </h2>

          <div className="animate-fade-up mx-auto mt-7 flex max-w-[210px] items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B8875C]" />
            <Diamond size={12} className="fill-[#B8875C]/20 text-[#B8875C]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B8875C]" />
          </div>

          <p className="animate-fade-up mx-auto mt-8 max-w-[850px] text-lg leading-[1.75] text-[#4A403A]">
            {homeContent.cta.description}
          </p>

          <div className="animate-fade-up mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
            <Link
              to="/contact"
              className="premium-button group inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
            >
              <CalendarDays size={21} strokeWidth={1.8} />
              {homeContent.cta.primary}
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={siteContent.footer.contact.phoneHref}
              className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded border border-[rgba(184,135,92,0.42)] bg-white/70 px-5 py-2.5 text-center text-sm font-medium text-[#1E1E1E] shadow-[0_12px_30px_rgba(42,30,23,0.05)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-[#B8875C] hover:bg-[#FAF4EA] hover:text-[#9F7048]"
            >
              <Phone size={21} strokeWidth={1.8} className="text-[#B8875C]" />
              {homeContent.cta.secondary}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
