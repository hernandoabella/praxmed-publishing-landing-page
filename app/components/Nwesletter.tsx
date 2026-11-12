"use client";

import Script from "next/script";

export default function NewsletterEmbedded() {
  return (
    <>
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2052347');
        `}
      </Script>

      <section className="w-full bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-xl font-semibold tracking-tight text-[#153047] md:text-2xl">
            Free resources and early access to new books
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#5b6d78]">
            Practical guides, tips, and exclusive offers for healthcare professionals and parents. No spam.
          </p>
          <div className="mt-6">
            <div className="ml-embedded" data-form="TIyioo" />
          </div>
          <p className="mt-4 text-xs text-[#5b6d78]">
            Join 1,000+ readers. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
