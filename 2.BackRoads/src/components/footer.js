import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((link, i) => (
                    <AniLink key={i} fade to={link.path}>
                        {link.text}
                    </AniLink>
                ))}
            </div>
            <div className={styles.icons}>
                {socialIcons.map((item, i) => (
                    <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            <div className={styles.copyright}>
                copyright &copy; backroads travel company{' '}
                {new Date().getFullYear()} all
            </div>
        </footer>
    )
}

export default Footer
