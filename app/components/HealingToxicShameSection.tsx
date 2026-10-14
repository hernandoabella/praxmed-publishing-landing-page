import BookFeatureSection from "./BookFeatureSection";

export default function HealingToxicShameSection() {
  return (
    <BookFeatureSection
      eyebrow="Shame Healing"
      title="Healing Toxic Shame"
      description="A compassionate path to releasing deep-seated shame, quieting the inner critic, and reclaiming a resilient sense of self-worth."
      points={[
        "Understand where toxic shame comes from and how it shapes your self-image",
        "Recognize the inner critic and the stories it keeps telling you",
        "Gently release guilt, unworthiness, and the need to prove yourself",
        "Rebuild self-worth from the inside out, not from others' approval",
        "Show up with more compassion for yourself and the people you love",
      ]}
      image="/books-frontpage/healing-toxic-shame.jpg"
      imageAlt="Healing Toxic Shame by Praxmed Publishing"
      amazonUrl="https://us.amazon.com/Healing-Toxic-Shame-Evidence-Based-Understanding-ebook/dp/B0HDHNL2V4"
      reverse
    />
  );
}
