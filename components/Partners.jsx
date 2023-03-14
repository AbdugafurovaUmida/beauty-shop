import React from 'react'
import styles from '../styles/Partners.module.css'
import { Hooli, Lyft, Hat, Stripe, Aws, Aliens } from '../components/svg'

const partnersIcon = [
    {
      icon: <Hooli />
    },
    {
      icon: <Lyft /> 
    },
    {
      icon: <Hat />
    },
    {
      icon: <Stripe />
    },
    {
      icon: <Aws />
    },
    {
      icon: <Aliens />
    }
]

function Partners (){
    return (
        <>
            <section className={styles.partnersSection}>
                <div className='container'>
                    <div className={styles.partnersWrapper}>
                      {
                        partnersIcon.map((item,index) => (
                            <span key={index}>{item.icon}</span>
                        ))
                      }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partners;