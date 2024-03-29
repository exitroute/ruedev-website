import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import styled from "styled-components"

const Role = styled.p`
  && {
    grid-column-start: 1;
    @media (min-width: 992px) {
      text-align: right; 
    }
  }
`
const Title = styled.h2`
  margin-bottom: 0.25rem;
`

export default function projectTemplate({ data,}) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <section>
        <Title>{frontmatter.title}</Title>
        <Role>{frontmatter.role}</Role>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        role
      }
    }
  }
`
