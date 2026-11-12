"use client";

import { useEffect, useRef, useState } from "react";
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
  FaHeadphones,
  FaChevronDown,
  FaCompass,
  FaGraduationCap,
  FaFolderOpen,
} from "react-icons/fa";

// Top-level nav items (non-book items)
const topNavItems = [
  { href: "/", label: "Home", icon: <FaHome className="h-3.5 w-3.5" /> },
  { href: "/discover", label: "Discover", icon: <FaCompass className="h-3.5 w-3.5" /> },
  { href: "/learn", label: "Learn", icon: <FaGraduationCap className="h-3.5 w-3.5" /> },
  { href: "/resources", label: "Resources", icon: <FaFolderOpen className="h-3.5 w-3.5" /> },
];

// Book categories grouped under "Books" dropdown
const bookCategories = [
  { href: "/book-catalog", label: "Book Catalog", icon: <FaBook className="h-3.5 w-3.5" /> },
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



// All nav items for mobile menu
const mobileNavItems: Array<{
  href?: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
  children?: Array<{ href: string; label: string; icon: ReactNode; external?: boolean }>;
}> = [
  ...topNavItems,
  {
    label: "Books",
    icon: <FaBook className="h-3.5 w-3.5" />,
    children: [...bookCategories, { href: programmingLink.href, label: programmingLink.label, icon: programmingLink.icon, external: true }],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const booksCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openBooksMenu = () => {
    if (booksCloseTimeout.current) {
      clearTimeout(booksCloseTimeout.current);
      booksCloseTimeout.current = null;
    }
    setBooksOpen(true);
  };

  const closeBooksMenu = () => {
    booksCloseTimeout.current = setTimeout(() => setBooksOpen(false), 220);
  };

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

  const darkHeader = pathname === "/medical-spanish" || pathname.startsWith("/medical-spanish/");

  return (
    <header className={`sticky top-0 z-50 backdrop-blur transition-transform duration-300 ${darkHeader ? "bg-[#0B1F3A]/95 text-white" : "bg-white/95 text-slate-900"} ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
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
          className={`flex items-center justify-center rounded-lg p-2 md:hidden ${darkHeader ? "text-white/80 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"}`}
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
                  ? (darkHeader ? "bg-white/10 text-[#4fd1d4]" : "bg-[#002EC1]/10 text-[#002EC1]")
                  : (darkHeader ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-100 hover:text-[#002EC1]")
              }`}
            >
              {item.icon} {item.label}
            </Link>
          ))}

          {/* Books Dropdown */}
          <div
            className="relative"
            onMouseEnter={openBooksMenu}
            onMouseLeave={closeBooksMenu}
          >
            <Link
              href="/childrens-books"
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                isBooksActive()
                  ? (darkHeader ? "bg-white/10 text-[#4fd1d4]" : "bg-[#002EC1]/10 text-[#002EC1]")
                  : (darkHeader ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-100 hover:text-[#002EC1]")
              }`}
            >
              <FaBook className="h-3.5 w-3.5" />
              Books <FaChevronDown className="ml-0.5 h-3 w-3" />
            </Link>

            {/* Dropdown Menu */}
            {booksOpen && (
              <div className={`absolute left-0 top-full z-[100] mt-1 flex w-56 min-w-[220px] flex-col rounded-2xl border p-1.5 shadow-[0_12px_40px_rgba(21,48,71,0.14)] ${darkHeader ? "border-white/10 bg-[#0B1F3A]" : "border-slate-200 bg-white"}`}>
                {bookCategories.map((cat) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    onClick={() => setBooksOpen(false)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                      isActive(cat.href)
                        ? (darkHeader ? "bg-white/10 text-[#4fd1d4]" : "bg-[#002EC1]/10 text-[#002EC1]")
                        : (darkHeader ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-50 hover:text-[#002EC1]")
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </Link>
                ))}
                <a
                  href={programmingLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setBooksOpen(false)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${darkHeader ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-50 hover:text-[#002EC1]"}`}>
                  {programmingLink.icon}
                  <span>{programmingLink.label}</span>
                </a>
              </div>
            )}
          </div>

        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`border-t px-4 pb-5 pt-3 md:hidden ${darkHeader ? "border-white/10 bg-[#0B1F3A]" : "border-slate-200 bg-white"}`}>
          <nav className="flex flex-col gap-2">
            {mobileNavItems.map((item) =>
              "children" in item ? (
                <div key={item.label}>
                  <button
                    onClick={() => setBooksOpen(!booksOpen)}
                    className={`flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${darkHeader ? "text-white/80 hover:bg-white/10" : "text-slate-600 hover:bg-slate-100"}`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <FaChevronDown className={`h-3 w-3 transition-transform ${booksOpen ? "transform rotate-180" : ""}`} />
                  </button>
                  {booksOpen && (
                    <div className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-slate-200 pl-4">
                      {item.children?.map((child) =>
                        child.external ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${darkHeader ? "text-white/80 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"}`}
                          >
                            <span className="flex items-center gap-2">{child.icon} {child.label}</span>
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                              isActive(child.href)
                                ? (darkHeader ? "bg-white/10 text-[#4fd1d4]" : "bg-[#002EC1]/10 text-[#002EC1]")
                                : (darkHeader ? "text-white/80 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100")
                            }`}
                          >
                            <span className="flex items-center gap-2">{child.icon} {child.label}</span>
                          </Link>
                        )
                      )}
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
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${darkHeader ? "text-white/80 hover:bg-white/10" : "text-slate-600 hover:bg-slate-100"}`}>
                  <span className="flex items-center gap-2">{item.icon} {item.label}</span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive(item.href!)
                      ? (darkHeader ? "bg-white/10 text-[#4fd1d4]" : "bg-[#002EC1]/10 text-[#002EC1]")
                      : (darkHeader ? "text-white/80 hover:bg-white/10" : "text-slate-600 hover:bg-slate-100")
                  }`}>
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
