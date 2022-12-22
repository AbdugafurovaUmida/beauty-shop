import React from "react";
import { SquareIcon } from "./svg";
import styles from '../components/ShopType.module.css';

export default function ShopType({data}) {
    return (
        <>
            <div className={styles.card}>
                <SquareIcon className={styles.squareIcon} />                
                <div className={styles.cardInfo}>
                    <h5  className={styles.cardTitle}> {data?.title}</h5>
                    <div className={styles.goodsAmount}>
                        <span>{data?.amount}</span> <span> PRODUCT</span>
                    </div>
                   </div>
            </div>
        </>
    )
}