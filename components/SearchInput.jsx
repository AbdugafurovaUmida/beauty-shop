import React from 'react'
import styles from '../styles/Home.module.css'
import { SearchCategory } from './svg';

function SearchInput (){
    return (
        <>
        <div className={styles.searchWrapper}>
            <SearchCategory className={styles.searchIcon} />
            <input className={styles.searchInput} type="text" placeholder='Search' />
        </div>
            
        </>
    )
}

export default SearchInput;