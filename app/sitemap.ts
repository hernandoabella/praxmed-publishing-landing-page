import type { MetadataRoute } from "next";
import { books } from "../lib/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://praxmedpublishing.com";
  const routes = [
    "",
    "/book-catalog",
    "/discover",
    "/discover/self-discovery",
    "/discover/did-you-know",
    "/library",
    "/about-us",
    "/learn",
    "/resources",
    "/medical-spanish",
    "/blog",
    "/childrens-books",
    "/parenting-books",
    "/medical-books",
    "/audio-books",
    "/bonus-book",
  ];
  const staticEntries = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route === "" ? 1 : 0.8,
  }));
  const bookEntries = books.map((book) => ({
    url: `${base}/book-catalog/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticEntries, ...bookEntries];
}
