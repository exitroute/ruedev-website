import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"

const IndexPage = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.siteTitle}>
      <h1>RüDev</h1>
      <p>Web Development From Berlin</p>
    </div>
    <ul className={styles.nav}>
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
