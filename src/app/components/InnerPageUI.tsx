import { Link } from "react-router";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle,
  Diamond,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.02,
    },
  },
};

const premiumEase = "easeOut" as const;

export function SectionBackground({
  children,
  className = "",
  variant = "ivory",
  watermark = true,
  backgroundImage,
  id,
  backgroundType = "legal",
}: {
  children: ReactNode;
  className?: string;
  variant?: "ivory" | "cream" | "soft";
  watermark?: boolean;
  backgroundImage?: string;
  id?: string;
  backgroundType?: "legal" | "document" | "global" | "property" | "corporate" | "leadership" | "contact" | "cta" | "emblem";
}) {
  const base = "bg-[#FFFDF8]";

  const backgroundStyle: CSSProperties | undefined = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : undefined;

  return (
    <section
      id={id}
      className={`relative -mt-px overflow-hidden ${base} ${className}`}
      style={backgroundStyle}
    >
      {backgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8]/96 via-[#FFFDF8]/84 to-[#FFFDF8]/58" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8]/92 via-[#FFFDF8]/18 to-[#FFFDF8]/76" />
        </>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-4">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B8875C]" />
      <span className="text-xs font-semibold uppercase tracking-[0.42em] text-[#B8875C]">
        {children}
      </span>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B8875C]" />
    </div>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#B8875C]" />
      <Diamond size={11} className="fill-[#B8875C]/20 text-[#B8875C]" />
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#B8875C]" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
  secondaryCta,
  supportingLine,
  backgroundImage,
  backgroundType = "legal",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  supportingLine?: string;
  backgroundImage?: string;
  backgroundType?: "legal" | "document" | "global" | "property" | "corporate" | "leadership" | "contact" | "cta" | "emblem";
}) {
  return (
    <SectionBackground
      className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-[82px] lg:pb-[92px]"
      backgroundImage={backgroundImage}
      backgroundType={backgroundType}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.55, ease: premiumEase }}
        className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mx-auto max-w-4xl font-['Playfair_Display'] text-4xl leading-[1.08] text-[#1E1E1E] sm:text-5xl lg:text-[58px]">
          {title}
        </h1>
        <GoldDivider className="mt-5" />
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-[1.6] text-[#4A403A] sm:text-xl">
          {subtitle}
        </p>
        {(cta || secondaryCta) && (
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {cta && <PrimaryButton to={cta.href}>{cta.label}</PrimaryButton>}
            {secondaryCta && <SecondaryButton to={secondaryCta.href}>{secondaryCta.label}</SecondaryButton>}
          </div>
        )}
        {supportingLine && (
          <p className="mx-auto mt-5 max-w-3xl border-l border-[#B8875C]/40 pl-4 text-left text-sm leading-relaxed text-[#1E1E1E] sm:text-center sm:border-l-0 sm:pl-0">
            {supportingLine}
          </p>
        )}
      </motion.div>
    </SectionBackground>
  );
}

