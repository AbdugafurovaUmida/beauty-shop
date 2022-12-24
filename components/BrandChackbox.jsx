import React from 'react'
import  styles from "../styles/BrandChackbox.module.css"


export default function BrandChackbox  (data) {
console.log(data, 'kuhgksdufnvs')
  return (
    
    <div className={styles.checkboxMain}>
        <input type='checkbox'  id={data.id}/>
        <label  for={data.id}>{data.name}</label>
    </div>
  )
}

