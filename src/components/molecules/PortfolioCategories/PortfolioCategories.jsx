import React from 'react';
import slugify from 'slugify';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const PortfolioCategories = () => {
  const { allDatoCmsPortfolio: { nodes: items } } = useStaticQuery(graphql`
    query queryCategories {
      allDatoCmsPortfolio {
        nodes {
          category
          id
        }
      }
    }
  `);

  return (
    <>
      <div>
        {items.map(item => (
          <button 
            data-category={slugify(item.category)} 
            key={item.id}>
            {item.category}
          </button>
        ))}
      </div>

    </>
  )
};

export default PortfolioCategories;