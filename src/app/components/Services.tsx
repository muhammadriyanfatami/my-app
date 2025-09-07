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
                <div className="service-icon">🚴‍♂️</div>
                <h3 className="service-title">Pengantaran Kilat</h3>
                <p className="service-description">Dalam 15 menit sampai di tujuan</p>
                <div className="service-rating">
                  <div className="stars">★★★★★</div>
                  <span className="rating-text">4.8</span>
                </div>
                <button className="order-btn">Order Now</button>
              </div>
              <div className="service-card">
                <div className="service-icon">🚗</div>
                <h3 className="service-title">Jemput Kirim</h3>
                <p className="service-description">Dalam 2 jam sampai di tujuan</p>
                <div className="service-rating">
                  <div className="stars">★★★★★</div>
                  <span className="rating-text">4.9</span>
                </div>
                <button className="order-btn">Order Now</button>
              </div>
              <div className="service-card">
                <div className="service-icon">🚛</div>
                <h3 className="service-title">Multi-Drop</h3>
                <p className="service-description">Mulai dari 4 jam pengantaran</p>
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
