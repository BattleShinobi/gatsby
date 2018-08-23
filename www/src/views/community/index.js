import React, { Component } from "react"
import Helmet from "react-helmet"
import { rhythm } from "../../utils/typography"
import Layout from "../../components/layout"
import CommunityHeader from "./community-header"

class CommunityView extends Component {
  render() {
    const { location, title } = this.props
    return (
      <Layout location={location}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <CommunityHeader />
        <main
          role="main"
          css={{
            paddingLeft: rhythm(3 / 4),
            paddingRight: rhythm(3 / 4),
          }}
        >
          <h1>{title}</h1>
        </main>
      </Layout>
    )
  }
}

export default CommunityView
