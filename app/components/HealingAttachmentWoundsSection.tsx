import BookFeatureSection from "./BookFeatureSection";

export default function HealingAttachmentWoundsSection() {
  return (
    <BookFeatureSection
      eyebrow="Attachment Healing"
      title="Healing Attachment Wounds"
      description="A trauma-informed guide to understanding attachment injuries, calming relationship triggers, and rebuilding secure, trusting connections."
      points={[
        "Understand your attachment style and how it shows up in relationships",
        "Recognize the triggers that spark anxiety, distance, or conflict",
        "Soothe your nervous system and respond instead of reacting",
        "Build secure, trusting bonds with your partner and children",
        "Break the cycle so it doesn't pass to the next generation",
      ]}
      image="/books-frontpage/healing-attachment-wounds.jpg"
      imageAlt="Healing Attachment Wounds by Praxmed Publishing"
      amazonUrl="https://us.amazon.com/Healing-Attachment-Wounds-Understand-Relationships-ebook/dp/B0HGPV3Z74"
    />
  );
}
