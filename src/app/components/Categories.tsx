export default function Categories() {
  return (
        <section className="categories-section" id="categories">
          <div className="container">
            <div className="section-header">
              <p className="section-subtitle">Customer Favorite</p>
              <h2 className="section-title">Popular Categories</h2>
            </div>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-icon">🛒</div>
                <div className="category-title">Daily Needs &amp;</div>
                <div className="category-subtitle">Groceries</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🥤</div>
                <div className="category-title">Beverages</div>
                <div className="category-subtitle">Fresh drinks</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🏷️</div>
                <div className="category-title">Top Brands</div>
                <div className="category-subtitle">Quality products</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🥗</div>
                <div className="category-title">Healthy Food</div>
                <div className="category-subtitle">Organic &amp; fresh</div>
              </div>
            </div>
          </div>
        </section>
  );
}
