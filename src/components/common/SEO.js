import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;

const Seo = ({ seoTitle, description }) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${seoTitle} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        }
      ]}></Helmet>
  );
};
export default Seo;
