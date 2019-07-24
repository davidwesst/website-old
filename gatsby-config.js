/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `David Wesst`,
    subtitle: `The Official Site for all things Wessty`
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
