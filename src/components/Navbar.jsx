import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar({ currentLang, setLang, activeTab, setActiveTab, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const flags = [
    {
      code: "ES",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj47rlhfsl2NR3W82sk8bTu9GffcdCM5BDELP6dSGHPVavSCVo0YAHHYD0BohS9ydXI4iII9iRCxt27vZthiPwQvekTCsa00hOkAMCzXRQ8XaJSIlcqKdBgkBmOxfKbykG7rof999hAIWSC6RnfbIvtBx1QZVoFQq2YsByAXCsP-HHi6w790yi4klNnvd8/s118/Spain.png",
      alt: "España",
    },
    {
      code: "DE",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguNp6vTRe0vTRkAqj7T2sYvH-x3-WCbepuTJdxOupSs0iwy_SRTKcn8z2O8OQeJvp3Or4Xo_hIt8bcqg0OBrdqJdgPEvgQr9faN8ps56Ryh13n3UUPzVwNsowIf3lailNQKftbgcLQzUYqF7oRDjnZpB5EcdqQetNhIYrYYWRDAxCVT3HrFfYlbczIRQs/s118/Germany.png",
      alt: "Deutschland",
    },
    {
      code: "EN",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0rIyOZN-PF-RzaF5u8pg1ekElLFWaV-f48trCMII10b1WwoA3oTdaCAMKUMWrpnYy_9jX2omDY0HVwK0kv_Zo6i6IE54mXDf4SfbqXkprQ6Z3dvHxlILTUI5CrPoB3f8T6aYWeiFfWpNDmqtX4BGxnugMtnK4WZFssL8qlbQXirtk43NILp2EOUIv7Xw/s118/England.png",
      alt: "England",
    },
    {
      code: "SE",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwjsFHuYyaTPomLTyFxssJSiaCkI9UAm8YyclPmF0FOtbt2gU_vDeOoxYQf4AR_4DQb_fTFNwxNu7_0851YCIlpQK35shUuUVnh8HeEJJM2Jmd2u46OG83U7wb5ILKfzF_0TThkAgwTEaoSOk9shtLq4LGihoChiUYYzfYMdHBoMarY2EMuulaov0pefg/s118/Sweden.png",
      alt: "Sverige",
    },
  ];

  const navItems = [
    { id: "inicio", label: t.nav.home },
    { id: "galeria", label: t.nav.gallery },
    { id: "eventos", label: t.nav.events },
    { id: "contacto", label: t.nav.contact },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
    if (id === "contacto") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <button
            onClick={() => handleNavClick("inicio")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2By7swle0RrOQiMFpHYHqK0T9veY55ZDxnfThUNG4BlF1mByyf0KQ7bnFoiHpxEY148WByWMHOfjwVR0JL-wZ68KS7NK3j2kDGT9o2f7WhMNV7gib5U2ZFBY0MagcY_UZH99w30E5l_513u6nbe-NxJz4z7b-2M4sCAO4PWNCmHFHTE2881U6WYGUj-E/s241/logo.png"
              alt={t.title}
              height="65"
              style={{ objectFit: "contain" }}
            />
          </button>
        </div>

        {/* Right Section: Flags & Navigation Links */}
        <div className="header-right">
          {/* Flag selector */}
          <div className="flags-list">
            {flags.map((flag) => (
              <button
                key={flag.code}
                onClick={() => setLang(flag.code)}
                className={`flag-btn ${currentLang === flag.code ? "flag-active" : ""}`}
                title={flag.alt}
              >
                <img src={flag.img} alt={flag.alt} width="45" height="35" />
              </button>
            ))}
          </div>

          {/* Desktop Links */}
          <nav className="desktop-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-link ${activeTab === item.id ? "nav-link-active" : ""}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-link ${activeTab === item.id ? "active" : ""}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
