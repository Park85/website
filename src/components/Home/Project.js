import React from 'react';
import * as styles from './project.module.scss';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Card from './Card';
const Project = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject(filter: { featured: { eq: true } }) {
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
    <div className={styles.projectConatiner} id='projects'>
      <h1 className={styles.header}>Featured Projects</h1>
      <div className={styles.cardWrapper}>
        {/* <h1>Project appear here</h1> */}
        {projects.map(featured => {
          return <Card key={featured.id} data={featured} />;
        })}
      </div>
      <Link to='/projects' className={styles.btn}>
        Show more {'>'}
      </Link>
    </div>
  );
};

export default Project;
