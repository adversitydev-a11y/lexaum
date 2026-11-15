import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../imports/new logo.png";
import { siteContent } from "../content/siteContent";

const NAV_ITEMS = siteContent.nav.items;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHomePage = location.pathname === "/";
  const floatingOnHero = isHomePage && !scrolled && !mobileOpen;
  const solidHeader = scrolled || mobileOpen || !isHomePage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <div className={isHomePage ? "fixed left-0 right-0 top-0 z-50" : "sticky top-0 z-50"}>
      <header
        className={`transition-[background-color,border-color,box-shadow] duration-300 ${
          solidHeader
            ? "bg-[#FFFDF8]/98 shadow-[0_8px_30px_rgba(42,30,23,0.08)]"
            : "bg-transparent"
        } ${solidHeader ? "border-b border-[rgba(184,135,92,0.2)]" : "border-b border-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[108px]">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="Lexaum LLP"
                className="h-[70px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className={`flex items-center gap-1 rounded transition-colors ${
                        isActive(item.href)
                          ? "text-[#B8875C]"
                          : "text-[#2A1E17] hover:text-[#B8875C]"
                      }`}
                    >
                      <Link
                        to={item.href}
                        data-active={isActive(item.href)}
                        className="premium-nav-link px-3 py-2 text-sm"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="transform-gpu py-2 pr-3 transition-transform duration-300 hover:scale-110"
                        aria-label={`${item.label} menu`}
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                      >
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {openDropdown === item.label && (
                      <div className="animate-premium-dropdown absolute top-full left-0 z-[80] mt-2 w-64 border border-[rgba(184,135,92,0.35)] bg-[#FFFDF8] py-2 shadow-[0_22px_50px_rgba(42,30,23,0.20)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center px-5 py-3 text-sm font-semibold leading-snug text-[#1E1E1E] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:translate-x-1 hover:bg-[#FAF4EA] hover:text-[#9F7048]"
                          >
                            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#B8875C]" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    data-active={isActive(item.href)}
                    className={`premium-nav-link px-3 py-2 text-sm transition-colors rounded ${
                      isActive(item.href)
                        ? "text-[#B8875C]"
                        : "text-[#2A1E17] hover:text-[#B8875C]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="premium-button hidden h-10 min-w-[180px] transform-gpu items-center justify-center rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048] lg:inline-flex"
              >
                {siteContent.nav.cta}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-[#2A1E17] hover:text-[#B8875C] transition-colors p-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="animate-premium-mobile-menu lg:hidden bg-[#F7F1E8] border-t border-[rgba(184,135,92,0.2)] px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="flex items-center justify-between px-3 py-2.5 text-sm text-[#2A1E17]">
                    <Link
                      to={item.href}
                      className="transition-[transform,background-color,color,border-color] duration-300 ease-out hover:translate-x-1 hover:text-[#B8875C]"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="transform-gpu p-1 transition-[transform,background-color,color,border-color] duration-300 ease-out hover:scale-110 hover:text-[#B8875C]"
                      aria-label={`${item.label} menu`}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-[rgba(184,135,92,0.2)] pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block py-2 text-sm text-[#3D3D3D] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:translate-x-1 hover:text-[#B8875C]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-3 py-2.5 text-sm transition-[transform,background-color,color,border-color] duration-300 ease-out hover:translate-x-1 ${
                    isActive(item.href) ? "text-[#B8875C]" : "text-[#2A1E17] hover:text-[#B8875C]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-[rgba(184,135,92,0.2)]">
              <Link
                to="/contact"
                className="premium-button flex h-10 w-full transform-gpu items-center justify-center rounded bg-[#B8875C] px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(184,135,92,0.34)] transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:bg-[#9F7048]"
              >
                {siteContent.nav.cta}
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
