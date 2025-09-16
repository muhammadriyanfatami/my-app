import Link from "next/link";

export default function Categories() {
  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Customer Favorite</p>
          <h2 className="section-title">Popular Categories</h2>
        </div>

        <div className="categories-grid">
          {/* Kirim Barang */}
          <Link href="/shipping" className="category-card">
            <div className="category-icon">
              <img src="montorK.png" alt="motorK" />
            </div>
            <div className="category-title">Kirim Barang</div>
            <div className="category-subtitle">(dokumen, data kecil)</div>
          </Link>

          {/* Makanan & Minuman */}
          <Link href="/foods" className="category-card">
            <div className="category-icon">
              <img src="burger.png" alt="burger" />
            </div>
            <div className="category-title">Makanan dan Minuman</div>
          </Link>

          {/* Titip Belanja */}
          <Link href="/kebutuhan" className="category-card">
            <div className="category-icon">
              <img src="titipbeli.png" alt="titipbeli" />
            </div>
            <div className="category-title">Titip Belanja</div>
          </Link>

          {/* Paket Besar */}
          <div className="category-card">
            <div className="category-icon">
              <img src="paketbesar.png" alt="paketbesar" />
            </div>
            <div className="category-title">Paket Besar / Ekspedisi Lokal</div>
          </div>
        </div>
      </div>
    </section>
  );
}
