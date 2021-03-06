import React from 'react'
import { graphql } from 'gatsby'

import StyledHero from '../components/styled-hero'
import Layout from '../components/layout'

const blog = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
    query {
        blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default blog
