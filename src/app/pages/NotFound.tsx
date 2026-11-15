import { Link } from "react-router";
import { ArrowRight, Scale } from "lucide-react";
import { siteContent } from "../content/siteContent";

export function NotFound() {
  const content = siteContent.notFound;

  return (
    <div className="min-h-[70vh] bg-[#FFFDF8] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-[rgba(184,135,92,0.1)] border border-[rgba(184,135,92,0.3)] flex items-center justify-center mx-auto mb-6">
          <Scale size={36} className="text-[#B8875C]" />
        </div>
        <p className="font-['Playfair_Display'] text-7xl text-[#B8875C] mb-4">{content.code}</p>
        <h1 className="font-['Playfair_Display'] text-3xl text-[#2A1E17] mb-4">{content.title}</h1>
        <p className="text-[#3D3D3D] mb-8 max-w-sm mx-auto">{content.text}</p>
        <Link
          to="/"
          className="inline-flex h-10 min-w-[180px] transform-gpu items-center justify-center gap-2 rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
        >
          {content.cta} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
