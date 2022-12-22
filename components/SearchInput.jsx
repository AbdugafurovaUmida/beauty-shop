import React from 'react'
import styles from '../styles/Home.module.css'
import { Search } from './svg';

function SearchInput (){
    return (
        <>
        <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} />
            <input className={styles.searchInput} type="text" placeholder='Search' />
        </div>
            
        </>
    )
}

export default SearchInput;