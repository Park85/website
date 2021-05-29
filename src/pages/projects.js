import React, { useRef } from 'react';
import HeaderImage from '../components/common/HeaderImage';
import Layout from '../components/common/Layout';
import useIntersection from '../hooks/useIntersection';
import AllProjects from '../components/Projects/AllProjects';
const Projects = props => {
  const containerRef = useRef(null);
  const activateScrolledNavbar = useIntersection(containerRef);
  return (
    <Layout
      seoTitle='Projects'
      description='Project Atri Group'
      activateScrolledNavbar={activateScrolledNavbar}>
      <HeaderImage title='Projects' url={props.uri} ref={containerRef} />
      <div className='bounding-box'>
        <AllProjects />
      </div>
    </Layout>
  );
};

export default Projects;
