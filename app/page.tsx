import { Hero, About, Phrase, Approach, Areas, Online, Presencial, Coverage, Faq, Closing } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <Hero />
      <About />
      <Phrase />
      <Approach />
      <Areas />
      <Online />
      <Presencial />
      <Coverage />
      <Faq />
      <Closing />
    </>
  );
}
