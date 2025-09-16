"use client";

import React from "react";
import styles from "./FavoritesSectionKebut.module.css";

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  class: string;
}

const FavoritesSection: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Pilihan Sehat", price: "Rp 15.000", img: "/buah.png", class: styles.product1 },
    { id: 2, name: "Cemilan", price: "Rp 8.500", img: "/jajan.png", class: styles.product2 },
    { id: 3, name: "Detergen dan sabun", price: "Rp 25.000", img: "/sayang.png", class: styles.product3 },
    { id: 4, name: "Siaga Obat", price: "Rp 12.000", img: "/obat.png", class: styles.product4 },
    { id: 5, name: "21+", price: "Rp 7.000", img: "/21+.png", class: styles.product5 },
  ];

  return (
    <section className={styles.favoritesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Pilihan Hari Ini</h2>
          <a href="#" className={styles.viewAll}>
            Lihat Semua →
          </a>
        </div>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={`${styles.productImage} ${product.class}`}>
                <img src={product.img} alt={product.name} className={styles.productEmoji} />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productPrice}>{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesSection;
