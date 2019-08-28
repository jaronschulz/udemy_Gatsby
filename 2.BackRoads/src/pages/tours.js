import React from 'react'
import { graphql } from 'gatsby'

import StyledHero from '../components/styled-hero'
import Layout from '../components/layout'

const tours = ({ data }) => (
    <Layout>
        <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
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

export default tours
