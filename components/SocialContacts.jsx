import Link from 'next/link';
import React from 'react'
import styles from '../styles/SocialContacts.module.css'
import { Facebook, Instagram, Twitter} from '../components/svg'


function SocialContacts (){
    return (
        <div className='container'>
          <div className={styles.socialContacts}>
            <Link className={styles.footerLogo} href="/">Lovely</Link>
                <ul className={styles.socialMenu}>
                    <li>
                        <Link className={styles.socialLink} href="https://www.telegram.com/" target="_blank"><Facebook /></Link>
                    </li>
                    <li>
                        <Link className={styles.socialLink} href="https://www.instagram.com/" target="_blank"><Instagram /></Link>
                    </li>
                    <li>
                        <Link className={styles.socialLink} href="https://twitter.com/" target="_blank"><Twitter /></Link>
                    </li>
                </ul>
           
          </div>
        </div>
    )
}

export default SocialContacts;
