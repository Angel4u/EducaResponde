import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBadges } from "@/components/landing/TrustBadges";
import { Services } from "@/components/landing/Services";
import { LeadMagnet } from "@/components/landing/LeadMagnet";
import { Projects } from "@/components/landing/Projects";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <LeadMagnet />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
