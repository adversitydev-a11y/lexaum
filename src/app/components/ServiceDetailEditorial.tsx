import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDot,
  FileText,
  Globe2,
  Handshake,
  Home,
  Landmark,
  Scale,
  ShieldCheck,
  Sparkles,
  Store,
  UserRound,
  UsersRound,
} from "lucide-react";
import europeFlagImage from "../../imports/Europe.png";
import indiaFlagImage from "../../imports/India.jpg";
import unitedKingdomFlagImage from "../../imports/United Kingdom.jpg";
import unitedStatesFlagImage from "../../imports/United States.jpg";
import {
  CTASection,
  GoldDivider,
  PageHero,
  SectionBackground,
  SectionLabel,
  fadeUp,
} from "./InnerPageUI";
import { ServiceFAQ } from "./ServiceFAQ";

type WorkflowOverview = {
  heading: string;
  text: string;
  workflow?: readonly string[];
};

type ServiceDetailData = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: { label: string; href: string };
  };
  overview: WorkflowOverview;
  supportHeading: string;
  supportItems: readonly string[];
  servicesHeading: string;
  services: readonly (readonly [string, string])[];
  cta: {
    title: string;
    text: string;
    button: string;
  };
};

type ServiceFAQVariant = "international" | "india" | "property";

const serviceIcons = [Scale, FileText, ShieldCheck, UsersRound, Globe2, Sparkles];

function getSupportIcon(item: string): LucideIcon {
  const label = item.toLowerCase();

  if (label.includes("law firm")) return Scale;
  if (label.includes("legal department") || label.includes("legal team")) return Landmark;
  if (label.includes("business")) return BriefcaseBusiness;
  if (label.includes("company") || label.includes("organisation")) return Building2;
  if (label.includes("startup") || label.includes("sme")) return Store;
  if (label.includes("service provider")) return Handshake;
  if (label.includes("property owner") || label.includes("buyer") || label.includes("seller")) return Home;
  if (label.includes("investor")) return ShieldCheck;
  if (label.includes("family") || label.includes("individual")) return UsersRound;

  return UserRound;
}

function WorkflowLine({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-9 grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-3 border-b border-[rgba(184,135,92,0.22)] py-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B8875C]/10 text-[#B8875C]">
            <CircleDot size={18} strokeWidth={1.7} />
          </span>
          <p className="text-sm font-semibold leading-snug text-[#1E1E1E]">{item}</p>
        </div>
      ))}
    </div>
  );
}

