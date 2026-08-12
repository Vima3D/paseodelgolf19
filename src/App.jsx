import React, { useState } from "react";
import { SplashIntro } from "./components/SplashIntro";
import { Navbar } from "./components/Navbar";
import { OpeningStatusBanner } from "./components/OpeningStatusBanner";
import { CategoryGrid } from "./components/CategoryGrid";
import { CallToAction } from "./components/CallToAction";
import { GallerySection } from "./components/GallerySection";
import { EventsSection } from "./components/EventsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { translations } from "./data/translations";

export default function App() {
  const [currentLang, setLang] = useState("ES");
  const [activeTab, setActiveTab] = useState("inicio");

  const t = translations[currentLang] || translations.ES;

  return (
    <div className="app-root">
      {/* Splash Opening Animation */}
      <SplashIntro />

      {/* Header & Sticky Navbar */}
      <Navbar
        currentLang={currentLang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        t={t}
      />

      {/* Main Content View Switcher */}
      <main>
        {activeTab === "inicio" && (
          <>
            <OpeningStatusBanner t={t} />
            <CategoryGrid currentLang={currentLang} t={t} />
            <CallToAction t={t} />
            <ContactSection t={t} />
          </>
        )}

        {activeTab === "galeria" && (
          <>
            <div style={{ marginTop: "80px" }}></div>
            <GallerySection t={t} />
            <ContactSection t={t} />
          </>
        )}

        {activeTab === "eventos" && (
          <>
            <div style={{ marginTop: "80px" }}></div>
            <EventsSection t={t} />
            <ContactSection t={t} />
          </>
        )}

        {activeTab === "contacto" && (
          <>
            <div style={{ marginTop: "80px" }}></div>
            <ContactSection t={t} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
