import React from 'react';
import * as styles from './allprojects.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Card from '../Home/Card';

const AllProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        nodes {
          title
          location
          area
          featured
          id
          price
          slug
          thumbnail {
            url
          }
        }
      }
    }
  `);
  const projects = data.allContentfulProjects.nodes;
  return (
    <div className={styles.projectConatiner}>
      <h1 className={styles.header}>All Projects</h1>
      <div className={styles.cardWrapper}>
        {projects.map(project => {
          return <Card key={project.id} data={project} />;
        })}
      </div>
    </div>
  );
};

export default AllProjects;
