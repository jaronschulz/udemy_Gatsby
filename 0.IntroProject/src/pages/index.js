import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div>
    <h1>this is our Home Page</h1>
    <div>
      {/* <a href="/blog">blog</a> */}
      <Link to="/blog">blog</Link>
    </div>
    <div>
      <a href="https://www.gatsby.org">gatsby page</a>
    </div>
  </div>
)
