import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>RüDev makes websites and develops products for clients.</p>
    <Link to="/">Go to index</Link>
  </Layout>
)

export default AboutPage