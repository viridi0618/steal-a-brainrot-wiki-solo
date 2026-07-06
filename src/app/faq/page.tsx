import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Steal a Brainrot Wiki",
  description:
    "Steal a Brainrot FAQ -- brainrots, trading, rebirth, rituals, events, and more answered.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Everything you need to know about Steal a Brainrot
          </p>
          <div
            className="mt-6 h-0.5 w-16 rounded-full mx-auto"
            style={{ backgroundColor: "#d4af6a" }}
          />
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4">
          <p
            className="font-sans text-sm leading-relaxed mb-10"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Whether you are a new player just discovering Steal a Brainrot on Roblox or a veteran collector looking to deepen your knowledge of rituals, traits, and events, this FAQ covers the most commonly asked questions about the game.
          </p>
          <div
            className="rounded-lg p-4 md:p-8"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid #2a2826",
            }}
          >
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826" }}>
            <h3 className="font-serif text-xl text-[#f0ece4] mb-4">More Guides</h3>
            <ul className="space-y-2">
              <li><a href="/brainrots" className="text-sm text-[#d4af6a] hover:underline">All Brainrots</a></li>
              <li><a href="/traits" className="text-sm text-[#d4af6a] hover:underline">All Traits</a></li>
              <li><a href="/best-brainrots" className="text-sm text-[#d4af6a] hover:underline">Best Brainrots</a></li>
              <li><a href="/catalog" className="text-sm text-[#d4af6a] hover:underline">Brainrot Index</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}