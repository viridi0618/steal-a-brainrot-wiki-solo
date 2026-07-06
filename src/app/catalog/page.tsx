import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import { classes, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Index — Steal a Brainrot Wiki",
  description:
    "The in-game Index system in Steal a Brainrot. Track your brainrot collection and unlock Index bonuses.",
};

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            Index
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            The in-game collection tracker
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
            The Index is an in-game collection book that tracks which brainrots you have collected and which ones you still need to find. It serves as your personal completion tracker, showing every brainrot available in the game along with your progress toward completing each entry.
          </p>
          <p
            className="font-sans text-sm leading-relaxed mb-4"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Some brainrots are intentionally labeled as &quot;Not registered&quot; in the Index, meaning they are not tracked by the standard collection system. These hidden brainrots often require completing secret rituals or participating in special events to discover. Completing Index entries grants bonuses, including income multipliers and exclusive rewards.
          </p>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Use the Index to plan your collection strategy, track your progress, and identify which brainrots you should prioritize. The table below lists all brainrots with their base income, Index registration status, and rarity tier.
          </p>
        </div>
      </section>

      {/* Complete Brainrot Index */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Index"
            title="Complete Brainrot Index"
            subtitle="Every brainrot in the collection book"
          />
          <div className="mt-10">
            <div
              className="rounded-lg overflow-hidden"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #2a2826",
              }}
            >
              {/* Table Header */}
              <div
                className="grid grid-cols-4 gap-4 p-4 text-xs uppercase tracking-wider font-medium"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderBottom: "1px solid #2a2826",
                  color: "#d4af6a",
                }}
              >
                <div>Name</div>
                <div>Base Income</div>
                <div>In Index</div>
                <div>Rarity</div>
              </div>

              {/* Brainrots from classes */}
              {classes.map((cls) => (
                <div
                  key={cls.id}
                  className="grid grid-cols-4 gap-4 p-4 text-sm transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)]"
                  style={{ borderBottom: "1px solid #2a2826" }}
                >
                  <a
                    href={`/brainrots/${cls.id}`}
                    className="hover:underline"
                    style={{ color: "#f0ece4" }}
                  >
                    {cls.icon} {cls.name}
                  </a>
                  <div style={{ color: "#8a8884" }}>Community reported</div>
                  <div style={{ color: "#8a8884" }}>Registered</div>
                  <div style={{ color: "#8a8884" }}>{cls.armorType}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Placeholder */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Search"
            title="Search"
          />
          <div className="mt-10">
            <div
              className="rounded-lg p-6 text-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #2a2826",
              }}
            >
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
              >
                Search functionality coming soon. You will be able to search by brainrot name, income rate, rarity, and Index registration status. Stay tuned for updates!
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