import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 300px 300px 1fr",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <div
      style={{
        gridColumnStart: "2",
        textAlign: "center",
      }}
    >
      <h1>RÜDEV</h1>
      <p>Web Development From Berlin</p>
    </div>
    <ul
      style={{
        gridColumnStart: "3",
        textAlign: "center",
        padding: "0",
        listStyle: "none",
      }}
    >
      <li>
        <button>
          <Link to="/about">About</Link>
        </button>
      </li>
      <li>
        <button>
          <Link to="/projects">Projects</Link>
        </button>
      </li>
      <li>
        <button>
          <Link to="/blog">Blog</Link>
        </button>
      </li>
    </ul>
  </div>
)

export default IndexPage
