import React from 'react';
import styles from "../styles/Header.module.css";
import Link from 'next/link';
import { Basket, Like, Login, Search, Vector, } from './svg';

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
                            <Login/>
                            <span className={styles.headereLogin}>Login/Register</span>
                            <Search/>
                            <Basket/>
                            <Like/>
                        </div>
                    </div>
               </div>
            </header>
        </>
    )
}

export default Header;