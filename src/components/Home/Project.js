import React from 'react';
import * as styles from './project.module.scss';
import {graphql, Link, useStaticQuery} from 'gatsby';
import Card from './Card';
const Project = () => {
	const data = useStaticQuery(graphql`
		{
			allContentfulProjects {
				nodes {
					id
					title
					location
					price
					area
					slug
					featured
					thumbnail {
						optimizedThumbnails {
							childImageSharp {
								gatsbyImageData(
									placeholder: BLURRED
									sizes: "500"
									formats: WEBP
									layout: CONSTRAINED
								)
							}
						}
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
			<Link to='/projects' className={styles.btn}>
				Show more {'>'}
			</Link>
		</div>
	);
};

export default Project;
