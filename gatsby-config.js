/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/conradlin/1aa283fcd5ae4a73ba0f73c062de745e?v=6a40014bee144152b55203e2caf0c02e',
            cacheType: 'html'
          }
        ]
      }
    }
  ]
}
