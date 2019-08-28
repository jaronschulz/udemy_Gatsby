import React from 'react'

import styles from '../../css/contact.module.css'
import StyledTitle from '../styled-title'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <StyledTitle title="contact" subtitle="us" />
            <div className={styles.center}>
                <form
                    className={styles.form}
                    action="https://formspree.io/jaronschulz@gmail.com"
                    method="POST"
                >
                    <div>
                        <label htmlFor="name">name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="john doe"
                        />
                    </div>
                    <label htmlFor="email">email</label>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="john@doe.com"
                        />
                    </div>
                    <label htmlFor="message">message</label>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            className={styles.formControl}
                            placeholder="hello there ..."
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="submit"
                            className={styles.submit}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
