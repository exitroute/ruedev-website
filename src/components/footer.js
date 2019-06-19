import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
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
const Footer = () => (
  <footer>
    <Wrapper>
      <p>
        © Ryan James O'Shea {new Date().getFullYear()}, <br />
        Built with{` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </Wrapper>
  </footer>
)

export default Footer
