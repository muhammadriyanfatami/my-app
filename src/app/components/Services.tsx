export default function Services() {
  return (
       /* Categories Section */
       <section className="services-section" id="services">
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">
                Pilihan Pengantaran<br />Sesuai Kebutuhan Anda
              </h2>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <img src="motorantar.png" alt="motorantar" />
                </div>
                <h3 className="service-title">Pengantaran Kilat</h3>
                <p className="service-description">Pengiriman Instan(1-2 jam sampai)</p>
                <div className="service-rating">
                  <div className="stars">★★★★★</div>
                  <span className="rating-text">4.8</span>
                </div>
                <button className="order-btn">Order Now</button>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="jam.png" alt="jam" />
                </div>
                <h3 className="service-title">Jadwal Kirim</h3>
                <div className="service-rating">
                  <div className="stars">★★★★★</div>
                  <span className="rating-text">4.9</span>
                </div>
                <button className="order-btn">Order Now</button>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="multiDrop.png" alt="multiDrop" />
                </div>
                <h3 className="service-title">Multi-Drop</h3>
                <div className="service-rating">
                  <div className="stars">★★★★★</div>
                  <span className="rating-text">4.7</span>
                </div>
                <button className="order-btn">Order Now</button>
              </div>
            </div>
          </div>
        </section>
  );
}
