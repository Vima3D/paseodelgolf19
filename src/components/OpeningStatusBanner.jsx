import React from "react";
import { useOpeningStatus } from "../hooks/useOpeningStatus";

export function OpeningStatusBanner({ t }) {
  const { timeString, isOpen } = useOpeningStatus();

  return (
    <section className="hero-section">
      {/* Time and Status Ticker */}
      <div className="status-ticker">
        <span>{t.status.timePrefix}</span> <strong>{timeString}</strong>{" "}
        <span>{t.status.and}</span>{" "}
        <strong className={isOpen ? "text-open" : "text-closed"}>
          {isOpen ? t.status.open : t.status.closed}
        </strong>
      </div>

      {/* Main Title Badge */}
      <div className="hero-tube">
        {/* <div className="title-box">
          <h2>{t.title}</h2>
        </div>
        <p className="subtitle">{t.tagline}</p> */}
      </div>
    </section>
  );
}
