import React from 'react';
import * as styles from './project.module.scss';
import { IoLocationOutline } from 'react-icons/io5';
import { StaticImage } from 'gatsby-plugin-image';
const Project = () => {
  return (
    <div className={styles.projectConatiner}>
      <h1 className={styles.header}>Featured Project</h1>

      {/* Card Component */}
      <div className={styles.projectCardContainer}>
        <div className={styles.imageWrapper}>
          <StaticImage
            src='../../assets/building.jpg'
            alt='abouthome'
            placeholder='blurred'
            height={350}
            className={styles.image}
          />
        </div>
        <h2 className={styles.projectName}>Eden Garden Apartment</h2>
        <div className={styles.projLocDiv}>
          <IoLocationOutline style={{ marginRight: '5px' }} size={20} />
          <h4 className={styles.location}>50B, Kamalalaya, Dharmatala</h4>
        </div>
      </div>
    </div>
  );
};

export default Project;
