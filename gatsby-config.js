/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: 'gatsby-plugin-sass',
			// options: {
			// 	data: '@import `${__dirname}/src/styles/styles`',
			// },
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['Poppins:300,400,500', 'Nunito:600,700'],
				display: 'swap',
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
