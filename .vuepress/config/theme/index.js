const themeReco = require('./themeReco.js')

const sidebar = require('../sidebar/')
const locales = require('../locales/')
const nav = require('../nav/')

module.exports = Object.assign({}, themeReco, {
  sidebar,
  locales,
  nav
})