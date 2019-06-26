import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Section from "../components/section"

const DefList = styled.dl`
  dt::after {
    content: ":";
  }
  @media (min-width: 768px) {
  dt {
    float: left;
    clear: left;
    text-align: right;
      width: 7rem;
  }
    dd {
      margin: 0 0 0.15rem 7.5rem;
  }
  }
`

const AboutPage = () => (
  <Layout>
    <Section>
      <h2>About RüDev</h2>
      <p>
        RüDev is a web development company in Berlin that helps people get the
        most from contemporary web development.
      </p>
      <p>
        Ryan James O'Shea started RüDev after forking his edtech career, and
        studying web dev elopment.
      </p>
      <p>
        Rüdev works with small businesses, the self-employed, or anyone who
        wants to get more from the internet and web development.
      </p>
      <p>
        We love to explore problems, find hidden opportunites, and then do
        killer projects that make people and work better, and smile.
      </p>
      <p>
        So, let's talk about your website, or your data layer, or your sense of
        being overwhelmed with choices, and make it work better.
      </p>
      <p>
        We love doing this. We want you to enjoy the experience as much as we
        do!
      </p>
    </Section>
    <Section>
      <h2>About Ryan</h2>
      <p>
        Ryan James O'Shea is a trained web developer living and working in
        Berlin.
      </p>
      <p>
        He develops software because it gives him such a kick when he solves a
        problem and it helps someone else with their goals.
      </p>
      <p>
        Before web development, Ryan had a 12 year career in edtech with Wall
        Street English and Pearson as a manager and trainer. 
      </p>
      <p>
        He also has a education in architectural design from the University of
        Strathcylde in Glasgow.
      </p>
      <p>
        <b>Fun fact</b>: if he's running a workshop with a warm-up where the
        introduction needs a "fun fact", he usually says something about:&nbsp;
        <a
          href="https://en.wikipedia.org/wiki/Sandor_Clegane"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sandor Clegane
        </a>
        ,&nbsp;
        <a
          href="https://youtu.be/XJFPuz3MXho?t=12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pete Doherty
        </a>
        , or&nbsp;
        <a
          href="https://youtu.be/LeMSz2v46Ok"
          target="_blank"
          rel="noopener noreferrer"
        >
          Max Zander
        </a>
        .
      </p>
    </Section>
    <Section>
      <h2>Tech Stack</h2>
      <DefList>
        <dt>Core</dt>
        <dd>HTML5, CSS3, Javascript</dd>
        <dt>Client-side</dt>
        <dd>SASS, Bootstrap 4, styled-components, React, Redux</dd>
        <dt>Server-side</dt>
        <dd>Node, Express, MongoDB, Mongoose</dd>
        <dt>Dev Tools</dt>
        <dd>Ubuntu, MacOS, VSCode, Bash, Git, Git Kracken</dd>
        <dt>Deployment</dt>
        <dd>Gatsby, Netlify, Now, Next</dd>
        <dt>Methods</dt>
        <dd>Scrum, Kanban, Wardley Maps</dd>
      </DefList>
    </Section>
  </Layout>
)

export default AboutPage
