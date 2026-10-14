import BookFeatureSection from "./BookFeatureSection";

export default function AnxiousAttachmentSection() {
  return (
    <BookFeatureSection
      eyebrow="Anxious Attachment"
      title="The Anxious Attachment Workbook for Parents"
      description={'Stop worrying you\'re "messing up." This workbook helps you understand what\'s happening inside you — so you can raise a child who feels safe, secure, and confident.'}
      points={[
        "Understand your own attachment patterns as a parent",
        "Calm your nervous system during high-stress moments",
        "Respond with intention instead of reacting with fear",
        "Build daily rituals that create emotional safety at home",
        "Break anxious cycles before they pass to your child",
      ]}
      image="/books-frontpage/anxius-attachment-workbook.jpg"
      imageAlt="The Anxious Attachment Workbook for Parents by Praxmed Publishing"
      amazonUrl="https://www.amazon.com/dp/B0GR68K3WM"
      reverse
    />
  );
}
