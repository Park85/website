const { createRemoteFileNode } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = async ({ node, actions: { createNode }, store, cache, createNodeId }) => {
  if (node.internal.type === 'contentfulProjectsThumbnailJsonNode') {
    const fileNode = await createRemoteFileNode({
      url: node.url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    });

    if (fileNode) {
      node.optimizedThumbnails___NODE = fileNode.id;
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('src/templates/project-template.js');
  const result = await graphql(`
    {
      allContentfulProjects {
        nodes {
          contentful_id
          slug
        }
      }
    }
  `);
  result.data.allContentfulProjects.nodes.forEach(node => {
    createPage({
      path: `/projects/${node.slug}`,
      component: projectTemplate,
      context: {
        id: node.contentful_id,
      },
    });
  });
};
