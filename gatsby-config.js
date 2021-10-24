module.exports = {
  siteMetadata: {
    siteUrl: "https://www.patrickspafford.com",
    title: "Patrick Spafford",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-remark-prismjs",
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
        ]
      }
    },

  ],
};
