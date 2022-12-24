import React from 'react'
import styles from "../styles/ColorChoose.module.css"

const ColorChoose = ({props}) => {
  return (
    <div className={styles.colorMain}>
        <div className={styles.colorSort} style={{background:props.color}} ></div>
        <span className={styles.colorName}>{props.name}</span>
    </div>
  )
}

export default ColorChoose