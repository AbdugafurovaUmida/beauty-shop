import Link from 'next/link';
import React from 'react'
import styles from '../styles/Footer.module.css'

const companyInfoLinks = [
    {
        link: '/about',
        name: 'About Us'
    },
    {
        link: '/carrier',
        name: 'Carrier'
    },
    {
        link: '/hiring',
        name: 'We are hiring'
    },
    {
        link: 'blog',
        name: 'Blog'
    }
]

const featureLinks = [
    {
        link: '/marketing',
        name: 'Business Marketing'
    },
    {
        link: '/analytic',
        name: 'User Analytic'
    },
    {
        link: '/chat',
        name: 'Live Chat'
    },
    {
        link: '/support',
        name: 'Unlimited Support'
    }
]

const resourcesLinks = [
    {
        link: '/ios&android',
        name: 'IOS & Android'
    },
    {
        link: '/demo',
        name: 'Watch a Demo'
    },
    {
        link: '/customers',
        name: 'Customers'
    },
    {
        link: '/api',
        name: 'API'
    }
]

function Footer (){
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div className='container'>
                      <div className={styles.footerTopRow}>
                        <ul className={styles.footerNav}>
                            <h5 className={styles.footerTitle}>Company Info</h5>
                            {companyInfoLinks.map((item, index) => (
                            <li key={index}><Link className={styles.footerLink} href={item.link}>{item.name}</Link></li>
                            ))}
                        </ul>
                        <ul className={styles.footerNav}>
                            <h5 className={styles.footerTitle}>Legal</h5>
                            {companyInfoLinks.map((item, index) => (
                            <li key={index}><Link className={styles.footerLink} href={item.link}>{item.name}</Link></li>
                            ))}
                        </ul>
                        <ul className={styles.footerNav}>
                            <h5 className={styles.footerTitle}>Features</h5>
                            {featureLinks.map((item, index) => (
                                <li key={index}><Link className={styles.footerLink} href={item.link}>{item.name}</Link></li>
                            ))}
                        </ul>
                        <ul className={styles.footerNav}>
                            <h5 className={styles.footerTitle}>Resources</h5>
                            {resourcesLinks.map((item,index) => (
                                <li key={index}><Link className={styles.footerLink} href={item.link}>{item.name}</Link></li>
                            ))}
                        </ul>
                        <ul className={styles.footerNav}>
                            <h5 className={styles.footerTitle}>Get In Touch</h5>
                            <form className={styles.subscription}>
                              <input className={styles.subscriptionInput} type="email" placeholder="subscribe@.now" />
                              <button className={styles.subscriptionBtn} type="button">
                                <span className={styles.beforeSubmit}>Subscribe</span>
                                <span className={styles.afterSubmit}>Thank you for subscribing!</span>
                               </button>
                            </form>
                            <p className={styles.subscribeText}>Lore imp sum dolor Amit</p>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className='container'>
                        <p className={styles.footerBottomText}>Made With Love By Finland All Right Reserved </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;