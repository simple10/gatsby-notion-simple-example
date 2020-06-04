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
            name: 'pages',
            table: 'https://www.notion.so/s10examples/839f64d88abc43dba526b5119ea7f16e?v=ebab4030155940eab882110052d0c6f9',
            cacheType: 'html'
          },
          {
            name: 'posts',
            table: 'https://www.notion.so/s10examples/3882d98586c84792a3b26acec5118706?v=c2b18d33e35a44609d1b0e63b3789921',
            cacheType: 'html'
          },
          {
            name: 'recipes',
            table: 'https://www.notion.so/s10examples/5ab22a82bdf94008979c0a8e5de79b41?v=5c3daadd34c943b8bae8245940e09984',
            cacheType: 'html'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ]
}
