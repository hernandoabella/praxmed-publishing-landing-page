import Link from "next/link";
import Image from "next/image";
import { ReactNode, ComponentPropsWithoutRef } from "react";

// Custom Callout component
function Callout({ children, type = "info" }: { children: ReactNode; type?: "tip" | "warning" | "heart" | "info" }) {
  const styles = {
    tip: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    heart: "bg-pink-50 border-pink-200 text-pink-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };
  
  const icons = {
    tip: "💡",
    warning: "⚠️",
    heart: "❤️",
    info: "ℹ️",
  };
  
  return (
    <div className={`my-6 rounded-lg border p-4 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

// Custom Blockquote component
function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-6 border-l-4 border-blue-600 pl-4 italic text-gray-600">
      {children}
    </blockquote>
  );
}

export const MDXComponents = {
  Callout,
  Blockquote,
  a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
    const isInternal = typeof href === "string" && href.startsWith("/");
    if (isInternal && typeof href === "string") {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  img: ({ src, alt, width, height, ...props }: ComponentPropsWithoutRef<"img">) => (
    <Image
      src={typeof src === "string" ? src : ""}
      alt={alt || "Image"}
      width={typeof width === "number" ? width : 800}
      height={typeof height === "number" ? height : 400}
      className="rounded-lg"
      {...props}
    />
  ),
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code className="rounded bg-gray-100 px-1 py-0.5 text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => {
    const id = String(children ?? "").toLowerCase().replace(/\s+/g, "-");
    return (
      <h2 id={id} className="group relative" {...props}>
        {children}
        <a
          href={`#${id}`}
          className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition"
          aria-label="Anchor link"
        >
          #
        </a>
      </h2>
    );
  },
};