import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import FAQAccordion from "@/components/FAQAccordion";
import { weaponTypes, professions, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Traits — Steal a Brainrot Wiki",
  description:
    "Complete trait database for Steal a Brainrot. Learn about trait effects, multipliers, and how to obtain them.",
};

export default function TraitsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            Traits
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Complete trait database for Steal a Brainrot -- effects, multipliers, and acquisition methods
          </p>
          <div
            className="mt-6 h-0.5 w-16 rounded-full mx-auto"
            style={{ backgroundColor: "#d4af6a" }}
          />
        </div>
      </section>

      {/* Overview */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <p
            className="font-sans text-sm leading-relaxed mb-4"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Traits are special attributes that modify a brainrot&apos;s income, value, and behavior. Each brainrot can carry up to 3 traits, and certain trait combinations create powerful synergies that can dramatically boost your collection&apos;s performance. Higher rarity traits provide stronger multipliers and are harder to obtain.
          </p>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Traits can be obtained through breeding, special events, ritual completions, and trading. Some traits are exclusive to specific brainrots or can only be acquired during limited-time events like Admin Abuse and Taco Tuesday. Browse the complete trait database below to understand how each trait affects your collection.
          </p>
        </div>
      </section>

      {/* Traits List */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            tag="Database"
            title="Traits List"
            subtitle="Every trait in the game with effects and compatible brainrots"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            {weaponTypes.map((wt) => (
              <InfoCard
                key={wt.name}
                tag={wt.name}
                title={wt.name}
                description={wt.description}
                href={`/traits/${wt.name.toLowerCase()}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trait Multipliers */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Multipliers"
            title="Trait Multipliers"
          />
          <div className="mt-10">
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #2a2826",
              }}
            >
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
              >
                Trait multipliers determine how much each trait boosts (or modifies) your brainrot&apos;s income and stats. Multiplier values are being verified from community data and in-game testing. Higher rarity traits provide stronger multipliers, but some combinations may produce unexpected effects. Detailed multiplier tables with exact values will be available once data verification is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Traits */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            tag="Best"
            title="Best Traits"
            subtitle="Top trait categories ranked by community consensus"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {professions.map((prof) => (
              <InfoCard
                key={prof.name}
                icon={prof.icon}
                title={prof.name}
                description={prof.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about traits"
          />
          <div className="mt-10">
            <FAQAccordion faqs={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2826",
            }}
          >
            <h3
              className="font-serif text-xl mb-4"
              style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
            >
              Related Guides
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/brainrots"
                  className="text-sm hover:underline"
                  style={{ color: "#d4af6a" }}
                >
                  All Brainrots
                </a>
              </li>
              <li>
                <a
                  href="/catalog"
                  className="text-sm hover:underline"
                  style={{ color: "#d4af6a" }}
                >
                  Brainrot Index
                </a>
              </li>
              <li>
                <a
                  href="/best-brainrots"
                  className="text-sm hover:underline"
                  style={{ color: "#d4af6a" }}
                >
                  Best Brainrots
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-sm hover:underline"
                  style={{ color: "#d4af6a" }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}