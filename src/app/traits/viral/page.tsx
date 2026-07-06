import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import { weaponTypes, faqs } from "@/lib/data";

const SLUG = "viral";

export function generateMetadata(): Metadata {
  const trait = weaponTypes.find((t) => t.name.toLowerCase() === SLUG);
  if (!trait) {
    return { title: "Not Found" };
  }
  return {
    title: `${trait.name} — Trait Details — Steal a Brainrot Wiki`,
    description: `${trait.name} trait details, effects, multipliers, and how to obtain for Steal a Brainrot on Roblox.`,
  };
}

export default function TraitDetailPage() {
  const trait = weaponTypes.find((t) => t.name.toLowerCase() === SLUG);
  if (!trait) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            {trait.name}
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            {trait.description}
          </p>
          <div
            className="mt-6 h-0.5 w-16 rounded-full mx-auto"
            style={{ backgroundColor: "#d4af6a" }}
          />
        </div>
      </section>

      {["Overview", "Effect", "Multiplier", "How to Obtain", "Best Uses"].map((section) => (
        <section key={section} className="pb-14 md:pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <SectionTitle tag={section} title={section} />
            <div className="mt-10">
              <div className="rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826" }}>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}>
                  {section === "Overview" && trait.description}
                  {section === "Effect" && `Effect data for ${trait.name} is being compiled from community reports. Traits modify brainrot income, value, and behavior. Check the Traits page for the latest verified information.`}
                  {section === "Multiplier" && `Multiplier data for ${trait.name} is being compiled from community reports. Trait multipliers stack with other bonuses and can dramatically increase income rates.`}
                  {section === "How to Obtain" && `Acquisition methods for ${trait.name} are being verified. Traits can be obtained through breeding, events, rituals, and trading.`}
                  {section === "Best Uses" && `Data pending verification. Best use cases for ${trait.name} are being researched from community gameplay data.`}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10">
            <FAQAccordion faqs={faqs.slice(0, 3)} />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826" }}>
            <h3 className="font-serif text-xl mb-4" style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}>Related Guides</h3>
            <ul className="space-y-2">
              <li><a href="/traits" className="text-sm hover:underline" style={{ color: "#d4af6a" }}>All Traits</a></li>
              <li><a href="/brainrots" className="text-sm hover:underline" style={{ color: "#d4af6a" }}>All Brainrots</a></li>
              <li><a href="/best-brainrots" className="text-sm hover:underline" style={{ color: "#d4af6a" }}>Best Brainrots</a></li>
              <li><a href="/faq" className="text-sm hover:underline" style={{ color: "#d4af6a" }}>FAQ</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
