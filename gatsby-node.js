/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */


exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/kontakt/)) {
    page.context.layout = "empty"
    createPage(page)
  }
}
