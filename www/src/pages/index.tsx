import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Results from "../components/results"
import AboutMe from "../components/about-me"
import FromTheBlog from "../components/from-the-blog"

const Index = () => (
  <Layout>
    <Hero />
    <Results />
    <AboutMe />
    <FromTheBlog />
  </Layout>
)

export default Index
