exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /firebase/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }

  // gatsby-node.js
/*
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

 createTypes(`
   type Mdx implements Node {
     frontmatter: Frontmatter
     featuredImage: File @link(from: "fields.featuredImage")  
   }

   type Frontmatter {
     featuredImage: File
   }
 `);
};
*/

/*
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Frontmatter implements Node {
      featuredImage: File
    }
  `
  createTypes(typeDefs)
}
*/

  /*
  exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const allTypeDefs = `
    type allFaunaBlogHeadlines {
      nodes: [faunaBlogHeadlines]
    }`
    const typeDefs = `
      type faunaBlogHeadlines implements Node {
        headline: String
        category: String
        title: String
      }
    `
    createTypes(typeDefs)
    createTypes(allTypeDefs)
  }
  */