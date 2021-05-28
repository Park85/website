import React from 'react';
import * as styles from './project.module.scss';
import { Link } from 'gatsby';
import Card from './Card';
const Project = () => {
  return (
    <div className={styles.projectConatiner}>
      <h1 className={styles.header}>Featured Projects</h1>
      <div className={styles.cardWrapper}>
        <Card />
        <Card />
        <Card />
      </div>
      <Link to='/about' className={styles.btn}>
        Show more {'>'}
      </Link>
    </div>
  );
};

export default Project;
