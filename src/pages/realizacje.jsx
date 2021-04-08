import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PortfolioCategories, PortfolioList } from '../components';


const RealizacjePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = category => {
    setActiveCategory(category);
    setIsLoaded(false);
  }

  return (
    <div className="wrapper">  
      <h1>Realizacje</h1>
      <PortfolioCategories click={handleClick} activeCategory={activeCategory} />
      <PortfolioList activeCategory={activeCategory} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
    </div>
  )
}

export default RealizacjePage;