import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    <section>
      <h2>RüBlog</h2>
      <p>
        Read all about it! Berlin web development company writes about web
        development and more!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, est
        repellat quibusdam, corrupti voluptates a reprehenderit iusto
        consequatur natus culpa atque, dolor unde nisi optio nihil incidunt.
        Velit, consequuntur porro.
      </p>
      {data.allMarkdownRemark.edges
        .filter(post => post.node.frontmatter.category === "blog-post")
        .map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <p>{post.node.excerpt}</p>
            <Link to={post.node.frontmatter.path}>Read more</Link>
            <br />
          </div>
        ))}
    </section>
  </Layout>
)

export const blogQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
            category
            date
            tags
          }
        }
      }
    }
  }
`

export default BlogPage
