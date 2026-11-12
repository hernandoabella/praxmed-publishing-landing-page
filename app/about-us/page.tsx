import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PRAXMED Publishing",
  description: "Learn about PRAXMED Publishing, our mission, and our editorial collections.",
};

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-black tracking-tight text-[#153047] md:text-5xl">About PRAXMED Publishing</h1>
          <p className="mt-5 text-lg leading-8 text-[#5b6d78]">
            PRAXMED Publishing creates practical, evidence-based resources for healthcare professionals, parents, and lifelong learners.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#153047]">Our mission</h2>
              <p className="mt-2 text-[#5b6d78]">
                To make reliable knowledge accessible, actionable, and human-centered.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#153047]">What we publish</h2>
              <p className="mt-2 text-[#5b6d78]">
                Medical education, psychology and mental health, parenting and development, and children&apos;s literature.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#153047]">Our standards</h2>
              <p className="mt-2 text-[#5b6d78]">
                Clear writing, practical tools, and respect for the reader&apos;s time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
