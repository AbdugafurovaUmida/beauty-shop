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
                            <Link href="/" className={styles.headerLogo}>Lovely</Link>
                        </div> 
                   
                        <div className={styles.headerMenu}>
                            <ul className={styles.headerList}>
                                {headerLinks.map((item)=>(
                                    <li key={item.id} ><Link className={styles.headerLink} href={item.link}>{item.label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.headerSearch}>
                            <div className={styles.headerLeft}>
                                <span><User/> </span>
                                <div className={styles.headereLogin}>Login /</div>
                                <div className={styles.headereLogin}>Register</div>
                            </div>
                        
                            <div className={styles.headerRight}>
                                <div className={styles.headericon}><Search /></div>
                                <div className={styles.headericon}><Basket/><span className={styles.headerLike}>1</span></div>
                                <div className={styles.headericon}><Like/> <span className={styles.headerLike}>1</span></div>
                            </div>     
                        </div>
                    </div>
               </div>
            </header>
        </>
    )
}

export default Header;