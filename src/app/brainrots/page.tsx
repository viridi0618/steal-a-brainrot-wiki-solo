import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import FAQAccordion from "@/components/FAQAccordion";
import { classes, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Brainrots",
  description:
    "Complete list of all brainrots in Steal a Brainrot",
};

export default function BrainrotsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            Brainrots
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Complete list of all brainrots in Steal a Brainrot
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
            className="font-sans text-sm leading-relaxed"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Steal a Brainrot features a growing roster of viral brainrots, each with unique abilities, rarity tiers, and playstyles. From the steady income of Skibidi to the chaotic mutations of Ohio, every brainrot brings something different to your collection. Browse the complete list below to discover which brainrots fit your collection strategy.
          </p>
        </div>
      </section>

      {/* Brainrots Grid */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            tag="Collection"
            title="All Brainrots"
            subtitle="Every collectible brainrot in the game"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {classes.map((cls) => (
              <InfoCard
                key={cls.id}
                icon={cls.icon}
                tag={cls.tag}
                title={cls.name}
                description={cls.shortDescription}
                href={`/brainrots/${cls.id}`}
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
            subtitle="Common questions about brainrots"
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
                  href="/traits"
                  className="text-sm hover:underline"
                  style={{ color: "#d4af6a" }}
                >
                  All Traits
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