import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Nav = styled.nav`
  padding-top: 2rem;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 0rem;
  @media (min-width: 992px) {
        margin-left: 0.5rem;
      };
  li {
    margin-right: 1rem;
  };
`

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  display: block;
  border: 1px solid #000;
  margin: 0.25rem 0;
  padding: 0.5rem;
`

const Menu = () => (
  <Nav>
    <NavList>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </NavList>
  </Nav>
)

export default Menu
