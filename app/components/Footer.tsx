import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="inline-block rounded-xl bg-white px-4 py-3">
              <Image
                src="/logo.png"
                alt="PRAXMED Publishing"
                width={280}
                height={165}
                className="h-20 w-auto"
              />
            </div>
            <div className="mt-5 flex gap-3">
              {[
                { icon: <FaFacebook />, label: "Facebook", href: "#" },
                { icon: <FaTwitter />, label: "Twitter", href: "#" },
                { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
                { icon: <FaInstagram />, label: "Instagram", href: "#" },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-lg bg-white/5 p-2.5 text-lg text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <Link href="/book-catalog" className="transition hover:text-white">Catalog</Link>
            <Link href="/about-us" className="transition hover:text-white">About Us</Link>
            <Link href="/medical-spanish" className="transition hover:text-white">Medical Spanish</Link>
            <Link href="/blog" className="transition hover:text-white">Blog</Link>
            <a href="mailto:contact@praxmedpublishing.com" className="transition hover:text-white">Contact</a>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} PRAXMED Publishing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
