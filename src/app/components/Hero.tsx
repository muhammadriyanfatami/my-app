export default function Hero() {
  return (
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <h1>Pengantaran Mudah &amp; Praktis</h1>
              <p>
                Layanan kami yang mengantarkan kebutuhan Anda dengan cepat dan
                handal. Dari makanan hingga barang, kami siap membantu Anda kapan saja.
              </p>
            </div>
            <div className="hero-illustration">
              <div className="delivery-scene">
                <div className="floating-elements">
                  <div className="floating-box"></div>
                  <div className="floating-box"></div>
                  <div className="floating-box"></div>
                  <div className="floating-box"></div>
                </div>
                <button className="hero-btn">Pesan Sekarang</button>
              </div>
            </div>
          </div>
        </section>
  );
}
