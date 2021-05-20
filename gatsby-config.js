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
<<<<<<< HEAD
			resolve: 'gatsby-plugin-google-fonts',
=======
      		resolve: `gatsby-source-filesystem`,
      		options: {
        		name: `assets`,
        		path: `${__dirname}/src/assets/`,
     	 },
   		},
		{
			resolve: 'gatsby-plugin-prefetch-google-fonts',
>>>>>>> 6201924... Designing Navbar
			options: {
				fonts: ['Poppins:300,400,500', 'Nunito:600,700'],
				display: 'swap',
			},
		},
<<<<<<< HEAD
		// {
		// 	resolve: 'gatsby-plugin-prefetch-google-fonts',
		// 	options: {
		// 		fonts: [
		// 			{
		// 				family: 'Poppins',
		// 				variants: ['300', '400', '500'],
		// 			},
		// 			{
		// 				family: 'Nunito',
		// 				variants: ['600', '700'],
		// 			},
		// 		],
		// 	},
		// },
=======
		`gatsby-plugin-image`,
    	`gatsby-plugin-sharp`,
    	`gatsby-transformer-sharp`,
>>>>>>> 6201924... Designing Navbar
	],
};
