import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PortfolioCategories } from '../components';


const RealizacjePage = () => {


  return (
    <div className="wrapper">  
      <h1>Realizacje</h1>
      <PortfolioCategories />
    </div>
  )
}

export default RealizacjePage;