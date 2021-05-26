import React from 'react';
import * as styles from './project.module.scss';
import { IoLocationOutline } from 'react-icons/io5';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
const Card = () => {
  return (
    <Link to='/about' className={styles.projectCardContainer}>
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
        <IoLocationOutline style={{ marginRight: '5px', color: '#24324a' }} size={20} />
        <h4 className={styles.location}>50B, Kamalalaya, Dharmatala</h4>
      </div>
      <div className={styles.projDetail}>
        <h4>Area : 50 acres</h4>
        <h4>2/3/4/5/6 BHK</h4>
      </div>
      <div className={styles.projStatus}>
        <h4 className={styles.status}>For Sale</h4>
        <h4 className={styles.statusDirect}>{'>'}</h4>
      </div>
    </Link>
  );
};

export default Card;
