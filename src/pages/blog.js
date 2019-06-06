import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => (
  <Layout>
    <h1>RüBlog</h1>
    <p>
      Read all about it! Berlin web development company writes about web
      development and more!
    </p>
    <Link to="/">Go to index</Link>
  </Layout>
)

export default BlogPage
