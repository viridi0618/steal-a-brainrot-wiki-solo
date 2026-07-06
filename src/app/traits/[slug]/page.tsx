import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import { weaponTypes, faqs } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return weaponTypes.map((wt) => ({
    slug: wt.name.toLowerCase(),
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const trait = weaponTypes.find(
    (wt) => wt.name.toLowerCase() === params.slug
  );
  if (!trait) {
    return { title: "Not Found" };
  }
  return {
    title: `${trait.name} — Trait Details — Steal a Brainrot Wiki`,
    description: `${trait.name} trait details for Steal a Brainrot. Effect, multiplier, compatible brainrots, and how to obtain.`,
  };
}

export default function TraitDetailPage({ params }: Props) {
  const trait = weaponTypes.find(
    (wt) => wt.name.toLowerCase() === params.slug
  );

  if (!trait) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
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

      {/* Overview */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="Overview" title="Overview" />
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
                {trait.description}
              </p>
              <div className="mt-4">
                <span
                  className="font-sans text-xs uppercase tracking-wider"
                  style={{ color: "#8a8884" }}
                >
                  Compatible Brainrots
                </span>
                <p
                  className="font-sans text-sm mt-1"
                  style={{ color: "#f0ece4" }}
                >
                  {trait.classes.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effect */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="Effect" title="Effect" />
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
                Detailed effect data for the {trait.name} trait is being compiled from community reports and in-game testing. This trait modifies brainrot income and behavior based on its type and the brainrot&apos;s rarity tier. Full effect breakdowns with numerical values will be available once data verification is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multiplier */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="Multiplier" title="Multiplier" />
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
                Multiplier values for the {trait.name} trait are being verified. Trait multipliers scale with brainrot rarity and trait synergy. Higher rarity traits provide exponentially stronger multipliers. Community reports and data verification are ongoing for precise multiplier ranges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Obtain */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="Acquisition" title="How to Obtain" />
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
                The {trait.name} trait can be obtained through breeding, special events, and trading. Compatible brainrots: {trait.classes.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}. Detailed acquisition methods and drop rates are being documented from community data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Uses */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="Best Uses" title="Best Uses" />
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
                Data pending verification. The {trait.name} trait is best used with brainrots that complement its effects. Strategic recommendations and optimal pairings are being researched from community data. Check the Best Brainrots tier list for meta recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="FAQ" title="Frequently Asked Questions" />
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
                  href="/traits"
                  className="text-sm hover:underline"
                  style={{ color: "#d4af6a" }}
                >
                  All Traits
                </a>
              </li>
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