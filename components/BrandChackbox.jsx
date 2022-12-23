import React from 'react'
import  styles from "../styles/BrandChackbox.module.css"


const BrandChackbox = () => {


  return (
    <div className={styles.chackboxMain}>
        <input type='checkbox' className={styles.chackbox}/>
        <span className={styles.chackboxTitle} >Make Up</span>
    </div>
  )
}

export default BrandChackbox