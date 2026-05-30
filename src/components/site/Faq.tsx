import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const items = [
  { q: "How long does a website take?", a: "Most projects ship in 2–4 weeks depending on scope, content readiness, and integrations." },
  { q: "Do you provide ongoing support?", a: "Yes — we offer monthly maintenance, performance audits, and feature retainers after launch." },
  { q: "Can you automate my existing business?", a: "Absolutely. We map your current workflows, identify the highest-ROI bottlenecks, and ship automation that compounds." },
  { q: "Do you build mobile apps?", a: "Yes — cross-platform (Flutter / React Native) for most cases, native when the brief demands it." },
  { q: "Can you redesign existing websites?", a: "We do. Most redesigns also include a performance and SEO overhaul as part of the engagement." },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered straight."
          align="center"
        />
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((i, idx) => (
            <AccordionItem
              key={i.q}
              value={`item-${idx}`}
              className="border border-border bg-card/40 rounded-xl px-5 data-[state=open]:border-primary/40 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                {i.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {i.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}