import React from "react"
import BandBio from "../components/BandBio"
import SEO from "../components/seo"
import Layout from "../components/layout"
import VideoEmbed from "../components/PageSection/VideoEmbed"
import LandingPage from "../components/PageSection/LandingPage"
import RecordsStyling from "../components/PageSection/RecordsSection"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <LandingPage />
      <RecordsStyling />
      <VideoEmbed />
      <BandBio />
    </Layout>
  </>
)

export default IndexPage
