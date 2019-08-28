import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from '../css/error.module.css'
import Layout from '../components/layout'
import Banner from '../components/banner'

const error = ({ children }) => {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="oops it's a dead end">
                    <AniLink fade to="/" className="btn-white">
                        back to home page
                    </AniLink>
                </Banner>
            </header>
        </Layout>
    )
}

export default error
