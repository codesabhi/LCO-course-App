import * as React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/reusable/MainSection"
import Infoblock from "../components/reusable/Infoblock"
import DualInfoblock from "../components/reusable/DualInfoblock"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({data}) => (
  
  <Layout>
    <SEO title="Home" />
    <MainSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="LearnCodeOnline.in"
      mainclass="main-background"
    />
    <Infoblock heading= "About Us" />
    <Coursecart courses={data.courses} />
    <DualInfoblock heading="Our Team"
      img="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: {eq: "heromain.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG  
      }
    }
  }
  courses: allContentfulCourses {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
        image {
          fixed(width:200, height:120) {
            ...GatsbyContentfulFixed_tracedSVG 
          }
        }
      }
    }
  }
}
`


export default IndexPage


