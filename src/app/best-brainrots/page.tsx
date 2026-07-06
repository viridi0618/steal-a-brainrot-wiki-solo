import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import FAQAccordion from "@/components/FAQAccordion";
import { recommendedWeapons, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Best Brainrots",
  description:
    "Tier list and best brainrots in Steal a Brainrot",
};

export default function BestBrainrotsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            Best Brainrots
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Tier list and best brainrots in Steal a Brainrot
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
            Not all brainrots are created equal. Some dominate the meta with superior income generation, while others shine in trading or collection value. This tier list ranks brainrots based on overall performance, versatility, and community consensus. Whether you are building your first collection or optimizing for competitive play, these rankings will help you make the best choices.
          </p>
        </div>
      </section>

      {/* Tier List Placeholder */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Rankings"
            title="Tier List"
            subtitle="Community-voted brainrot rankings"
          />
          <div className="mt-10">
            <div
              className="rounded-lg p-6 text-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #2a2826",
              }}
            >
              <span
                className="inline-block font-sans text-xs uppercase tracking-[0.2em] mb-3"
                style={{ color: "#d4af6a" }}
              >
                Coming Soon
              </span>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
              >
                The full tier list with S-Tier, A-Tier, B-Tier, and C-Tier rankings is being compiled. Each brainrot will be ranked with detailed analysis on strengths, weaknesses, and optimal use cases. Check back soon for the complete tier list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Early Game */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            tag="Early Game"
            title="Best Early Game"
            subtitle="Top brainrots for new collectors"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {recommendedWeapons.slice(0, 4).map((rw) => (
              <InfoCard
                key={rw.name}
                tag={rw.type}
                title={rw.name}
                description={rw.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Best Late Game */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Late Game"
            title="Best Late Game"
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
                Late game brainrot rankings are being compiled. The best late game brainrots typically include Legendary and Cursed rarity picks like Ohio, Sigma, and fully mutated variants. Detailed analysis of late game performance, synergy, and optimal collection strategies will be available in a future update.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="mt-10">
            <FAQAccordion faqs={faqs.slice(0, 3)} />
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