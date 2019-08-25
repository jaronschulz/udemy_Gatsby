import React from 'react'
import StyledTitle from '../styled-title'
import styles from '../../css/services.module.css'
import services from '../../constants/services'

const Services = () => {
    return (
        <section className={styles.services}>
            <StyledTitle title="our" subtitle="services" />
            <div className={styles.center}>
                {services.map((item, i) => {
                    return (
                        <article key={i} className={styles.service}>
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
