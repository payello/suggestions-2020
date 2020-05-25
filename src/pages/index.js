import React from "react"
import BandBio from "../components/PageSection/BandBio"
import SEO from "../components/seo"
import Layout from "../components/layout"
import VideoEmbed from "../components/PageSection/VideoEmbed"
import LandingPage from "../components/PageSection/LandingPage"
import RecordsStyling from "../components/PageSection/RecordsSection"
import InstaFeed from "../components/PageSection/InstaFeed"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Funk / Soul / Disco band, London, UK" />
      <LandingPage />
      <VideoEmbed />
      <RecordsStyling />
      <BandBio />
      <InstaFeed />
    </Layout>
  </>
)

export default IndexPage
