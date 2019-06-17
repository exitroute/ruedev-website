import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"

import "./layout.css"

const Main = styled.main`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  section {
    div {
      padding: 1rem 0;
    }
    display: grid;
    @media (min-width: 992px) {
      grid-template-columns: 16rem 1fr;
      grid-auto-rows: auto;
      column-gap: 1rem;
      h2 {
        justify-self: end;
      }
      p {
        grid-column-start: 2;
        max-width: 960px;
      }
      div {
        grid-column-start: 2;
      }
    }
  }
`
const Footer = styled.footer`
  padding: 0px 1.0875rem 1.45rem;
  display: grid;
  @media (min-width: 992px) {
    grid-template-columns: 16rem 1fr;
    column-gap: 1rem;
    p {
      grid-column-start: 2;
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <Main>{children}</Main>
        <Footer>
          <p>
            © {new Date().getFullYear()}, Built with{` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
