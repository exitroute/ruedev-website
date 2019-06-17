import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"

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
      {data.allMarkdownRemark.edges.map(project => (
        <div key={project.node.id}>
          <h3>{project.node.frontmatter.title}</h3>
          <br />
          <Link to={project.node.frontmatter.path}>Read more</Link>
        </div>
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
          frontmatter {
            path
            date
            title
          }
        }
      }
    }
  }
`

export default ProjectsPage
