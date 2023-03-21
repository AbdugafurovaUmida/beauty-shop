import React from 'react'
import styles from  "../styles/Tab.module.css"
import { Cencel } from './svg'

const Tab = () => {
  return (

       <button className={styles.tabMain}>Tag
       <span className={styles.tabCencel}> <Cencel /></span>
       </button>
  
  )
}

export default Tab