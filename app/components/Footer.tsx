import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0F2137] px-6 py-16 md:py-20 text-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12 flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xl font-semibold">Get in touch with us</p>
            <a
              href="mailto:contact@praxmedpublishing.com"
              className="inline-flex items-center justify-center gap-3 text-lg font-medium text-[#4C8BFF] transition-colors duration-300 hover:text-[#8DA9FF]"
            >
              <MdEmail className="text-xl" />
              contact@praxmedpublishing.com
            </a>
          </div>

          <div className="flex justify-center gap-3 md:gap-5 flex-wrap">
            {[
              { icon: <FaFacebook />, label: "Facebook" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaLinkedin />, label: "LinkedIn" },
              { icon: <FaInstagram />, label: "Instagram" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                className="transform rounded-xl bg-white/5 p-3 text-2xl transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-[#4C8BFF]"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-base text-white/80">
            © {new Date().getFullYear()} PRAXMED Publishing. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-white/40">
            Empowering healthcare through innovative medical publishing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
