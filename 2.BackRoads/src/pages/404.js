import React from 'react'
import { Link } from 'gatsby'

import styles from '../css/error.module.css'
import Layout from '../components/layout'
import Banner from '../components/banner'

const error = ({ children }) => {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="oops it's a dead end">
                    <Link to="/" className="btn-white">
                        back to home page
                    </Link>
                </Banner>
            </header>
        </Layout>
    )
}

export default error
