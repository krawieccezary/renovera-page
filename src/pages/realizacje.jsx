import React, { useState, useRef } from 'react';
import { graphql } from 'gatsby';
import { PortfolioCategories, PortfolioList, PageHeroBanner } from '../components';


const setListHeight = (el, height) => {
  el.style.minHeight = `${height+ 10}px`;
}


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
  console.log('test');
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const portfolioListWrapRef = useRef(null);
  const mainContentRef = useRef(null);


  const handleClick = category => {
    setActiveCategory(category);
    setIsLoaded(false);
  }


  return (
    <div className="wrapper">  
      <PageHeroBanner
        data={datoCmsPortfolioPageIntro}
      >
      </PageHeroBanner>
      <div ref={mainContentRef}>
        <PortfolioCategories chooseCategoryHandle={handleClick} activeCategory={activeCategory} />
      </div>
      <div ref={portfolioListWrapRef} >
        <PortfolioList 
          activeCategory={activeCategory} 
          isLoaded={isLoaded} 
          setIsLoaded={setIsLoaded} 
          setListHeight={setListHeight} 
          portfolioListWrapRef={portfolioListWrapRef}
        />
      </div>
    </div>
  )
}

export default RealizacjePage;