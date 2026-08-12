import React, { useState } from "react";
import { galleryImages } from "../data/galleryData";
import { X, ZoomIn } from "lucide-react";

export function GallerySection({ t }) {
  const [columnsCount, setColumnsCount] = useState(2);
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title text-center">Galería</h2>

        <div className="gallery-controls">
          <p className="controls-instruction">{t.gallery.instruction}</p>
          <div className="btn-group">
            <button
              className={`btn-column ${columnsCount === 1 ? "active" : ""}`}
              onClick={() => setColumnsCount(1)}
            >
              1
            </button>
            <button
              className={`btn-column ${columnsCount === 2 ? "active" : ""}`}
              onClick={() => setColumnsCount(2)}
            >
              2
            </button>
            <button
              className={`btn-column ${columnsCount === 3 ? "active" : ""}`}
              onClick={() => setColumnsCount(3)}
            >
              3
            </button>
          </div>
        </div>

        {/* Dynamic Photo Grid */}
        <div
          className="gallery-grid"
          style={{
            gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
          }}
        >
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => setActiveImage(src)}
            >
              <img
                src={src}
                alt={`Paseo del Golf galeria ${idx + 1}`}
                loading="lazy"
                className="gallery-img"
              />
              <div className="gallery-hover-overlay">
                <ZoomIn size={32} color="#ffffff" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-modal" onClick={() => setActiveImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Cerrar modal"
          >
            <X size={32} color="#ffffff" />
          </button>
          <img
            src={activeImage}
            alt="Ampliación Galería Paseo del Golf 19"
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
