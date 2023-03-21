import React from 'react'
import Image from 'next/image'
import image from "../assets/img/product.jpg"
import styles from './SingleProductCard.module.css'
import { Heart, Baskett, Eye } from '../components/svg'
import StarRating from './StarRating'
const extraIcons = [
    {
        icon: <Heart />
    },
    {
        icon: <Baskett />
    },
    {
        icon: <Eye />
    },
]

const SingleProductCard = () => {
    return (
        <div>
            <div className={styles.ImageFrame}>
                <Image className={image} src={image} width={235} height={300} alt="image" />
               <div className={styles.randomName}>                  {
                    extraIcons.map((item, index) => (
                        <div key={index} className={styles.whiteRound}>
                            <span>{item.icon}</span>
                        </div>
                    ))
                }
                </div>
            </div>
            <h5 className={styles.cardTitle}>Cream Contour</h5>
            <p className={styles.Prices}><span className={styles.initialPrice}>$16.48</span>  <span className={styles.discountPrice}>$6.48</span></p>
              <div className={styles.reviewLine}> <StarRating /> <span className={styles.reviews}>10 Reviews</span></div> 
        </div>
    ) 
}

export default SingleProductCard