import React from 'react';
import * as styles from './project.module.scss';
import Card from './Card';
const Project = () => {
	return (
		<div className={styles.projectConatiner} id='projects'>
			<h1 className={styles.header}>Featured Projects</h1>
			<div className={styles.cardWrapper}>
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Project;
