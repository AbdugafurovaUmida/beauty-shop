import React from 'react'
import styles from  "../styles/Tab.module.css"
import { Cencel } from './svg'

const Tab = () => {
  return (
    <div>
      
       <button className={styles.tabMain}>Tag <Cencel className={styles.tabCencel} /></button>

    </div>
  )
}

export default Tab