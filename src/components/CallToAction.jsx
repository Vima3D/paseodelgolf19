import React from "react";

export function CallToAction({ t }) {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="cta-parallax-section">
      {/* <div className="cta-content">
        <h3 className="cta-title">
          {t.cta.title} <br />
          <span>{t.cta.subtitle}</span>
        </h3>
        <a href="#contact" onClick={scrollToContact} className="cta-button">
          {t.cta.button}
        </a>
      </div> */}
    </section>
  );
}
