import React from 'react'

import styles from '../../css/contact.module.css'
import StyledTitle from '../styled-title'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <StyledTitle title="contact" subtitle="us" />
            <div className={styles.center}>
                <form className={styles.form} action="">
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="john doe"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="john@doe.com"
                        />
                    </div>
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
