import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the logo/books to be served at a higher quality for sharp text.
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/books",
        destination: "/book-catalog",
        permanent: true,
      },
      {
        source: "/books/:slug",
        destination: "/book-catalog/:slug",
        permanent: true,
      },
      {
        source: "/medical-books",
        destination: "/medical-spanish",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
