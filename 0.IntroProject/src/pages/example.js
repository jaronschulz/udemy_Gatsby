import React from 'react'
import Header from '../components/Header'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const example = props => {
  const { name, age } = props.data.site.siteMetadata.person
  return (
    <Layout>
      example page
      <Header />
      <div>
        this is the Person: <h4>name: {name}</h4> <h4>age: {age}</h4>
      </div>
    </Layout>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        description
        title
        author
        person: data {
          name
          age
        }
      }
    }
  }
`

export default example
