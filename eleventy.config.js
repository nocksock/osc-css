const package = require('./package.json')

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData('package', package)

  eleventyConfig.addPassthroughCopy({
    './docs/static': '/',
    './docs/demos/*.css': '/demos',
  })

  eleventyConfig.addWatchTarget('./docs/**/*.{css,svg,webp,png,jpeg}')
  eleventyConfig.addWatchTarget('./dist/assets/style.css')

  eleventyConfig.addFilter('keys', value => Object.keys(value))

  // Sort with `Array.sort`
  eleventyConfig.addCollection('sortedDemos', function (collectionApi) {
    return collectionApi.getFilteredByTag('demo').sort(function (a, b) {
      return a.inputPath.localeCompare(b.inputPath) // sort by path - ascending
    })
  })

  // set markdown footnote processor
  let markdownIt = require('markdown-it')
  let markdownItFootnote = require('markdown-it-footnote')

  let options = {
    html: true, // Enable HTML tags in source
    linkify: true, // Autoconvert URL-like text to links
  }

  let markdownLib = markdownIt(options).use(markdownItFootnote)
  eleventyConfig.setLibrary('md', markdownLib)

  const pathPrefix = process.env.GITHUB_REPOSITORY
    ? (pathPrefix = process.env.GITHUB_REPOSITORY.split('/').at(1))
    : ''

  return {
    dir: {
      input: 'docs',
      output: '_site',
    },
    pathPrefix,
  }
}
