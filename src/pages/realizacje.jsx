import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PortfolioCategories } from '../components';


const RealizacjePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = category => {
    setActiveCategory(category);
  }

  return (
    <div className="wrapper">  
      <h1>Realizacje</h1>
      <PortfolioCategories click={handleClick} activeCategory={activeCategory} />
    </div>
  )
}

export default RealizacjePage;