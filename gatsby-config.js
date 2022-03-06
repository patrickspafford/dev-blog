require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.patrickspafford.com",
    title: "Patrick Spafford",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              wrapperStyle: 'margin-top:2.25rem;margin-bottom:2.25rem;'
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ],
      },
    },
    "gatsby-remark-prismjs",
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              backgroundColor: 'white',
              wrapperStyle: 'margin-top:2.25rem;margin-bottom:2.25rem;'
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }

        ],
        remarkPlugins: [require('remark-math'), require('remark-html-katex')]
      }
    },
    'gatsby-remark-reading-time',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: `${__dirname}/blog`,
        },
      },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "Fauna",
        fieldName: "fauna",
        url: "https://graphql.us.fauna.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.FAUNA}`,
        },
      },
    },
  ],
};
