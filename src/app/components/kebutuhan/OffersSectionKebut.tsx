"use client";

import React from "react";
import styles from "./OffersSectionKebut.module.css";

const OffersSection: React.FC = () => {
  return (
    <section className={styles.offersSection}>
      <div className="container">
        <div className={styles.titleWrapper}>
            <div className={styles.promoLabel}>PROMO</div>
          <h2 className={styles.sectionTitle}>Buat Pelanggan Baru Nihh~</h2>
        </div>

        {/* --- OFFERS GRID --- */}
        <div className={styles.offersGrid}>
          <div className={`${styles.offerCard} ${styles.offer1}`}>
            <div className={styles.offerContent}>
            </div>
            <img
              src="/prom1.png"
              alt="promo 1"
              className={styles.offerImage}
            />
          </div>

          <div className={`${styles.offerCard} ${styles.offer2}`}>
            <div className={styles.offerContent}>
            </div>
            <img
              src="/prom2.png"
              alt="promo 2"
              className={styles.offerImage}
            />
          </div>

          <div className={`${styles.offerCard} ${styles.offer3}`}>
            <div className={styles.offerContent}>
            </div>
            <div className={styles.offerDiscount}>50%</div>
            <img
              src="/prom3.png"
              alt="promo 3"
              className={styles.offerImage}
            />
          </div>
        </div>

        {/* --- PROMO BANNER --- */}
        <div className={styles.promoBanner}>
          <div className={styles.promoContent}>
            <h2>
              BERGABUNG
              <br />
              DENGAN PAKET
              <br />
              KET BUDGET
            </h2>
            <p>Mulai dari 200k/Bulan aja!</p>
          </div>
          <div className={styles.promoCharacter}>🛍️</div>
        </div>

        {/* --- CTA GRID --- */}
        <div className={styles.ctaGrid}>
          <div className={styles.ctaCard}>
            <h4>Paket A</h4>
            <p>200k/bulan</p>
          </div>
          <div className={styles.ctaCard}>
            <h4>Paket B</h4>
            <p>350k/bulan</p>
          </div>
          <div className={styles.ctaCard}>
            <h4>Paket C</h4>
            <p>500k/bulan</p>
          </div>
          <div className={styles.ctaCard}>
            <h4>Custom</h4>
            <p>Sesuai kebutuhan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
