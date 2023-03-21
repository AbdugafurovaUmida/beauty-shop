import React from 'react';
import styles from '../components/Intro.module.css';
import ShopType from './ShopType';

export default function Intro() {

    const ShopTypes = [
        {
            title: 'Beauty ',
            amount: 17
        },
        {
            title: 'Skin Care ',
            amount: 10
        },
        {
            title: 'Health ',
            amount: 20
        },
        {
            title: 'Trendy goods ',
            amount: 27
        },
    ];

    return (
        <>
            <div className={styles.intro}>
                <div className="container">
                    <h2 className={styles.introTitle}>SHOP</h2>
                    <div className={styles.cardsWrapper}>
                        {
                            ShopTypes.map((card, i) => (
                                <ShopType key={i} data={card} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}