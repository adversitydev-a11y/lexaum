import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  Eye,
  Heart,
  Star,
  Target,
  CheckCircle,
  Scale,
  Briefcase,
  Globe,
} from "lucide-react";
import {
  BenefitCard,
  CTASection,
  FeatureCard,
  GoldDivider,
  IconBadge,
  InfoCard,
  MotionGrid,
  PageHero,
  PrimaryButton,
  SectionBackground,
  SectionLabel,
} from "../components/InnerPageUI";
import aboutHeroBackground from "../../imports/about baground.png";
import aboutOfficeImage from "../../imports/about section image.png";
import { siteContent } from "../content/siteContent";

const ABOUT_CONTENT = siteContent.about;
const VALUE_ICONS = [Shield, Star, Eye, Heart];
const VALUES = ABOUT_CONTENT.values.items.map((value, index) => ({ ...value, icon: VALUE_ICONS[index] }));

const WHY_CHOOSE_ICONS = [Shield, Globe, Scale, Eye, CheckCircle, Star];
const WHY_CHOOSE_ITEMS = ABOUT_CONTENT.whyChoose.items.map((item, index) => ({
  ...item,
  icon: WHY_CHOOSE_ICONS[index],
}));

export function About() {
  const content = ABOUT_CONTENT;

  return (
    <div className="overflow-hidden bg-[#FFFDF8]">
      {/* Hero Banner */}
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        secondaryCta={content.hero.secondaryCta}
        backgroundImage={aboutHeroBackground}
        backgroundType="emblem"
      />

      {/* About Lexaum LLP */}
      <SectionBackground className="py-20 sm:py-24 lg:py-[110px]" variant="cream" backgroundType="document">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Side */}
            <div className="lg:col-span-7 space-y-6">
              <SectionLabel>{content.overview.label}</SectionLabel>
              <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">
                {content.overview.titleBefore} <span className="text-[#B8875C]">{content.overview.titleMiddle}</span> {content.overview.titleAfter} <span className="text-[#B8875C]">{content.overview.titleEnd}</span>
              </h2>
              <GoldDivider className="my-6 justify-start" />
              <p className="text-lg leading-[1.75] text-[#4A403A]">
                {content.overview.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {content.overview.cards.map(({ title, desc }, index) => {
                  const CardIcon = [Shield, CheckCircle, Briefcase, Globe][index];
                  return (
                    <div key={title} className="space-y-2">
                      <div className="flex items-center gap-2 text-[#B8875C]">
                        <CardIcon size={20} />
                        <h3 className="font-semibold text-lg text-[#1E1E1E]">{title}</h3>
                      </div>
                      <p className="text-sm text-[#4A403A] leading-relaxed">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#B8875C]/10 to-transparent rounded-[24px] -z-10" />
              <div className="relative h-[480px] overflow-hidden rounded-[20px] border border-[rgba(184,135,92,0.22)] shadow-[0_20px_50px_rgba(42,30,23,0.12)]">
                <img
                  src={aboutOfficeImage}
                  alt={content.overview.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2A1E17]/22 via-[#B8875C]/10 to-[#FFFDF8]/16" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E17]/12 via-transparent to-[#FFFDF8]/10" />
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Vision & Mission */}
      <SectionBackground className="py-20 sm:py-24" variant="ivory" backgroundType="legal">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>{content.commitment.label}</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">
              <span className="text-[#B8875C]">{content.commitment.titleFirst}</span> & <span className="text-[#B8875C]">{content.commitment.titleSecond}</span>
            </h2>
            <GoldDivider className="mt-6" />
          </div>
          <MotionGrid className="grid gap-8 md:grid-cols-2">
            <FeatureCard icon={Eye} title={content.commitment.visionTitle} className="min-h-[220px]">
              <p className="text-base leading-[1.75] text-[#4A403A]">
                {content.commitment.visionText}
              </p>
            </FeatureCard>
            <FeatureCard icon={Target} title={content.commitment.missionTitle} className="min-h-[220px]">
              <p className="text-base leading-[1.75] text-[#4A403A]">
                {content.commitment.missionText}
              </p>
            </FeatureCard>
          </MotionGrid>
        </div>
      </SectionBackground>

      {/* Core Values */}
      <SectionBackground className="py-20 sm:py-24 lg:py-[110px]" variant="cream" backgroundType="emblem">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>{content.values.label}</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">
              <span className="text-[#B8875C]">{content.values.title}</span>
            </h2>
            <GoldDivider className="mt-6" />
          </div>
          <MotionGrid className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {VALUES.map(({ icon, label, desc }) => (
              <FeatureCard
                key={label}
                icon={icon}
                title={label}
                className="p-4 sm:p-7 [&>div:first-child]:mb-3 [&>div:first-child]:h-12 [&>div:first-child]:w-12 sm:[&>div:first-child]:mb-5 sm:[&>div:first-child]:h-16 sm:[&>div:first-child]:w-16 [&>div:first-child>svg]:h-5 [&>div:first-child>svg]:w-5 sm:[&>div:first-child>svg]:h-[27px] sm:[&>div:first-child>svg]:w-[27px] [&>div:nth-of-type(2)]:my-3 sm:[&>div:nth-of-type(2)]:my-5 [&>h3]:text-base sm:[&>h3]:text-2xl"
              >
                <p className="text-xs leading-relaxed text-[#4A403A] sm:text-sm sm:leading-[1.75]">{desc}</p>
              </FeatureCard>
            ))}
          </MotionGrid>
        </div>
      </SectionBackground>

      {/* Why Choose Lexaum LLP */}
      <SectionBackground className="py-20 sm:py-24" variant="soft" backgroundType="document">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>{content.whyChoose.label}</SectionLabel>
              <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">
                {content.whyChoose.titlePrefix} <span className="text-[#B8875C]">{content.whyChoose.highlightedTitle}</span>
              </h2>
            <GoldDivider className="mt-6" />
          </div>
          <MotionGrid className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {WHY_CHOOSE_ITEMS.map(({ icon: Icon, title, desc }) => (
              <FeatureCard
                key={title}
                icon={Icon}
                title={title}
                className="p-4 text-center sm:p-7 [&>div:first-child]:mx-auto [&>div:first-child]:mb-3 [&>div:first-child]:h-12 [&>div:first-child]:w-12 sm:[&>div:first-child]:mb-5 sm:[&>div:first-child]:h-16 sm:[&>div:first-child]:w-16 [&>div:first-child>svg]:h-5 [&>div:first-child>svg]:w-5 sm:[&>div:first-child>svg]:h-[27px] sm:[&>div:first-child>svg]:w-[27px] [&>div:nth-of-type(2)]:my-3 [&>div:nth-of-type(2)]:justify-center sm:[&>div:nth-of-type(2)]:my-5 [&>h3]:text-base sm:[&>h3]:text-2xl"
              >
                <p className="mx-auto max-w-[280px] text-xs leading-relaxed text-[#4A403A] sm:text-sm">{desc}</p>
              </FeatureCard>
            ))}
          </MotionGrid>
        </div>
      </SectionBackground>

      {/* Final Call-to-Action */}
      <CTASection
        title={content.cta.title}
        text={content.cta.text}
        primary={content.cta.primary}
        secondary={content.cta.secondary}
        backgroundType="cta"
      />
    </div>
  );
}
