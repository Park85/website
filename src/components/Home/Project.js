import React from 'react';
import * as styles from './project.module.scss';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Card from './Card';
const Project = () => {
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
          thumbnail {
            url
          }
        }
      }
    }
  `);
  const projects = data.allContentfulProjects.nodes;
  console.log(projects);
  return (
    <div className={styles.projectConatiner} id='projects'>
      <h1 className={styles.header}>Featured Projects</h1>
      <div className={styles.cardWrapper}>
        {projects
          .filter(project => project.featured)
          .map(featured => {
            return <Card key={featured.id} data={featured} />;
          })}
      </div>
      <Link to='/about' className={styles.btn}>
        Show more {'>'}
      </Link>
    </div>
  );
};

export default Project;
