module.exports = function (eleventyConfig) {
  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")

  module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin)
  }

  eleventyConfig.addPassthroughCopy("./src/css")
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
