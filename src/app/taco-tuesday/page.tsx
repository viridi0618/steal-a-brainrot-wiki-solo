import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Taco Tuesday — Steal a Brainrot Wiki",
  description:
    "Taco Tuesday event guide for Steal a Brainrot. Weekly Tuesday event with special rewards and bonuses.",
};

export default function TacoTuesdayPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            Taco Tuesday
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Weekly Tuesday event
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
            Taco Tuesday is the premier weekly community event in Steal a Brainrot. Every Tuesday, special brainrots with exclusive traits become available, mutation rates are boosted, and bonus income is awarded to all participants. It is the best time to hunt for rare brainrots, complete your collection, and connect with the community.
          </p>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Taco Tuesday is a staple of the Steal a Brainrot community experience. With 24M+ daily players, Tuesdays see the highest player activity as collectors rush to take advantage of the limited-time bonuses, exclusive drops, and community trading opportunities.
          </p>
        </div>
      </section>

      {/* Schedule Placeholder */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Schedule"
            title="Schedule"
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
                Every Tuesday
              </span>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
              >
                Taco Tuesday occurs every Tuesday. Check in-game for exact times as they may vary by timezone and server region. The event typically runs for the full 24 hours of Tuesday in your local timezone, with rotating weekly themes and featured brainrot drops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Rewards"
            title="Rewards"
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
                Community reports indicate Taco Tuesday offers exclusive rewards including special brainrots with limited-edition traits, boosted mutation rates, bonus income, and unique event-only titles. Participating every week may build towards cumulative rewards and seasonal bonuses. Detailed reward data is being verified from community event logs.
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
            title="Tips"
          />
          <div className="mt-10">
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #2a2826",
              }}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#d4af6a" }}
                  />
                  <span
                    className="font-sans text-sm"
                    style={{ color: "#8a8884" }}
                  >
                    Save your breeding passes and mutation catalysts for Taco Tuesday to take advantage of boosted mutation rates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#d4af6a" }}
                  />
                  <span
                    className="font-sans text-sm"
                    style={{ color: "#8a8884" }}
                  >
                    Focus on zones with the highest spawn rates for the weekly featured brainrot to maximize your collection gains.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#d4af6a" }}
                  />
                  <span
                    className="font-sans text-sm"
                    style={{ color: "#8a8884" }}
                  >
                    Trade actively during Taco Tuesday when market activity peaks. Player demand is highest during the event window.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#d4af6a" }}
                  />
                  <span
                    className="font-sans text-sm"
                    style={{ color: "#8a8884" }}
                  >
                    Team up with friends to cover more zones simultaneously and share event discoveries.
                  </span>
                </li>
              </ul>
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
                  href="/admin-abuse"
                  className="text-sm hover:underline"
                  style={{ color: "#d4af6a" }}
                >
                  Admin Abuse
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
                  href="/brainrots"
                  className="text-sm hover:underline"
                  style={{ color: "#d4af6a" }}
                >
                  All Brainrots
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