import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const home = () => {
  return (
    <Layout>
      Hello World!
      <Link to="/blog/">Blog</Link>
    </Layout>
  )
}

export default home
