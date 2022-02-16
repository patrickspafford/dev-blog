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
            },
          },
        ],
      },
    },
    "gatsby-remark-prismjs",
    "gatsby-remark-images",
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
              maxWidth: 590
            }
          },
        ]
      }
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
    /*
    {
      resolve: `gatsby-source-faunadb`,
      options: {
        // The secret for the key you're using to connect to your Fauna database.
        // You can generate on of these in the "Security" tab of your Fauna Console.
        secret: process.env.FAUNA,
        domain: "db.us.fauna.com",
        // The name of the index you want to query
        // You can create an index in the "Indexes" tab of your Fauna Console.
        index: `category-headlines-index`,
        // If your index requires arguments, you can specify them like this.
        // You can omit this property if your index doesn't need any.
        // arguments: [],
        // This is the name under which your data will appear in Gatsby GraphQL queries
        // The following will create queries called `allBird` and `bird`.
        type: "faunaBlogHeadlines",
        // If you need to limit the number of documents returned, you can specify a 
        // maximum number to read.
        size: 100
      },
    },
    */
  ],
};
