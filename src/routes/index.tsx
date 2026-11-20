import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar, type ViewMode } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBadges } from "@/components/landing/TrustBadges";
import { Services } from "@/components/landing/Services";
import { Projects } from "@/components/landing/Projects";
import { Methodology } from "@/components/landing/Methodology";
import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";
import { CursosView } from "@/components/landing/CursosView";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [view, setView] = useState<ViewMode>("landing");

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar setView={setView} currentView={view} />
      <main className="flex-1">
        {view === "landing" ? (
          <>
            <Hero setView={setView} />
            <TrustBadges />
            <Services setView={setView} />
            <Projects setView={setView} />
            <Methodology />
            <About />
            <Contact />
          </>
        ) : (
          <CursosView setView={setView} />
        )}
      </main>
      <Footer setView={setView} />
      <WhatsAppFAB />
    </div>
  );
}
