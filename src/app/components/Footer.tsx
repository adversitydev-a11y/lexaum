import { Link } from "react-router";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  ChevronRight,
  Diamond,
} from "lucide-react";
import logo from "../../imports/new logo.png";
import { siteContent } from "../content/siteContent";

const COMPANY_LINKS = siteContent.footer.companyLinks;
const SERVICE_LINKS = siteContent.footer.serviceLinks;
const SOCIAL_ICONS = { LinkedIn: Linkedin, X: Twitter, Facebook };

export function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden border-t border-[rgba(184,135,92,0.25)] bg-[#FFFDF8]">
        <div className="relative mx-auto max-w-[1500px] px-4 pb-7 pt-16 sm:px-6 lg:px-8 lg:pb-9 lg:pt-[66px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_1fr_1.25fr] lg:gap-12 xl:gap-16">
            <div className="text-center md:text-left">
              <img
                src={logo}
                alt="Lexaum LLP"
                className="mx-auto mb-4 h-auto w-[224px] max-w-full object-contain md:mx-0 lg:w-[248px]"
              />
              <p className="mx-auto max-w-[360px] text-[16px] leading-[1.6] text-[#4A403A] md:mx-0 lg:text-[17px]">
                {siteContent.footer.description}
              </p>
              <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
                {siteContent.footer.socialLinks.map(({ label, href }) => {
                  const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
                  return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(184,135,92,0.34)] bg-white/80 text-[#B8875C] shadow-[0_12px_28px_rgba(42,30,23,0.06)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#B8875C] hover:bg-[#B8875C] hover:text-white hover:shadow-[0_16px_32px_rgba(184,135,92,0.22)]"
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </a>
                )})}
              </div>
            </div>

            <div>
              <FooterHeading>Company</FooterHeading>
              <ul className="mt-5 space-y-3">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-2 text-[16px] text-[#4A403A] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:translate-x-1 hover:text-[#B8875C] lg:text-[17px]"
                    >
                      <ChevronRight size={17} className="text-[#B8875C]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Services</FooterHeading>
              <ul className="mt-5 space-y-3">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-start gap-2 text-[16px] leading-snug text-[#4A403A] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:translate-x-1 hover:text-[#B8875C] lg:text-[17px]"
                    >
                      <ChevronRight size={17} className="mt-1 shrink-0 text-[#B8875C]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Contact</FooterHeading>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-4">
                  <MapPin size={22} strokeWidth={1.8} className="mt-1 shrink-0 text-[#B8875C]" />
                  <span className="text-[15px] leading-[1.55] text-[#4A403A] lg:text-[16px]">
                    {siteContent.footer.contact.address}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={21} strokeWidth={1.8} className="shrink-0 text-[#B8875C]" />
                  <a href={siteContent.footer.contact.phoneHref} className="text-[15px] text-[#4A403A] transition-colors hover:text-[#B8875C] lg:text-[16px]">
                    {siteContent.footer.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={21} strokeWidth={1.8} className="mt-1 shrink-0 text-[#B8875C]" />
                  <span className="space-y-0.5 text-[15px] leading-[1.55] text-[#4A403A] lg:text-[16px]">
                    {siteContent.footer.contact.emails.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="block transition-colors hover:text-[#B8875C]">{email}</a>
                    ))}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Clock size={21} strokeWidth={1.8} className="shrink-0 text-[#B8875C]" />
                  <span className="text-[15px] text-[#4A403A] lg:text-[16px]">{siteContent.footer.contact.workingHours}</span>
                </li>
              </ul>

            </div>
          </div>

          <div className="mt-9 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(184,135,92,0.55)]" />
            <Diamond size={14} className="fill-[#B8875C]/20 text-[#B8875C]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(184,135,92,0.55)]" />
          </div>

          <div className="mx-auto mt-5 max-w-[1200px] text-center">
            <p className="text-sm text-[#6F625B]">
              &copy; {siteContent.footer.copyright} Designed by{" "}
              <a
                href={siteContent.footer.designedByHref}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#B8875C] transition-colors hover:text-[#9F7048]"
              >
                {siteContent.footer.designedBy}
              </a>
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6F625B]">
              {siteContent.footer.legalLinks.map((link, index) => (
                <span key={link.href} className="contents">
                  {index > 0 && <span className="text-[#B8875C]">|</span>}
                  <Link to={link.href} className="transition-colors hover:text-[#B8875C]">{link.label}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

function FooterHeading({ children }: { children: string }) {
  return (
    <div>
      <h4 className="font-['Playfair_Display'] text-[27px] leading-tight text-[#1E1E1E] lg:text-[29px]">
        {children}
      </h4>
      <div className="mt-3 flex max-w-[190px] items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-[#B8875C] to-transparent" />
        <Diamond size={9} className="fill-[#B8875C]/20 text-[#B8875C]" />
      </div>
    </div>
  );
}
