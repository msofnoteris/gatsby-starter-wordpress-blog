import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout isHomePage={true} title={siteTitle}>
      <Seo title="Home" />
      <h1>ZorroTrade Home</h1>
      <p>Trade forex, spot metals, spot indices and commodities and cryptocurrencies with acclaimed execution</p>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
