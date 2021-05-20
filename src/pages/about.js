import React from "react"
import Layout from '../components/Layout'
import Intro from '../components/About/Intro'
const About = () => {
  return (
    <Layout>
      <div className={'bounding-box'}>
        <Intro/>
      </div>
    </Layout>
  )
}
 export default About;