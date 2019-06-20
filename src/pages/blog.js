import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const BlogContainer = styled.div`
  @media (min-width: 992px) {
    grid-column-start: 2;
  }
  margin: 1rem 0;
  background: #dcdcdc;
  padding: 0.8rem;
  :hover {
    background: #d3d3d3;
  }
`
const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  :hover {
    text-decoration-line: underline;
  }
`

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
          <BlogContainer key={post.node.id}>
            <StyledLink to={post.node.frontmatter.path}>
              <h3>{post.node.frontmatter.title}</h3>
            </StyledLink>
            <p>{post.node.excerpt}</p>
          </BlogContainer>
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
