"use client";

import React, { use } from 'react';
import styles from './HeroKebut.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1>Belanja Harus Ribet?<br />Kenapa Nggak Lebih Mudah?</h1>
                        <p>"Temukan solusi belanja, dari ribuan<br />produk pilihan"</p>
                    </div>
                    <div className={styles.heroImage}>
                        <div className={styles.heroCharacter}>
                            <img src="riyan.png" alt="riyan"
                            height={280}
                            width={280}
                            draggable="false" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;