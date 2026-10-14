import BookFeatureSection from "./BookFeatureSection";

export default function AngerManagementSection() {
  return (
    <BookFeatureSection
      eyebrow="Anger Management"
      title="Parent with confidence."
      description="Stop yelling and start connecting. A practical, judgment-free guide to help you regain control, understand your triggers, and respond with patience — even in the most challenging moments."
      points={[
        "Identify emotional triggers before they explode",
        "Simple techniques to stop yelling in the moment",
        "How to repair emotional connections after conflict",
        "Break generational anger patterns for good",
        "Parent with firmness without fear, guilt, or rage",
      ]}
      image="/books-frontpage/anger-managment-for-explosive-parents.jpg"
      imageAlt="Anger Management for Explosive Parents by Praxmed Publishing"
      amazonUrl="https://www.amazon.com/Praxmed-Publishing-ebook/dp/B0GGJ3GPDF"
      reverse
    />
  );
}
