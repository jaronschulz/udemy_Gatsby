import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import StyledTitle from '../styled-title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const getAbout = graphql`
    query aboutImage {
        aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const About = () => {
    const { aboutImage } = useStaticQuery(getAbout)

    return (
        <section className={styles.about}>
            <StyledTitle title="about" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <Img
                            fluid={aboutImage.childImageSharp.fluid}
                            alt="awesome landscape"
                        />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis dicta sed natus?
                    </p>
                    <button type="button" className="btn-primary">
                        read more
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About
