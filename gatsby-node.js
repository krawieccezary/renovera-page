/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require(`path`)


exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/kontakt/)) {
    page.context.layout = "empty"
    createPage(page)
  }
}



exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const singlePortfolioTemplate = path.resolve(`src/templates/single-portfolio.jsx`)
  const result = await graphql(`
    query portfoliosQuery {
      allDatoCmsPortfolio {
        nodes {
          id
          slug
        }
      }
    }
  `);

  result.data.allDatoCmsPortfolio.nodes.forEach(portfolio => {
    createPage({
      path: `realizacje/${portfolio.slug}`,
      component: singlePortfolioTemplate,
      context: {
        id: portfolio.id,
      },
    })
  })
}