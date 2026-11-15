import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import {
  ContactFormCard,
  GoldDivider,
  IconBadge,
  PageHero,
  SectionBackground,
  SectionLabel,
} from "../components/InnerPageUI";
import contactHeroBackground from "../../imports/contact baground.png";
import { siteContent } from "../content/siteContent";
import { sendContactEmail } from "../../services/emailService";

const inputClass =
  "w-full rounded-[10px] border border-[rgba(184,135,92,0.24)] bg-[#F8F3EA] px-4 py-3.5 text-sm text-[#1E1E1E] outline-none transition-colors placeholder:text-[#6F625B] focus:border-[#B8875C] focus:bg-[#FFFDF8]";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  if (!phone.trim()) return false;
  if (!/^(\+91)?[0-9]+$/.test(phone.trim())) return false;
  return phone.replace(/\D/g, "").length >= 10;
}

function validateContactForm(data: ContactFormData): string | null {
  if (data.name.trim().length < 2) return "Please enter a valid name.";
  if (!isValidEmail(data.email.trim())) return "Please enter a valid email address.";
  if (!isValidPhone(data.phone)) return "Please enter a valid phone number.";
  return null;
}

export function Contact() {
  const content = siteContent.contact;
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    const validationError = validateContactForm(formData);
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setIsSending(true);

    try {
      await sendContactEmail({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim(),
        time: new Date().toLocaleString("en-IN"),
      });

      if (import.meta.env.DEV) {
        console.log("Email sent successfully");
      }

      setFormData(initialFormData);
      setSubmitted(true);
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="overflow-hidden bg-[#FFFDF8]">
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        supportingLine={content.hero.supportingLine}
        backgroundImage={contactHeroBackground}
        backgroundType="contact"
      />

      <SectionBackground className="py-20 sm:py-24 lg:py-[110px]" variant="cream" backgroundType="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="space-y-7">
              <div>
                <SectionLabel>{content.officeLabel}</SectionLabel>
                <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E] sm:text-5xl">
                  {content.officeTitle}
                </h2>
                <GoldDivider className="my-5 justify-start" />
                <p className="text-sm leading-relaxed text-[#4A403A]">
                  {content.officeIntro}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {content.details.map(({ title, content, desc, link }, index) => {
                  const icon = [MapPin, Phone, Mail, Clock][index];
                  return (
                    <div
                      key={title}
                      className="flex min-h-[132px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[rgba(184,135,92,0.25)] bg-white/90 p-5 text-center shadow-[0_16px_38px_rgba(42,30,23,0.06)]"
                    >
                      <IconBadge icon={icon} className="h-11 w-11 [&>svg]:h-5 [&>svg]:w-5" />
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8875C]">{title}</p>
                        {link ? (
                          <a href={link} className="text-sm text-[#1E1E1E] transition-colors hover:text-[#B8875C]">
                            {content}
                          </a>
                        ) : (
                          <p className="text-sm leading-relaxed text-[#1E1E1E]">{content}</p>
                        )}
                        {desc && (
                          <p className="mt-2 text-xs leading-relaxed text-[#6F625B]">{desc}</p>
                        )}
                      </div>
                    </div>
                )})}
              </div>

            </div>

            <div id="enquiry">
              <ContactFormCard>
                <SectionLabel>{content.form.sectionLabel}</SectionLabel>
                <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#1E1E1E]">
                  {content.form.titlePrefix} <span className="text-[#B8875C]">{content.form.highlightedTitle}</span>
                </h2>
                <GoldDivider className="my-6 justify-start" />
                <p className="mb-8 text-sm leading-relaxed text-[#4A403A]">
                  {content.form.intro}
                </p>

                {submitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle size={56} className="mx-auto mb-5 text-[#B8875C]" />
                    <h3 className="font-['Playfair_Display'] text-2xl text-[#1E1E1E]">{content.form.successTitle}</h3>
                    <p className="mt-3 text-sm text-[#4A403A]">{content.form.successText}</p>
                    <Link
                      to="/"
                      className="premium-button group mx-auto mt-7 inline-flex h-10 min-w-[180px] items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
                    >
                      {content.form.successButton}
                      <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {formError && (
                      <p className="text-center text-sm font-medium text-[#9F7048]">{formError}</p>
                    )}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#1E1E1E]">{content.form.fields.name}</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={content.form.placeholders.name}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#1E1E1E]">{content.form.fields.email}</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={content.form.placeholders.email}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#1E1E1E]">{content.form.fields.phone}</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={content.form.placeholders.phone}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="service-required" className="mb-2 block text-sm font-medium text-[#1E1E1E]">{content.form.fields.service}</label>
                        <select
                          id="service-required"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className={inputClass}
                        >
                          <option value="">{content.form.placeholders.service}</option>
                          {content.form.serviceOptions.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#1E1E1E]">{content.form.fields.message}</label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={content.form.placeholders.message}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <p className="text-xs leading-relaxed text-[#6F625B]">
                      {content.form.consent}
                    </p>
                    <button
                      type="submit"
                      disabled={isSending}
                      className="premium-button group mx-auto flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
                    >
                      {isSending ? "Sending..." : content.form.submit}
                      <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </ContactFormCard>
            </div>
          </div>
        </div>
      </SectionBackground>

    </div>
  );
}
