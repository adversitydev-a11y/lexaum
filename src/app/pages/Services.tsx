import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Globe2, Layers3, Phone } from "lucide-react";
import {
  GoldDivider,
  PrimaryButton,
  SectionBackground,
  SectionLabel,
  fadeUp,
} from "../components/InnerPageUI";
import { ServiceFAQ } from "../components/ServiceFAQ";
import internationalLegalImage from "../../imports/International Legal Operations.png";
import propertyLegalImage from "../../imports/Property Legal Services.png";
import servicesBackgroundImage from "../../imports/services baground for all.png";
import { siteContent } from "../content/siteContent";

const servicesContent = siteContent.services;
const SERVICE_CATEGORY_IMAGES = {
  international: internationalLegalImage,
  property: propertyLegalImage,
};

const SERVICE_CATEGORIES = servicesContent.categories.map((category) => ({
  ...category,
  image: SERVICE_CATEGORY_IMAGES[category.imageKey],
}));

function ServicesHero() {
  return (
    <SectionBackground
      className="pt-16 pb-18 sm:pt-20 sm:pb-24 lg:pt-[88px] lg:pb-[104px]"
      backgroundImage={servicesBackgroundImage}
      backgroundType="document"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-[#B8875C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.42em] text-[#B8875C]">
              {servicesContent.hero.eyebrow}
            </span>
          </div>
          <h1 className="max-w-4xl font-['Playfair_Display'] text-4xl leading-[1.08] text-[#1E1E1E] sm:text-5xl lg:text-[64px]">
            {servicesContent.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.75] text-[#4A403A]">
            {servicesContent.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton to={servicesContent.hero.cta.href}>{servicesContent.hero.cta.label}</PrimaryButton>
          </div>
          <p className="mt-7 border-l border-[#B8875C] pl-4 text-sm font-medium leading-relaxed text-[#2A1E17]">
            {servicesContent.hero.trustStatement}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative min-h-[360px] overflow-hidden border-y border-[rgba(184,135,92,0.26)] py-6"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B8875C]/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B8875C]/35 to-transparent" />
          <div className="relative ml-auto h-[360px] max-w-[560px] overflow-hidden border border-[rgba(184,135,92,0.24)] bg-white/70">
            <img
              src={internationalLegalImage}
              alt=""
              className="h-full w-full object-cover opacity-88"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8]/65 via-[#FFFDF8]/12 to-[#2A1E17]/18" />
          </div>
          <div className="absolute bottom-10 left-0 max-w-[310px] border-l border-[#B8875C] bg-[#FFFDF8]/92 py-4 pl-5 pr-6 shadow-[0_18px_45px_rgba(42,30,23,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B8875C]">
              {servicesContent.hero.visualEyebrow}
            </p>
            <p className="mt-2 font-['Playfair_Display'] text-2xl leading-tight text-[#1E1E1E]">
              {servicesContent.hero.visualText}
            </p>
          </div>
        </motion.div>
      </div>
    </SectionBackground>
  );
}

function CoreOverview() {
  return (
    <SectionBackground id="service-overview" className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-[92px] lg:pb-[110px]" variant="cream" backgroundType="corporate">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <SectionLabel>{servicesContent.overview.eyebrow}</SectionLabel>
          <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">
            {servicesContent.overview.title}
          </h2>
          <GoldDivider className="my-6 justify-start" />
          <p className="text-lg leading-[1.75] text-[#4A403A]">{servicesContent.overview.body}</p>
          <div className="mt-9 flex items-center gap-5 text-[#B8875C]" aria-hidden="true">
            <Globe2 size={34} strokeWidth={1.4} />
            <span className="h-px flex-1 bg-[#B8875C]/35" />
            <FileText size={34} strokeWidth={1.4} />
            <span className="h-px flex-1 bg-[#B8875C]/35" />
            <Layers3 size={34} strokeWidth={1.4} />
          </div>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-x-8 border-y border-[rgba(184,135,92,0.24)] py-4 sm:grid-cols-2"
        >
          {servicesContent.overview.matrix.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="group flex min-h-14 items-center gap-3 border-b border-[rgba(184,135,92,0.18)] py-4 transition-colors duration-300 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <CheckCircle2 size={20} className="shrink-0 text-[#B8875C]" strokeWidth={1.7} />
              <p className="text-sm font-semibold leading-snug text-[#1E1E1E]">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionBackground>
  );
}

function CategoryShowcase() {
  return (
    <SectionBackground className="pt-4 pb-16 sm:pb-24" variant="ivory" backgroundType="legal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {SERVICE_CATEGORIES.map((category, index) => (
          <motion.section
            key={category.id}
            id={category.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className={`grid gap-10 border-b border-[rgba(184,135,92,0.24)] py-16 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:py-22 ${
              index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[320px] overflow-hidden">
              <img src={category.image} alt="" className="h-full min-h-[320px] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2A1E17]/30 via-transparent to-[#FFFDF8]/16" />
              <div className="absolute bottom-6 left-6 rounded-full border border-white/42 bg-[#FFFDF8]/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2A1E17] shadow-[0_16px_34px_rgba(42,30,23,0.12)]">
                {category.badgeLabel}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#B8875C]">{category.badgeTitle}</p>
              <h2 className="mt-4 font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">
                {category.heading}
              </h2>
              <div className="my-6 h-px w-28 bg-[#B8875C]" />
              <p className="text-lg leading-[1.75] text-[#4A403A]">{category.intro}</p>
              <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {category.services.map((service) => (
                  <span key={service} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-[#1E1E1E]">
                    <span className="mt-3 h-px w-5 shrink-0 bg-[#B8875C]" aria-hidden="true" />
                    {service}
                  </span>
                ))}
              </div>
              <p className="mt-7 border-l border-[#B8875C] pl-4 text-sm leading-[1.75] text-[#4A403A]">
                {category.statement}
              </p>
              <Link to={category.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#B8875C] transition-colors hover:text-[#9F7048]">
                {category.cta}
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.section>
        ))}
      </div>
    </SectionBackground>
  );
}

function CustomSupport() {
  return (
    <SectionBackground
      id={servicesContent.customSupport.id}
      className="py-18 sm:py-24"
      backgroundImage={servicesBackgroundImage}
      backgroundType="corporate"
    >
      <div className="absolute inset-0 opacity-[0.12]" aria-hidden="true">
        <div className="absolute left-10 top-10 h-px w-[80%] bg-[#B8875C]" />
        <div className="absolute bottom-12 right-10 h-px w-[70%] bg-[#B8875C]" />
        <div className="absolute left-[18%] top-0 h-full w-px bg-[#B8875C]" />
        <div className="absolute right-[22%] top-0 h-full w-px bg-[#B8875C]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#B8875C]">{servicesContent.customSupport.eyebrow}</p>
          <h2 className="mt-5 font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">
            {servicesContent.customSupport.title}
          </h2>
          <div className="my-7 h-px w-28 bg-[#B8875C]" />
          <p className="text-lg leading-[1.75] text-[#4A403A]">{servicesContent.customSupport.body}</p>
          <p className="mt-5 text-base leading-[1.75] text-[#4A403A]">{servicesContent.customSupport.supportingText}</p>
          <Link to="/contact" className="premium-button mt-8 inline-flex h-10 min-w-[180px] items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#9F7048]">
            {servicesContent.customSupport.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid border-y border-[#B8875C]/28 py-4">
          {servicesContent.customSupport.options.map((option) => (
            <div key={option} className="flex items-center gap-4 border-b border-[#B8875C]/18 py-3 last:border-b-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B8875C]/12 text-[#B8875C]">
                <CheckCircle2 size={20} strokeWidth={1.7} />
              </span>
              <p className="text-xl font-medium leading-snug text-[#1E1E1E]">{option}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}

export function Services() {
  return (
    <div className="overflow-hidden bg-[#FFFDF8]">
      <ServicesHero />
      <CoreOverview />
      <CategoryShowcase />
      <CustomSupport />
      <ServiceFAQ variant="services" />

      <SectionBackground className="pt-14 pb-20 sm:pt-[67px] sm:pb-24" variant="ivory" backgroundType="cta">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        >
          <SectionLabel>{servicesContent.consultation.label}</SectionLabel>
          <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl lg:text-[62px]">
            {servicesContent.consultation.titlePrefix} <span className="text-[#B8875C]">{servicesContent.consultation.highlightedTitle}</span> {servicesContent.consultation.titleSuffix}
          </h2>
          <GoldDivider className="mt-6" />
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-[1.75] text-[#4A403A]">
            {servicesContent.consultation.text}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton to="/contact">{servicesContent.consultation.primary}</PrimaryButton>
            <a
              href={siteContent.footer.contact.phoneHref}
              className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded border border-[rgba(184,135,92,0.42)] bg-white/70 px-5 py-2.5 text-center text-sm font-medium text-[#1E1E1E] shadow-[0_12px_30px_rgba(42,30,23,0.05)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-[#B8875C] hover:bg-[#FAF4EA] hover:text-[#9F7048]"
            >
              <Phone size={15} />
              Call Us
            </a>
          </div>
        </motion.div>
      </SectionBackground>
    </div>
  );
}
