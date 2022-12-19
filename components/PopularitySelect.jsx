import React from 'react'
import styles from '../styles/Home.module.css'
import { ArrowDown } from './svg';

function PopularitySelect (){
    return (
        <>
            <button className={styles.popularitySelect}>Popularity <ArrowDown /></button>
        </>
    )
}

export default PopularitySelect;