import React from 'react'
import styles from "../styles/ColorChoose.module.css"

const ColorChoose = () => {
  return (
    <div className={styles.colorMain}>
        <div className={styles.colorSort}></div>
        <span className={styles.colorName}>Green</span>
    </div>
  )
}

export default ColorChoose