import React, { useState, useRef } from 'react';
import { PortfolioCategories, PortfolioList } from '../components';


const setListHeight = (el, height) => {
  el.style.minHeight = `${height+ 10}px`;
}


const RealizacjePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const portfolioListWrapRef = useRef(null);


  const handleClick = category => {
    setActiveCategory(category);
    setIsLoaded(false);
  }

  return (
    <div className="wrapper">  
      <h1>Realizacje</h1>
      <PortfolioCategories click={handleClick} activeCategory={activeCategory} />
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