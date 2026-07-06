import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admin Abuse — Steal a Brainrot Wiki",
  description:
    "Admin Abuse event guide for Steal a Brainrot. Schedule, rewards, and tips for the weekly admin event.",
};

export default function AdminAbusePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            Admin Abuse
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Weekly admin event
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
            Admin Abuse is a weekly community event in Steal a Brainrot where game administrators take over the server with special activities, surprise drops, and exclusive brainrot rewards. During Admin Abuse, you can expect rare brainrot spawns, bonus income multipliers, and unique event-only items that are not available during normal gameplay.
          </p>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            Event details are community-reported and subject to change. Admins may introduce temporary rule changes, hidden brainrot spawns, or special trading opportunities. Stay connected with the community through Discord and in-game announcements to catch every Admin Abuse event.
          </p>
        </div>
      </section>

      {/* Event Schedule Placeholder */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            tag="Schedule"
            title="Event Schedule"
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
                Schedule Varies
              </span>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
              >
                The Admin Abuse event schedule varies. Check the in-game announcements and official Discord server for upcoming Admin Abuse events. Events are typically announced in advance with details on featured brainrots, bonus rates, and duration.
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
                Admin Abuse events offer exclusive rewards that vary by event. Community reports indicate rewards may include rare brainrots, limited-edition traits, unique mutation catalysts, and special titles. Detailed reward data is being verified from community event logs. Rewards are typically only available during the Admin Abuse window.
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
                    Stay active in the official Discord server for event announcements and real-time updates during Admin Abuse.
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
                    Keep your collection ready for surprise trades and rare brainrot spawns. Have trade currency available.
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
                    Be prepared for temporary rule changes. Admin Abuse events can introduce unexpected mechanics that affect brainrot values and income rates.
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
                    Team up with other players. Coordinated groups can cover more spawn zones and maximize event rewards.
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
                  href="/taco-tuesday"
                  className="text-sm hover:underline"
                  style={{ color: "#d4af6a" }}
                >
                  Taco Tuesday
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