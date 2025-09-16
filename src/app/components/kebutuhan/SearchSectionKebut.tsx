"use client";

import React, { useState } from 'react';
import styles from './SearchSectionKebut.module.css';

const SearchSection: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <section className={styles.searchSection}>
            <div className="container">
                <div className={styles.searchContainer}>
                    <div className={styles.searchBox}>
                        <input 
                            type="text" 
                            className={styles.searchInput}
                            placeholder="Cari produk yang kamu inginkan"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className={styles.searchBtn}>
                            <img src="Group.png" alt="group" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchSection;