import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollSync from "./components/ScrollSync";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRAXMED Publishing — Medical Spanish & Parenting Books",
  description:
    "Practical, evidence-based books and audiobooks for healthcare professionals and parents. Medical Spanish, anger management, emotional intelligence, and generational healing resources.",
};

// Makes the layout viewport shrink when the mobile keyboard opens so the
// floating chat widget (and its input) stays visible above the keyboard.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>

        {/* Keeps scroll-reveal animations firing after images/fonts load */}
        <ScrollSync />

        <Script id="mailerlite-auto-show" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);
            })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            
            ml('account', '2052347');
            ml('show', '95EugZ', true);
          `}
        </Script>
      </body>
    </html>
  );
}
