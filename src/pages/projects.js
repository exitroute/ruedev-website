import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const ProjectContainer = styled.div`
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
`

const ProjectsPage = ({ data }) => (
  <Layout>
    <section>
      <h2>Projects by RüDev</h2>
      <p>Welcome to the project portfolio of Rüdev. Check out the ResumeBot!</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
        obcaecati recusandae ex quam itaque dolor reprehenderit quo nesciunt,
        laborum ut quibusdam tempore nostrum nulla aut sed iure inventore
        tenetur at.
      </p>
      {data.allMarkdownRemark.edges
        .filter(project => project.node.frontmatter.category === "project-post")
        .map(project => (
          <ProjectContainer key={project.node.id}>
            <StyledLink to={project.node.frontmatter.path}>
              <h3>{project.node.frontmatter.title}</h3>
            </StyledLink>
            <p>{project.node.excerpt}</p>
          </ProjectContainer>
        ))}
    </section>
  </Layout>
)

export const projectQuery = graphql`
  query projectIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            date
            title
            category
          }
        }
      }
    }
  }
`

export default ProjectsPage
