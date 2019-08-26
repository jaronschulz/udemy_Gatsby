import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const blog = ({
    data: {
        site: { siteMetadata },
    },
}) => (
    <Layout>
        hello from blog page !!
        <h1>title: {siteMetadata.title}</h1>
        <h1>author: {siteMetadata.author}</h1>
    </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
export default blog
