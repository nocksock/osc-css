const package = require('./package.json')

module.exports = function (cfg) {
  cfg.addGlobalData('package', package)

  cfg.addPassthroughCopy({
    './docs/static': '/',
    './docs/demos/*.css': '/demos',
  })

  cfg.addWatchTarget('./docs/**/*.css')
  cfg.addWatchTarget('./dist/assets/style.css')

  cfg.addFilter('keys', value => Object.keys(value))

  cfg.addCollection('sortedGuide', collectionApi =>
    collectionApi
      .getFilteredByTag('guide')
      .sort((a, b) => a.inputPath.localeCompare(b.inputPath))
  )

  // set markdown footnote processor
  let markdownIt = require('markdown-it')
  let markdownItFootnote = require('markdown-it-footnote')

  let options = {
    html: true, // Enable HTML tags in source
    linkify: true, // Autoconvert URL-like text to links
  }

  let markdownLib = markdownIt(options).use(markdownItFootnote)
  cfg.setLibrary('md', markdownLib)

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
