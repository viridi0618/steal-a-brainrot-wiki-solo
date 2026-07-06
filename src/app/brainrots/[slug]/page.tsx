import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import { classes, faqs } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return classes.map((cls) => ({
    slug: cls.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const brainrot = classes.find((c) => c.id === params.slug);
  if (!brainrot) {
    return { title: "Not Found" };
  }
  return {
    title: `${brainrot.name} — Steal a Brainrot Wiki`,
    description: `${brainrot.name} details, stats, income rate, traits, mutations, and collection tips for Steal a Brainrot on Roblox.`,
  };
}

export default function BrainrotDetailPage({ params }: Props) {
  const brainrot = classes.find((c) => c.id === params.slug);

  if (!brainrot) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-5xl md:text-6xl mb-4 block">
            {brainrot.icon}
          </span>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            {brainrot.name}
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            {brainrot.tag}
          </p>
          <div
            className="mt-6 h-0.5 w-16 rounded-full mx-auto"
            style={{ backgroundColor: "#d4af6a" }}
          />
        </div>
      </section>

      {/* Overview */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Overview"
            title="About This Brainrot"
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
                style={{ color: "#f0ece4", fontFamily: "Inter, sans-serif" }}
              >
                {brainrot.description}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <span
                    className="font-sans text-xs uppercase tracking-wider"
                    style={{ color: "#8a8884" }}
                  >
                    Role
                  </span>
                  <p
                    className="font-sans text-sm mt-1"
                    style={{ color: "#f0ece4" }}
                  >
                    {brainrot.role}
                  </p>
                </div>
                <div>
                  <span
                    className="font-sans text-xs uppercase tracking-wider"
                    style={{ color: "#8a8884" }}
                  >
                    Difficulty
                  </span>
                  <p
                    className="font-sans text-sm mt-1"
                    style={{ color: "#f0ece4" }}
                  >
                    {brainrot.difficulty}
                  </p>
                </div>
                <div>
                  <span
                    className="font-sans text-xs uppercase tracking-wider"
                    style={{ color: "#8a8884" }}
                  >
                    Rating
                  </span>
                  <p
                    className="font-sans text-sm mt-1"
                    style={{ color: "#f0ece4" }}
                  >
                    {brainrot.rating}
                  </p>
                </div>
                <div>
                  <span
                    className="font-sans text-xs uppercase tracking-wider"
                    style={{ color: "#8a8884" }}
                  >
                    Rarity Tier
                  </span>
                  <p
                    className="font-sans text-sm mt-1"
                    style={{ color: "#f0ece4" }}
                  >
                    {brainrot.armorType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Stats"
            title="Stats"
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
                Detailed stat breakdowns for {brainrot.name} are being compiled from community reports. The data below reflects the most current information available. For the latest verified stats, check the Brainrot Index and community tier lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Income */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Income"
            title="Income"
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
                Income data for {brainrot.name} is based on community reports and may vary with traits, mutations, and game updates. Each brainrot generates passive income in M/S (millions per second). Income rates are subject to change with game balancing. Check the Best Brainrots tier list for the latest income rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rarity */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Rarity"
            title="Rarity"
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
                {brainrot.name} is classified as {brainrot.armorType} rarity. Rarity affects base income, trait compatibility, and market value. Full rarity breakdown with spawn rates and acquisition methods is being verified from community data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traits */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Traits"
            title="Traits"
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
                {brainrot.name} can acquire the following trait types: {brainrot.weaponType}. Each brainrot can carry up to 3 traits. Trait combinations and synergy data are being researched. Visit the Traits page for the full trait database with effects and multipliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mutations */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Mutations"
            title="Mutations"
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
                Mutation data for {brainrot.name} is being gathered from community reports. Mutations can dramatically alter a brainrot&apos;s appearance, income rate, and trait compatibility. Mutation rates and catalysts vary by brainrot rarity and are subject to event bonuses like Taco Tuesday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Tips"
            title="Collection Tips"
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
                style={{ color: "#f0ece4", fontFamily: "Inter, sans-serif" }}
              >
                {brainrot.tips}
              </p>
              <div className="mt-4">
                <span
                  className="font-sans text-xs uppercase tracking-wider"
                  style={{ color: "#8a8884" }}
                >
                  Abilities
                </span>
                <ul className="mt-2 space-y-1">
                  {brainrot.abilities.map((ability) => (
                    <li
                      key={ability}
                      className="flex items-start gap-2"
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "#d4af6a" }}
                      />
                      <span
                        className="font-sans text-sm"
                        style={{ color: "#8a8884" }}
                      >
                        {ability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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