import BookFeatureSection from "./BookFeatureSection";

export default function RaisingEISection() {
  return (
    <BookFeatureSection
      eyebrow="Mindful Parenting"
      title="Raising Emotionally Intelligent Children"
      description="Not about being a perfect parent — it's about understanding your child's emotions and responding with confidence, calm, and consistency. Practical strategies that fit real family life."
      points={[
        "Understand how children process emotions at each developmental stage",
        "Build resilience and self-awareness in everyday situations",
        "Strengthen communication without yelling or power struggles",
        "Use positive discipline that teaches rather than punishes",
        "Support empathy and emotional regulation that lasts a lifetime",
      ]}
      image="/books-frontpage/raising-emotionally-intelligent-children.jpg"
      imageAlt="Raising Emotionally Intelligent Children by Praxmed Publishing"
      amazonUrl="https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GKWC93RZ"
    />
  );
}
