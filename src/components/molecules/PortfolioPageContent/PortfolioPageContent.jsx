import React, { useState, useRef } from 'react';
import { PortfolioCategories, PortfolioList } from '../../index.js';


const setListHeight = (el, height) => {
  el.style.minHeight = `${height+ 10}px`;
}


const PortfolioPageContent = () => {
  console.log('test2');
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const portfolioListWrapRef = useRef(null);
  const mainContentRef = useRef(null);


  const handleClick = category => {
    setActiveCategory(category);
    setIsLoaded(false);
  }


  return (
    <>
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
    </>
  )
}

export default PortfolioPageContent;