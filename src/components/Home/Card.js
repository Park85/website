import React, { lazy } from 'react';
import * as styles from './card.module.scss';
import { IoLocationOutline } from 'react-icons/io5';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
const Card = ({ data }) => {
  const url = data.thumbnail[0].url;
  console.log('url', url);
  return (
    <Link to={`/projects/${data.slug}`} className={styles.projectCardContainer}>
      <div className={styles.imageWrapper}>
        <img src={url} loading={lazy} alt='abouthome' height={350} className={styles.image} />
      </div>
      <h2 className={styles.projectName}>{data.title}</h2>
      <div className={styles.projLocDiv}>
        <IoLocationOutline style={{ marginRight: '5px', color: '#24324a' }} size={20} />
        <h4 className={styles.location}>{data.location}</h4>
      </div>
      <div className={styles.projDetail}>
        <h4>Area : {data.area} acres</h4>
        <h4>{data.price} onwards</h4>
      </div>
      <div className={styles.projStatus}>
        <h4 className={styles.status}>Learn More</h4>
        <h4 className={styles.statusDirect}>{'>'}</h4>
      </div>
    </Link>
  );
};

export default Card;
