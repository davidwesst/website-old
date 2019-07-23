/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `David Wesst`,
    subtitle: `Game Developer. Solution Architect. Open Web Enthusiast. Public Speaker. Balancer of Work Life.`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Raleway'
          },
          {
            family: 'Open Sans'
          }
        ]
      }
    }
  ]
}
