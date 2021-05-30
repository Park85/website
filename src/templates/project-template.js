import { graphql } from 'gatsby';
import React from 'react';

const ProjectTemplate = props => {
  console.log(props);
  return (
    <div>
      <h1>This is the individual project template</h1>
    </div>
  );
};

export const query = graphql`
  query($id: String) {
    allContentfulProjects(filter: { contentful_id: { eq: $id } }) {
      nodes {
        area
        bhk
        id
        title
        overview {
          raw
        }
        price
        thumbnail {
          optimizedThumbnails {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: WEBP)
            }
          }
        }
      }
    }
  }
`;
export default ProjectTemplate;
