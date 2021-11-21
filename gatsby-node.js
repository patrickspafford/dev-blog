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

  exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const allTypeDefs = `
    type allFaunaBlogHeadlines implements Node {
      nodes: [faunaBlogHeadlines]
    }`
    const typeDefs = `
      type faunaBlogHeadlines implements Node {
        headline: String
        category: String
        title: String
      }
    `
    createTypes(allTypeDefs)
    createTypes(typeDefs)
  }