import React from "react";
import { MapPin, Phone } from "lucide-react";

export function ContactSection({ t }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="bool">
          <h4>{t.contact.title}</h4>
          <hr />
        </div>

        <div className="contact-grid">
          {/* Opening Hours & Reservations */}
          <div className="contact-card horario-card">
            <h3 className="card-header">{t.contact.hoursTitle}</h3>
            <ul className="hours-list">
              {t.contact.hours.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>

            <div className="reservas-box">
              <h4>{t.contact.reservationsTitle}</h4>
              <a href="tel:+34624603338" className="phone-link">
                <Phone size={20} />
                <span>+34 624 60 33 38</span>
              </a>
              <p className="phone-note">{t.contact.phoneOnly}</p>
            </div>

            <div className="facebook-box">
              <h4>Facebook</h4>
              <a
                href="https://www.facebook.com/p/Paseo-del-Golf-19-100024944452037/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Paseodelgolf19</span>
              </a>
            </div>
          </div>

          {/* Location & Map */}
          <div className="contact-card ubicacion-card">
            <h3 className="card-header flex-center">
              <MapPin size={24} className="pin-icon" />
              <span>{t.contact.locationTitle}</span>
            </h3>
            <p className="address-text">
              {t.contact.address[0]}
              <br />
              {t.contact.address[1]}
            </p>

            <div className="map-wrapper">
              <iframe
                title="Google Maps Location - Paseo del Golf 19"
                className="mapa"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3198.0205289193805!2d-2.6347945318087875!3d36.72206819757075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd70653b14157157%3A0x186ce4b23c705bd0!2sPDG!5e0!3m2!1ses!2ses!4v1705452847829!5m2!1ses!2ses"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
