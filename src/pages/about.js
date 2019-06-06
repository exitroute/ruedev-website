import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h2>About RüDev</h2>
    <p>RüDev makes websites and develops products for clients.</p>
    <h2>About Ryan</h2>
    <p>Ryan O'Shea makes websites and develops products for clients.</p>
    <Link to="/">Go to index</Link>
  </Layout>
)

export default AboutPage