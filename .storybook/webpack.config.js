const path = require("path")

module.exports = ({ config }) => {
  // a bunch of other rules here

  config.resolve.modules = [
    path.resolve(__dirname, "..", "src"),
    "node_modules",
  ]

  // Alternately, for an alias:
  /*
  "@interfaces": ["./interfaces/index.ts"],
        "@images": ["./images/index.ts"],
        "@components": ["./components/index.ts"],
        "@hooks": ["./hooks/index.ts"],
        "@utils": ["./utils/index.ts"],
        "@state": ["./state/index.ts"],
        "@content": ["./content/index.ts"]
  */
  config.resolve.alias = {
    "@hooks": path.resolve(__dirname, "..", "src", "hooks"),
    "@utils": path.resolve(__dirname, "..", "src", "utils"),
    "@state": path.resolve(__dirname, "..", "src", "state"),
  }

  return config
}