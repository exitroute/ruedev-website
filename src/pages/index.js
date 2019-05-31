import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
    <h1>RÜDEV</h1>
    <p>Web Development From Berlin</p>

    <div style={{
      display: "flex"
    }}>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default IndexPage
