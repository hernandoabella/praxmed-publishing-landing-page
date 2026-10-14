import BookFeatureSection from "./BookFeatureSection";

export default function HealingInnerChildSection() {
  return (
    <BookFeatureSection
      eyebrow="Inner Child Work"
      title="Healing Your Inner Child"
      description="A compassionate guide to understanding and reparenting your inner child. Break free from old patterns and build a life rooted in self-worth and emotional freedom."
      points={[
        "Understand what the inner child is and why it shapes your adult life",
        "Identify emotional wounds from childhood that still show up today",
        "Learn gentle reparenting techniques to offer yourself the safety you missed",
        "Break free from self-sabotage, people-pleasing, and fear of abandonment",
        "Build a loving, compassionate relationship with the person you really are",
      ]}
      image="/books-frontpage/healing-your-inner-child.jpg"
      imageAlt="Healing Your Inner Child by Praxmed Publishing"
      amazonUrl="https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0H6NZXSZ3"
      reverse
    />
  );
}
