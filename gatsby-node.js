const {createRemoteFileNode} = require('gatsby-source-filesystem');

// exports.createSchemaCustomization = ({actions}) => {
// 	const {createTypes} = actions;

// 	createTypes(`
// 	    type ContentfulProjects implements Node{
//             thumbnail:contentfulProjectsThumbnailJsonNode
//             thumbnailUrl : File @link(from: "thumbnailUrl___NODE")
// 	    }

// 	    type contentfulProjectsThumbnailJsonNode{
// 	        url:String!
// 	    }
// 	`);
// };

exports.onCreateNode = async ({
	node,
	actions: {createNode},
	store,
	cache,
	createNodeId,
}) => {
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
