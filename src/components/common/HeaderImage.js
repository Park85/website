import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import * as styles from './headerimage.module.scss';

const query = graphql`
  query HeaderImage {
    bg: file(relativePath: { eq: "header-images/header-image.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1500, placeholder: BLURRED, formats: [WEBP])
      }
    }
  }
`;

const HeaderImage = React.forwardRef(({ title, url }, ref) => {
  const { bg } = useStaticQuery(query);
  const bgImage = getImage(bg);
  const path = url.split('/');
  // console.log(path);
  return (
    <BgImage image={bgImage} className={styles.headerBg}>
      <div className={styles.overlay} ref={ref}></div>
      <div className={`bounding-box ${styles.headerContainer}`}>
        <h1>{title}</h1>
        <p>
          {path.map((page, index) => {
            if (index === 0)
              return (
                <Link to='/' key={page}>
                  Home
                </Link>
              );
            else if (index < path.length - 1 && path.length !== 2)
              return (
                <Link to={`/${page}`} key={page}>
                  {` / ${page}`}
                </Link>
              );
            else {
              return <span key={page}>{` / ${page}`}</span>;
            }
          })}
        </p>
      </div>
    </BgImage>
  );
});

export default HeaderImage;
