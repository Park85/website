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
		},
		{
			resolve: 'gatsby-plugin-prefetch-google-fonts',
			options: {
				fonts: [
					{
						family: 'Poppins',
						variants: ['300', '400', '500'],
					},
					{
						family: 'Nunito',
						variants: ['600', '700'],
					},
				],
			},
		},
	],
};
