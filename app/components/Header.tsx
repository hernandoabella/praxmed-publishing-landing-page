"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaHeartbeat,
  FaLaptop,
  FaNewspaper,
  FaHeadphones,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

// Top-level nav items (non-book items)
const topNavItems = [
  { href: "/", label: "Home", icon: <FaHome className="h-3.5 w-3.5" /> },
  { href: "/blog", label: "Blog", icon: <FaNewspaper className="h-3.5 w-3.5" /> },
];

// Book categories grouped under "Books" dropdown
const bookCategories = [
  { href: "/childrens-books", label: "Children's Books", icon: <FaBook className="h-3.5 w-3.5" /> },
  { href: "/parenting-books", label: "Parenting Books", icon: <FaUsers className="h-3.5 w-3.5" /> },
  { href: "/medical-books", label: "Medical Books", icon: <FaHeartbeat className="h-3.5 w-3.5" /> },
  { href: "/audio-books", label: "Audio Books", icon: <FaHeadphones className="h-3.5 w-3.5" /> },
];

// Programming Books (external link)
const programmingLink = {
  href: "https://hernandoabella.com",
  label: "Programming Books",
  icon: <FaLaptop className="h-3.5 w-3.5" />,
  external: true,
};

// Contact (mailto link)
const contactLink = {
  href: "mailto:contact@praxmedpublishing.com",
  label: "Contact",
  icon: <FaEnvelope className="h-3.5 w-3.5" />,
};

// All nav items for mobile menu
const mobileNavItems: Array<{
  href?: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
  children?: Array<{ href: string; label: string; icon: ReactNode }>;
}> = [
  ...topNavItems,
  {
    label: "Books",
    icon: <FaBook className="h-3.5 w-3.5" />,
    children: bookCategories,
  },
  programmingLink,
  contactLink,
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 96) {
        setHidden(true);
        setBooksOpen(false);
        setMenuOpen(false);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Check if any book sub-route is active
  const isBooksActive = () => {
    return bookCategories.some((cat) => isActive(cat.href)) || pathname.startsWith("/childrens-books") || pathname.startsWith("/parenting-books") || pathname.startsWith("/medical-books") || pathname.startsWith("/audio-books");
  };

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          {/* width/height match the real 2800x1653 aspect ratio, and `sizes`
              makes next/image serve a sharp resolution for retina/desktop
              (72x72 used to cap the served width at ~96px, which looked blurry) */}
          <Image
            src="/logo.png"
            alt="PRAXMED Publishing logo"
            width={560}
            height={330}
            sizes="(min-width: 768px) 196px, 112px"
            quality={90}
            className="h-14 w-auto object-contain md:h-20"
          />
        </Link>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {topNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(item.href)
                  ? "bg-[var(--brand-teal)]/10 text-[var(--brand-teal)]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-[var(--brand-teal)]"
              }`}
            >
              {item.icon} {item.label}
            </Link>
          ))}

          {/* Books Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBooksOpen(true)}
            onMouseLeave={() => setBooksOpen(false)}
          >
            <Link
              href="/childrens-books"
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                isBooksActive()
                  ? "bg-[var(--brand-teal)]/10 text-[var(--brand-teal)]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-[var(--brand-teal)]"
              }`}
            >
              <FaBook className="h-3.5 w-3.5" />
              Books <FaChevronDown className="ml-0.5 h-3 w-3" />
            </Link>

            {/* Dropdown Menu */}
            {booksOpen && (
              <div className="absolute left-0 top-full z-[100] mt-1 flex w-56 min-w-[220px] flex-col rounded-2xl border border-slate-200 bg-white p-1.5 shadow-[0_12px_40px_rgba(21,48,71,0.14)]">
                {bookCategories.map((cat) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    onClick={() => setBooksOpen(false)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                      isActive(cat.href)
                        ? "bg-[var(--brand-teal)]/10 text-[var(--brand-teal)]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[var(--brand-teal)]"
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Programming Books (external) */}
          <a
            href={programmingLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[var(--brand-teal)]"
          >
            {programmingLink.icon} {programmingLink.label}
          </a>

          {/* Contact */}
          <a
            href={contactLink.href}
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[var(--brand-teal)]"
          >
            {contactLink.icon} {contactLink.label}
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-2">
            {mobileNavItems.map((item) =>
              "children" in item ? (
                <div key={item.label}>
                  <button
                    onClick={() => setBooksOpen(!booksOpen)}
                    className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <FaChevronDown className={`h-3 w-3 transition-transform ${booksOpen ? "transform rotate-180" : ""}`} />
                  </button>
                  {booksOpen && (
                    <div className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-slate-200 pl-4">
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                            isActive(child.href)
                              ? "bg-[var(--brand-teal)]/10 text-[var(--brand-teal)]"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <span className="flex items-center gap-2">{child.icon} {child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                >
                  <span className="flex items-center gap-2">{item.icon} {item.label}</span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive(item.href!)
                      ? "bg-[var(--brand-teal)]/10 text-[var(--brand-teal)]"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span className="flex items-center gap-2">{item.icon} {item.label}</span>
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
