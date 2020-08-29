import { useStaticQuery, graphql } from "gatsby"

const MobileImage = () => {
  const mobileData = useStaticQuery(graphql`
    query MobileImage {
      contentfulAsset(title: { eq: "Record" }) {
        title
        fixed(width: 1700) {
          src
          width
        }
      }
    }
  `)

  return mobileData
}

export default MobileImage
