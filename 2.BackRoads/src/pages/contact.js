import React from 'react'
import { graphql } from 'gatsby'

import StyledHero from '../components/styled-hero'
import Layout from '../components/layout'
import Contact from '../components/contact/contact'

const contact = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.contactBcg.childImageSharp.fluid} />
            <Contact />
        </Layout>
    )
}

export const query = graphql`
    query {
        contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default contact
