import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Taco Tuesday",
  description:
    "Taco Tuesday event guide for Steal a Brainrot",
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
            Taco Tuesday event guide for Steal a Brainrot
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
            Taco Tuesday is the premier weekly community event in Steal a Brainrot. Every Tuesday, special brainrots with exclusive traits become available, mutation rates are doubled, and bonus viral income is awarded to all participants. It is the best time to hunt for rare brainrots, complete your collection, and connect with the community. This guide covers everything you need to know about Taco Tuesday.
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
                Coming Soon
              </span>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
              >
                The Taco Tuesday schedule is being finalized. Taco Tuesday events run every Tuesday with rotating themes and exclusive brainrot drops. The full schedule with weekly themes, bonus multipliers, and featured brainrots will be available soon.
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
                Taco Tuesday offers exclusive rewards including special brainrots with limited-edition traits, doubled mutation rates, bonus viral income, and unique event-only titles. Participating every week builds towards cumulative rewards and seasonal bonuses. Detailed reward tables for each week will be posted here.
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
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
              >
                Make the most of Taco Tuesday with these strategies: save your Breeding Passes for doubled mutation rates, focus on zones with the highest spawn rates for the weekly featured brainrot, trade actively during the event when market activity peaks, and team up with friends to cover more zones simultaneously. More detailed tips are being compiled.
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