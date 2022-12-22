import React from 'react';
import styles from "../styles/Header.module.css";
import Link from 'next/link';
import { Basket, Like, User, Search, Vector, } from '../components/svg';

   const headerLinks = [
        {
            link: "/home",
            label: "Home",
        
            id: 0
        },
        {
            link: "/shop",
            label: "Shop",
          
            id: 1
        },
        {
            link: "/about",
            label: "About",
            
            id: 2
        },
        {
            link: "/blog",
            label: "Blog",
          
            id: 3
        },
        {
            link: "/contact",
            label: "Contact",
            
            id: 4
        },
        {
            link: "/pages",
            label: "Pages",
           
            id: 5
        }
    ]
function Header (){
    return (
        <>
            <header className={styles.headerWrapper}>
               <div className={styles.container}>
                    <div className={styles.headerMain}>
                        <div>
                        <h3 className={styles.headerTitle}>Lovely</h3>
                        </div>

                        <div className={styles.headerMenu}>
                            <ul className={styles.headerList}>
                                {headerLinks.map((item)=>(
                                    <li key={item.id} ><Link className={styles.headerLink} href={item.link}>{item.label}</Link><Vector/></li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.headerSearch}>
                            <User/>
                            <span className={styles.headereLogin}>Login / Register</span>
                            <span className={styles.headericon}> <Search /></span>
                            <span className={styles.headericon}><Basket/> 1 </span>
                            <span className={styles.headerLike}><Like/> 1 </span>
                           
                        </div>
                    </div>
               </div>
            </header>
        </>
    )
}

export default Header;