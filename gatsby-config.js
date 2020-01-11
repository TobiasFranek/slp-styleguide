module.exports = {
  siteMetadata: {
    title: `SLP - Styleguide`,
    description: `A Styleguide for all the base components of the SLP (Space Launch Plattform) MMP2a Project.`,
    author: `Tobias Franek & Fabian Bliem`,
  },
  plugins: [
	`gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
	},
	{
		resolve: `gatsby-source-filesystem`,
		options: {
		  name: `markdown-pages`,
		  path: `${__dirname}/src/markdown`,
		},
	},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
	},
	{
		resolve: `gatsby-transformer-remark`,
		options: {
			plugins: [
				{
					resolve:`gatsby-remark-default-html-attrs`,
					options: {}
				},
				{
					resolve: `gatsby-remark-prismjs`,
					options: {}
				}
			]
		}
	}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