export function PrimaryButton({ to, children }: { to: string; children: ReactNode }) {
  const className =
    "premium-button group inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]";

  if (to.startsWith("#") || to.startsWith("tel:") || to.startsWith("mailto:") || to.startsWith("http")) {
    return (
      <a href={to} className={className}>
        {children}
        <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
      <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function SecondaryButton({ to, children }: { to: string; children: ReactNode }) {
  const className =
    "inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded border border-[rgba(184,135,92,0.42)] bg-white/70 px-5 py-2.5 text-center text-sm font-medium text-[#1E1E1E] shadow-[0_12px_30px_rgba(42,30,23,0.05)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-[#B8875C] hover:bg-[#FAF4EA] hover:text-[#9F7048]";

  if (to.startsWith("#") || to.startsWith("tel:") || to.startsWith("mailto:") || to.startsWith("http")) {
    return <a href={to} className={className}>{children}</a>;
  }

  return <Link to={to} className={className}>{children}</Link>;
}

export function IconBadge({ icon: Icon, className = "" }: { icon: LucideIcon; className?: string }) {
  return (
    <div className={`flex h-16 w-16 shrink-0 transform-gpu items-center justify-center rounded-full border border-[rgba(184,135,92,0.26)] bg-[#FFFDF8] text-[#B8875C] shadow-[0_12px_28px_rgba(42,30,23,0.07)] transition-transform duration-300 ease-out group-hover:scale-105 ${className}`}>
      <Icon size={27} strokeWidth={1.8} />
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
  className = "",
}: {
  icon?: LucideIcon;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: premiumEase }}
      className={`group transform-gpu rounded-[20px] border border-[rgba(184,135,92,0.25)] bg-white/90 p-7 text-center shadow-[0_20px_48px_rgba(42,30,23,0.07),0_5px_0_rgba(184,135,92,0.06)] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-[rgba(184,135,92,0.5)] ${className}`}
    >
      {icon && <IconBadge icon={icon} className="mx-auto mb-5" />}
      <h3 className="font-['Playfair_Display'] text-2xl leading-tight text-[#1E1E1E]">
        {title}
      </h3>
      <GoldDivider className="my-5 [&>div]:w-12" />
      {children}
    </motion.div>
  );
}

export function InfoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.48, ease: premiumEase }}
      className={`transform-gpu rounded-[20px] border border-[rgba(184,135,92,0.25)] bg-white/90 p-7 text-center shadow-[0_18px_44px_rgba(42,30,23,0.07)] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-[rgba(184,135,92,0.44)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ContactFormCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: premiumEase }}
      className={`transform-gpu rounded-[24px] border border-[rgba(184,135,92,0.28)] bg-white/92 p-7 shadow-[0_26px_64px_rgba(42,30,23,0.09),0_6px_0_rgba(184,135,92,0.08)] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(184,135,92,0.42)] sm:p-9 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ServiceCard({
  icon,
  title,
  intro,
  children,
  image,
}: {
  icon: LucideIcon;
  title: string;
  intro?: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.52, ease: premiumEase }}
      className="group transform-gpu overflow-hidden rounded-[22px] border border-[rgba(184,135,92,0.28)] bg-white/90 shadow-[0_24px_58px_rgba(42,30,23,0.08)] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-[rgba(184,135,92,0.5)]"
    >
      {image && (
        <div className="h-56 overflow-hidden">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="p-7 text-center lg:p-8">
        <IconBadge icon={icon} className={image ? "mx-auto -mt-16 mb-6 bg-white" : "mx-auto mb-6"} />
        <h2 className="font-['Playfair_Display'] text-3xl leading-tight text-[#1E1E1E]">
          {title}
        </h2>
        <GoldDivider className="my-5 [&>div]:w-14" />
        {intro && <p className="text-[15px] leading-[1.75] text-[#4A403A]">{intro}</p>}
        {children}
      </div>
    </motion.article>
  );
}

export function BenefitCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.45, ease: premiumEase }}
      className="group flex transform-gpu flex-col items-center justify-center gap-3 rounded-[16px] border border-[rgba(184,135,92,0.22)] bg-white/90 p-5 text-center shadow-[0_14px_32px_rgba(42,30,23,0.06)] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-[rgba(184,135,92,0.44)]"
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(184,135,92,0.25)] bg-[#FFFDF8] text-[#B8875C] shadow-[0_8px_18px_rgba(42,30,23,0.06)] transition-transform duration-300 group-hover:scale-105">
        <CheckCircle size={16} strokeWidth={1.8} />
      </span>
      <span className="text-[15px] leading-relaxed text-[#1E1E1E]">{children}</span>
    </motion.div>
  );
}

export function CTASection({
  title,
  text,
  primary,
  secondary,
  backgroundType = "cta",
}: {
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  backgroundType?: "legal" | "document" | "global" | "property" | "corporate" | "leadership" | "contact" | "cta" | "emblem";
}) {
  return (
    <SectionBackground className="py-16 sm:py-20" variant="ivory" backgroundType={backgroundType}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.52, ease: premiumEase }}
        className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">
          {title}
        </h2>
        <GoldDivider className="mt-6" />
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.7] text-[#4A403A]">
          {text}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryButton to={primary.href}>{primary.label}</PrimaryButton>
          {secondary && <SecondaryButton to={secondary.href}>{secondary.label}</SecondaryButton>}
        </div>
      </motion.div>
    </SectionBackground>
  );
}

export function MotionGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.52, ease: premiumEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { fadeUp };
