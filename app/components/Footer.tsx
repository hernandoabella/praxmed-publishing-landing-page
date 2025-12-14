import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Enhanced Logo Section - Much larger and more prominent */}
        <div className="flex flex-col items-center mb-12">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/logo.png" 
              alt="Praxmed Logo" 
              width={180} 
              height={180} 
              className="drop-shadow-2xl"
              priority
            />
          </div>
          
          <p className="text-lg text-white/80 mt-3 max-w-2xl text-center">
            Bringing knowledge to healthcare professionals worldwide
          </p>
        </div>

        {/* Navigation - Enhanced spacing and visual hierarchy */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-12 mb-14">
          <a 
            href="/" 
            className="text-lg font-medium hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform hover:font-semibold"
          >
            Home
          </a>
          <a 
            href="/books" 
            className="text-lg font-medium hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform hover:font-semibold"
          >
            Books
          </a>
          <a 
            href="/audio" 
            className="text-lg font-medium hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform hover:font-semibold"
          >
            Audio
          </a>
          <a 
            href="/resources" 
            className="text-lg font-medium hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform hover:font-semibold"
          >
            Resources
          </a>
          <a 
            href="/contact" 
            className="text-lg font-medium hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform hover:font-semibold"
          >
            Contact
          </a>
          <a 
            href="/privacy" 
            className="text-lg font-medium hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform hover:font-semibold"
          >
            Privacy Policy
          </a>
        </div>

        {/* Enhanced Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4C8BFF]/70 via-30% to-transparent mb-12"></div>

        {/* Contact Info & Copyright - Better organized */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-12">
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold mb-4">Get in touch with us</p>
            <a 
              href="mailto:contact@praxmed.com" 
              className="text-[#4C8BFF] hover:text-[#8DA9FF] text-xl font-semibold transition-colors duration-300 inline-flex items-center justify-center gap-3 hover:gap-4"
            >
              <MdEmail className="text-2xl" />
              contact@praxmed.com
            </a>
          </div>
          
          {/* Enhanced Social Media Icons */}
          <div className="flex justify-center gap-8">
            <a 
              href="#" 
              className="text-3xl p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="#" 
              className="text-3xl p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="#" 
              className="text-3xl p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="#" 
              className="text-3xl p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-white/90 text-lg">
            © {new Date().getFullYear()} PRAXMED Publishing. All rights reserved.
          </p>
          <p className="text-white/60 mt-3">
            Empowering healthcare through innovative medical publishing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;