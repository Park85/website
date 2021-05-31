import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Card from '../Home/Card';
import * as styles from './allprojects.module.scss';

const AllProjects = () => {
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
