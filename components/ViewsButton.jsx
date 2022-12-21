import React from 'react'
import styles from '../styles/Home.module.css'


function ViewsButton (props){
    return (
        <>
        <button className={styles.viewsButton}>
            {props.viewsIcon}
        </button>
        </>
    )
}

export default ViewsButton;