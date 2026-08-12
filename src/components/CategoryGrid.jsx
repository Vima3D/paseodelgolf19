import React, { useState } from "react";
import { menuCategories } from "../data/menuData";
import { ArrowLeft, UtensilsCrossed, ChevronRight } from "lucide-react";

export function CategoryGrid({ currentLang = "ES", t }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Helper to safely obtain localized string
  const getLoc = (obj) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[currentLang] || obj.ES || obj.EN || "";
  };

  // Level 1: Main Category Grid
  if (!selectedCategory) {
    return (
      <section className="categories-section">
        <div className="container">
          <div className="grid-main">
            {menuCategories.map((cat) => {
              const catTitle = getLoc(cat.titles);
              return (
                <article
                  key={cat.id}
                  className="category-card"
                  onClick={() => setSelectedCategory(cat)}
                >
                  <div className="card-image-wrapper">
                    <img src={cat.img} alt={catTitle} className="card-image" />
                    <div className="card-overlay">
                      <h3 className="card-title">{catTitle}</h3>
                      <span className="view-more-tag">
                        {t.menu.viewMenu} <ChevronRight size={18} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  const selectedCategoryTitle = getLoc(selectedCategory.titles);

  // Level 2: Subcategory Selection Grid
  if (selectedCategory && !selectedSubcategory) {
    return (
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <button
              onClick={() => setSelectedCategory(null)}
              className="back-btn"
            >
              <ArrowLeft size={20} />
              <span>{t.backToCategories}</span>
            </button>
            <h2 className="section-title">{selectedCategoryTitle}</h2>
          </div>

          <div className="grid-subcategories">
            {selectedCategory.subcategories.map((sub) => {
              const subTitle = getLoc(sub.titles);
              return (
                <article
                  key={sub.id}
                  className="category-card subcategory-card"
                  onClick={() => setSelectedSubcategory(sub)}
                >
                  <div className="card-image-wrapper">
                    <img src={sub.img} alt={subTitle} className="card-image" />
                    <div className="card-overlay">
                      <h3 className="card-title">{subTitle}</h3>
                      <span className="view-more-tag">
                        {t.menu.viewMenu} <ChevronRight size={18} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  const selectedSubcategoryTitle = getLoc(selectedSubcategory.titles);

  // Level 3: Menu Items List
  return (
    <section className="menu-items-section">
      <div className="container">
        <div className="section-header">
          <button
            onClick={() => setSelectedSubcategory(null)}
            className="back-btn"
          >
            <ArrowLeft size={20} />
            <span>{t.backToSubcategories}</span>
          </button>
          <h2 className="section-title">
            {selectedCategoryTitle} - {selectedSubcategoryTitle}
          </h2>
        </div>

        <div className="items-container-box">
          <div className="items-header-decor">
            <UtensilsCrossed size={36} color="#29958d" />
            <h3 className="items-heading">{selectedSubcategoryTitle}</h3>
          </div>

          <ul className="food-list">
            {selectedSubcategory.items.map((item, index) => {
              const itemName = getLoc(item.names);

              if (item.type === "title") {
                return (
                  <li key={index} className="food-title">
                    {itemName}
                  </li>
                );
              }

              return (
                <li key={index} className="food-item">
                  <div className="food-item-info">
                    <span className="food-bullet">•</span>
                    <span className="food-name">{itemName}</span>
                  </div>

                  <div className="food-item-prices">
                    {/* Single price */}
                    {item.price && (
                      <span className="price-tag">{item.price}</span>
                    )}

                    {/* Portion prices (Full / Half) */}
                    {(item.priceFull || item.priceHalf) && (
                      <div className="price-badges-group">
                        {item.priceHalf && (
                          <span className="price-badge half-portion">
                            <small>{t.menu.halfPortion}:</small>{" "}
                            {item.priceHalf}
                          </span>
                        )}
                        {item.priceFull && (
                          <span className="price-badge full-portion">
                            <small>{t.menu.fullPortion}:</small>{" "}
                            {item.priceFull}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Drink prices (With Tapa / Without Tapa) */}
                    {(item.priceNoTapa || item.priceWithTapa) && (
                      <div className="price-badges-group">
                        {item.priceNoTapa && (
                          <span className="price-badge no-tapa">
                            <small>{t.menu.withoutTapa}:</small>{" "}
                            {item.priceNoTapa}
                          </span>
                        )}
                        {item.priceWithTapa && (
                          <span className="price-badge with-tapa">
                            <small>{t.menu.withTapa}:</small>{" "}
                            {item.priceWithTapa}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
