import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PortfolioCategories, PortfolioList } from '../components';


const RealizacjePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = category => {
    setActiveCategory(category);
  }

  return (
    <div className="wrapper">  
      <h1>Realizacje</h1>
      <PortfolioCategories click={handleClick} activeCategory={activeCategory} />
      <PortfolioList activeCategory={activeCategory} />
    </div>
  )
}

export default RealizacjePage;