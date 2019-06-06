import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Nav = styled.nav`
  padding-top: 2rem;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`

const Menu = () => (
  <Nav>
    <NavList>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </NavList>
  </Nav>
)

export default Menu
