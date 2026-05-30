import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Process } from "@/components/site/Process";
import { AutomationPipeline } from "@/components/site/AutomationPipeline";
import { Portfolio } from "@/components/site/Portfolio";
import { Founder } from "@/components/site/Founder";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import ogCover from "@/assets/og-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibely Studio — Build. Automate. Scale." },
      {
        name: "description",
        content:
          "Vibely Studio engineers premium websites, mobile apps, and AI automation systems. Modernize operations and grow faster with a studio that ships like a product team.",
      },
      {
        name: "keywords",
        content:
          "web development, mobile app development, AI automation, freelance developer India, Mayank, MayankZen Studios, custom website design, business automation, SaaS development, immersive digital solutions",
      },
      { property: "og:title", content: "Vibely Studio — Build. Automate. Scale." },
      {
        property: "og:description",
        content:
          "Premium digital studio for web, mobile, and AI automation. Founded by Mayank — engineer, freelancer, founder.",
      },
      { property: "og:image", content: ogCover },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Vibely Studio — Build. Automate. Scale." },
      { name: "twitter:description", content: "Websites, mobile apps & AI automation built to ship and scale." },
      { name: "twitter:image", content: ogCover },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Vibely Studio",
          alternateName: "MayankZen Studios",
          description:
            "Digital studio building websites, mobile apps, and AI automation systems.",
          founder: { "@type": "Person", name: "Mayank" },
          areaServed: "Worldwide",
          telephone: "+91-99681-98010",
          serviceType: [
            "Web Development",
            "Mobile App Development",
            "AI Automation",
            "SaaS Engineering",
            "Product Design",
          ],
          sameAs: [
            "https://github.com/MAYANK198010",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <AutomationPipeline />
        <Portfolio />
        <Founder />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
