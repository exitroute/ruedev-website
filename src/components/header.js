import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Menu from "./menu"

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 0.85fr;
  align-items: center;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  div {
    h1 {
      margin-bottom: 0.125rem;
    } 
  }
`
const TitleLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const Header = () => (
  <header>
    <Wrapper>
      <div>
        <h1>
          <TitleLink to="/">RüDev</TitleLink>
        </h1>
        <small>#ryanjamesoshea</small>
      </div>
      <Menu />
    </Wrapper>
  </header>
)

export default Header
