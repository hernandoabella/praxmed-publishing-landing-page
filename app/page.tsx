import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Nwesletter from "./components/Nwesletter";

export const metadata: Metadata = {
  title: "PRAXMED Publishing — Knowledge That Improves Lives",
  description:
    "Practical medical, psychological, and parenting resources from PRAXMED Publishing.",
};

export default function Home() {
  return (
    <main className="bg-white">
      <section className="px-6 pt-4 pb-10 md:pt-6 md:pb-14">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-4xl font-black tracking-tight text-[#153047] md:text-6xl">
              Knowledge That Improves Lives
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5b6d78]">
              Practical medical, psychological, and parenting resources from <strong>PRAXMED Publishing.</strong>
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="/book-catalog"
                className="rounded-full bg-[#002EC1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#002EC1]/90"
              >
                Explore Books
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <Image
              src="/hero-image.png"
              alt="PRAXMED Publishing"
              fill
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      <Nwesletter />
    </main>
  );
}