function SupportStrip({ heading, items }: { heading: string; items: readonly string[] }) {
  return (
    <SectionBackground className="py-16 sm:py-22" variant="ivory" backgroundType="corporate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="relative border-l border-[#B8875C] pl-6">
            <SectionLabel>Who We Support</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">{heading}</h2>
            <p className="mt-5 max-w-md text-base leading-[1.75] text-[#4A403A]">
              Flexible support for clients with different team structures, documentation needs, and operational workflows.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
          {items.map((item) => {
            const SupportIcon = getSupportIcon(item);

            return (
            <div
              key={item}
              className="group flex min-h-[86px] items-center gap-3 border border-[rgba(184,135,92,0.20)] bg-white/48 px-3 py-4 shadow-[0_14px_32px_rgba(42,30,23,0.035)] transition-colors duration-300 hover:border-[#B8875C]/45 hover:bg-[#FAF4EA]/68 sm:gap-4 sm:px-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B8875C]/10 text-[#B8875C] transition-colors duration-300 group-hover:bg-[#FFFDF8] group-hover:text-[#8B5E3C] group-hover:ring-1 group-hover:ring-[#B8875C]/42 sm:h-10 sm:w-10">
                <SupportIcon size={17} strokeWidth={1.7} className="sm:h-5 sm:w-5" />
              </span>
              <span className="text-[11px] font-semibold uppercase leading-snug tracking-[0.09em] text-[#1E1E1E] sm:text-sm sm:tracking-[0.13em]">
                {item}
              </span>
            </div>
          );
          })}
          </div>
        </div>
      </div>
    </SectionBackground>
  );
}

function NumberedServices({ heading, services }: { heading: string; services: readonly (readonly [string, string])[] }) {
  return (
    <SectionBackground className="pt-16 pb-20 sm:pt-20 sm:pb-24" variant="cream" backgroundType="document">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionLabel>Services Included</SectionLabel>
          <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">{heading}</h2>
          <GoldDivider className="mt-6" />
        </div>
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-x-12 border-y border-[rgba(184,135,92,0.24)] md:grid-cols-2"
        >
          {services.map(([title, desc], index) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group border-b border-[rgba(184,135,92,0.18)] py-7 transition-colors duration-300 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B8875C]/10 text-[#B8875C] transition-colors duration-300 group-hover:bg-[#B8875C] group-hover:text-white">
                  {(() => {
                    const Icon = serviceIcons[index % serviceIcons.length];
                    return <Icon size={21} strokeWidth={1.6} />;
                  })()}
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-tight text-[#1E1E1E]">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.75] text-[#4A403A]">{desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionBackground>
  );
}

function ValueList({ heading, items }: { heading: string; items: readonly string[] }) {
  return (
    <SectionBackground className="py-16 sm:py-22" variant="soft" backgroundType="legal">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">{heading}</h2>
        <div className="mt-9 grid gap-x-10 border-y border-[rgba(184,135,92,0.24)] py-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-4 border-b border-[rgba(184,135,92,0.18)] py-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
              <CheckCircle2 size={21} className="shrink-0 text-[#B8875C]" strokeWidth={1.7} />
              <p className="text-base font-medium leading-snug text-[#1E1E1E]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}

const MARKET_FLAG_IMAGES: Record<string, string> = {
  "United Kingdom": unitedKingdomFlagImage,
  "United States": unitedStatesFlagImage,
  Europe: europeFlagImage,
  India: indiaFlagImage,
};

function MarketReach({ heading, markets }: { heading: string; markets: readonly string[] }) {
  return (
    <SectionBackground className="py-16 sm:py-22" variant="ivory" backgroundType="global">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <SectionLabel>Market Reach</SectionLabel>
        <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">{heading}</h2>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {markets.map((market) => (
            <div
              key={market}
              className="flex min-h-[132px] flex-col items-center justify-center border border-[rgba(184,135,92,0.22)] bg-white/45 px-4 py-6 shadow-[0_14px_34px_rgba(42,30,23,0.04)]"
            >
              {MARKET_FLAG_IMAGES[market] && (
                <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(184,135,92,0.34)] bg-white shadow-[0_12px_30px_rgba(42,30,23,0.08)]">
                  <img
                    src={MARKET_FLAG_IMAGES[market]}
                    alt={`${market} flag`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </span>
              )}
              <span className="mt-4 font-['Playfair_Display'] text-2xl leading-tight text-[#2A1E17]">{market}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}

export function EditorialServiceDetail({
  data,
  backgroundImage,
  backgroundType,
  valueHeading,
  valueItems,
  marketHeading,
  markets,
  differenceHeading,
  differenceLeft,
  differenceRight,
  processHeading,
  process,
  faqVariant,
}: {
  data: ServiceDetailData;
  backgroundImage: string;
  backgroundType: "global" | "corporate" | "property" | "document";
  valueHeading?: string;
  valueItems?: readonly string[];
  marketHeading?: string;
  markets?: readonly string[];
  differenceHeading?: string;
  differenceLeft?: readonly string[];
  differenceRight?: readonly string[];
  processHeading?: string;
  process?: readonly (readonly [string, string])[];
  faqVariant?: ServiceFAQVariant;
}) {
  return (
    <div className="overflow-hidden bg-[#FFFDF8]">
      <PageHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        cta={data.hero.cta}
        backgroundImage={backgroundImage}
        backgroundType={backgroundType}
      />

      <SectionBackground className="pt-16 pb-18 sm:pt-20 sm:pb-22" variant="cream" backgroundType={backgroundType}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionLabel>Overview</SectionLabel>
              <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">{data.overview.heading}</h2>
            </div>
            <div>
              <p className="text-lg leading-[1.8] text-[#4A403A]">{data.overview.text}</p>
              {data.overview.workflow && <WorkflowLine items={data.overview.workflow} />}
            </div>
          </motion.div>
        </div>
      </SectionBackground>

      <SupportStrip heading={data.supportHeading} items={data.supportItems} />
      <NumberedServices heading={data.servicesHeading} services={data.services} />

      {valueHeading && valueItems && <ValueList heading={valueHeading} items={valueItems} />}

      {marketHeading && markets && <MarketReach heading={marketHeading} markets={markets} />}

      {differenceHeading && differenceLeft && differenceRight && (
        <SectionBackground className="py-16 sm:py-22" variant="soft" backgroundType="corporate">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">{differenceHeading}</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {[differenceLeft, differenceRight].map((items, groupIndex) => (
                <div key={groupIndex} className="border-t border-[rgba(184,135,92,0.24)]">
                  {items.map((item, index) => (
                    <p key={item} className="border-b border-[rgba(184,135,92,0.24)] py-5 text-base font-medium text-[#1E1E1E]">
                      <span className="mr-4 font-['Playfair_Display'] text-2xl text-[#B8875C]">{String(groupIndex * 3 + index + 1).padStart(2, "0")}</span>
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </SectionBackground>
      )}

      {processHeading && process && (
        <SectionBackground className="py-16 sm:py-22" variant="soft" backgroundType="property">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">{processHeading}</h2>
            <div className="mt-10 grid gap-0 border-t border-[rgba(184,135,92,0.24)] lg:grid-cols-4">
              {process.map(([title, desc], index) => (
                <article key={title} className="relative border-b border-[rgba(184,135,92,0.24)] py-7 lg:border-r lg:px-6 lg:last:border-r-0">
                  <span className="font-['Playfair_Display'] text-5xl leading-none text-[#B8875C]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-['Playfair_Display'] text-2xl leading-tight text-[#1E1E1E]">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.75] text-[#4A403A]">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </SectionBackground>
      )}

      {faqVariant && <ServiceFAQ variant={faqVariant} />}

      <CTASection
        title={data.cta.title}
        text={data.cta.text}
        primary={{ label: data.cta.button, href: "/contact" }}
        backgroundType={backgroundType}
      />
    </div>
  );
}
