import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Card from '../Home/Card';
import * as styles from './allprojects.module.scss';

const AllProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject {
        nodes {
          slug {
            current
          }
          image {
            alt
            asset {
              gatsbyImageData(formats: WEBP, placeholder: BLURRED)
            }
          }
          location
          area
          title
          price {
            price
            unit
          }
          id
        }
      }
    }
  `);
  const projects = data.allSanityProject.nodes;
  return (
    <div className={styles.projectConatiner}>
      <h1 className={styles.header}>All Projects</h1>
      <div className={styles.cardWrapper}>
        {/* <h1>Projects appear here</h1> */}
        {projects.map(project => {
          return <Card key={project.id} data={project} />;
        })}
      </div>
    </div>
  );
};

export default AllProjects;
