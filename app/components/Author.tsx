"use client";

import Image from "next/image";

const Author = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Content */}
        <div className="bg-white rounded-2xl p-8 md:p-10 text-center">
          {/* Optional logo / avatar */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="PRAXMED Publishing"
              width={180}
              height={810}
            />
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            <span className="font-semibold text-[#0B316D]">
              PRAXMED Publishing
            </span>{" "}
            collaborates with medical educators and bilingual clinicians to
            create clear, practical, and clinically accurate resources for
            healthcare professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Author;
