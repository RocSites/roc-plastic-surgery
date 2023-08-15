import * as React from "react"
import Main from "../components/main"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
    <SEO title="Home" />
    <Main/>
  </Layout>
  )
}

export default IndexPage
