import React from 'react';
import { graphql } from 'gatsby';
import { PortfolioPageContent, PageHeroBanner } from '../components';


export const portfolioContent = graphql`
  query portfolioContentQuery {
    datoCmsPortfolioPageIntro {
      image2 {
        fluid {
          srcSet
        }
      }
      image1 {
        fluid {
          srcSet
        }
      }
      header1
      header2
      header3
      description,
      buttonText
    }
  }
`;


const RealizacjePage = ({data: {datoCmsPortfolioPageIntro} }) => {
  console.log('test',datoCmsPortfolioPageIntro );

  return (
    <div className="wrapper">  
      <PageHeroBanner
        data={datoCmsPortfolioPageIntro}
      >
      </PageHeroBanner>
      <PortfolioPageContent></PortfolioPageContent>
    </div>
  )
}

export default RealizacjePage;