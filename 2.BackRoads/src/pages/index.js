import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/layout'
import StyledHero from '../components/styled-hero'
import Banner from '../components/banner'
import About from '../components/home/about'
import Services from '../components/home/services'

export default ({ data }) => (
    <Layout>
        <StyledHero isHome="true" img={data.defaultBcg.childImageSharp.fluid}>
            <Banner
                title="continue exploring"
                info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                recusandae aperiam a"
            >
                <AniLink fade to="/tours/" className="btn-white">
                    explore tours
                </AniLink>
            </Banner>
        </StyledHero>
        <About />
        <Services />
    </Layout>
)

export const query = graphql`
    query {
        defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
