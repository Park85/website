/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.2, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: false, // Flag for disabling animations

				// Advanced Options
				selector: '[data-sal]', // Selector of the elements to be animated
				animateClassName: 'sal-animate', // Class name which triggers animation
				disabledClassName: 'sal-disabled', // Class name which defines the disabled state
				rootMargin: '0% 20%', // Corresponds to root's bounding box margin
				enterEventName: 'sal:in', // Enter event name
				exitEventName: 'sal:out', // Exit event name
			},
		},
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
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
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
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
