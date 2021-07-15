import * as React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/reusable/MainSection"
import Infoblock from "../components/reusable/Infoblock"
import DualInfoblock from "../components/reusable/DualInfoblock"
import TeamPhotosection from "../components/About/TeamPhotosection"

const AboutPage = ({data}) => (
  
  <Layout>
    <SEO title="Home" />
    <MainSection
      img={data.img.childImageSharp.fluid}
      title="About LearnCodeOnline" 
      subtitle=""
      mainclass="about-background"
    />
    <DualInfoblock heading="A Message from CEO"
      img="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <Infoblock heading= "Our Vision" />
    <TeamPhotosection/>

  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG  
      }
    }
  }
}
`


export default AboutPage
