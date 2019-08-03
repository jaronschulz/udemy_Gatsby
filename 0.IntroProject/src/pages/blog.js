import React from 'react'
import { Link } from 'gatsby'

const Blog = () => {
  return (
    <div>
      <h1>this is our Blog Page</h1>
      <div>
        {/* <a href="/">home page</a> */}
        <Link to="/">home page</Link>
      </div>
    </div>
  )
}

export default Blog
