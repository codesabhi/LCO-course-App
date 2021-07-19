import * as React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/reusable/MainSection"
import Infoblock from "../components/reusable/Infoblock"
import Contact from "../components/Contact/contact"


const ContactPage = ({data}) => (
  
  <Layout>
    <SEO title="Home" />
    <MainSection
      img={data.img.childImageSharp.fluid}
      title="Contact Us" 
      subtitle=""
      mainclass="about-background"
    />
    
    <Infoblock heading= "How can we help?" />
    <Contact />

  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: {eq: "contact.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG  
      }
    }
  }
}
`


export default ContactPage
