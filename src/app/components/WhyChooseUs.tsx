"use client";

export default function WhyChooseUs() {
      const exploreServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="why-choose-us" id="about">
          <div className="container">
            <div className="why-choose-content">
              <div className="why-choose-text">
                <p className="why-choose-subtitle">OUR STORY & SERVICES</p>
                <h2 className="why-choose-title">Kenapa Pilih Kami?</h2>
                <p className="why-choose-description">
                  "Berlandaskan komitmen, kami menghadirkan layanan pengantaran yang aman, cepat, dan terpercaya, memastikan setiap kiriman sampai tepat waktu."
                </p>
                <button className="explore-btn" onClick={exploreServices}>Explore</button>
              </div>
              <div className="features-grid-new">
                <div className="feature-card-new">
                  <div className="feature-icon-new">👨‍💼</div>
                  <h3 className="feature-title-new">AMAN</h3>
                  <p className="feature-description-new">Mengutamakan yang cepat, aman, dan terpercaya.</p>
                </div>
                <div className="feature-card-new">
                  <div className="feature-icon-new">⚡</div>
                  <h3 className="feature-title-new">FAST DELIVERY</h3>
                  <p className="feature-description-new">Pengiriman Anda, sampai di tujuan yang tepat waktu.</p>
                </div>
                <div className="feature-card-new">
                  <div className="feature-icon-new">📍</div>
                  <h3 className="feature-title-new">LOKAL</h3>
                  <p className="feature-description-new">Melayani untuk area lokal dengan pengiriman berkualitas.</p>
                </div>
                <div className="feature-card-new">
                  <div className="feature-icon-new">💰</div>
                  <h3 className="feature-title-new">TERJANGKAU</h3>
                  <p className="feature-description-new">Memberikan pelayanan terbaik dengan harga yang terjangkau.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
