"use client";

import { useState } from "react";
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Check if any book sub-route is active
  const isBooksActive = () => {
    return bookCategories.some((cat) => isActive(cat.href)) || pathname.startsWith("/childrens-books") || pathname.startsWith("/parenting-books") || pathname.startsWith("/medical-books") || pathname.startsWith("/audio-books");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
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
            sizes="(min-width: 768px) 136px, 68px"
            quality={90}
            className="h-10 w-[68px] object-contain md:h-20 md:w-[136px] drop-shadow-none"
          />
        </Link>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden items-stretch self-stretch md:flex">
          {topNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center border px-4 text-sm font-medium transition ${
                isActive(item.href)
                  ? "border-[#0B35C3] bg-[#0B35C3] text-white"
                  : "border-slate-200 text-slate-700 hover:border-[#0B35C3] hover:text-[#0B35C3]"
              }`}
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 92% 100%, 8% 100%)" }}
            >
              <span className="flex items-center gap-1.5">{item.icon} {item.label}</span>
            </Link>
          ))}

          {/* Books Dropdown */}
          <div
            className="relative flex items-stretch"
            onMouseEnter={() => setBooksOpen(true)}
            onMouseLeave={() => setBooksOpen(false)}
          >
            <Link
              href="/childrens-books"
              className={`flex items-center border px-4 text-sm font-medium transition ${
                isBooksActive()
                  ? "border-[#0B35C3] bg-[#0B35C3] text-white"
                  : "border-slate-200 text-slate-700 hover:border-[#0B35C3] hover:text-[#0B35C3]"
              }`}
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 92% 100%, 8% 100%)" }}
            >
              <span className="flex items-center gap-1.5">
                <FaBook className="h-3.5 w-3.5" />
                Books <FaChevronDown className="ml-1 h-3 w-3" />
              </span>
            </Link>

            {/* Dropdown Menu */}
            {booksOpen && (
              <div
                className="absolute top-full left-0 mt-0.5 flex w-56 min-w-[220px] flex-col rounded-lg border border-slate-200 bg-white py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                style={{ zIndex: 100 }}
              >
                {bookCategories.map((cat) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    onClick={() => setBooksOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm transition ${
                      isActive(cat.href)
                        ? "bg-[#0B35C3] text-white"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0B35C3]"
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
            className="flex items-center border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:border-[#0B35C3] hover:text-[#0B35C3]"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 92% 100%, 8% 100%)" }}
          >
            <span className="flex items-center gap-1.5">{programmingLink.icon} {programmingLink.label}</span>
          </a>

          {/* Contact */}
          <a
            href={contactLink.href}
            className="flex items-center border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:border-[#0B35C3] hover:text-[#0B35C3]"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 92% 100%, 8% 100%)" }}
          >
            <span className="flex items-center gap-1.5">{contactLink.icon} {contactLink.label}</span>
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
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
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
                              ? "bg-[#0B35C3] text-white"
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
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  <span className="flex items-center gap-2">{item.icon} {item.label}</span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive(item.href!)
                      ? "bg-[#0B35C3] text-white"
                      : "text-slate-700 hover:bg-slate-100"
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
