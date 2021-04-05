import React, { useContext } from 'react';
import slugify from 'slugify';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Button } from '../../index';
import PortfolioContext from '../../../context/PortfolioContext';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  button {
    margin: .5rem;
  }
`;

const getUniqueCategories = items => {
  return [...new Set(items.map(item => item.category))];
}

const PortfolioCategories = () => {
  const { allDatoCmsPortfolio: { nodes: items } } = useStaticQuery(graphql`
    query queryCategories {
      allDatoCmsPortfolio {
        nodes {
          category
        }
      }
    }
  `);
  const categories = getUniqueCategories(items);

  const activeCategory = useContext(PortfolioContext);

  return (
    <>
      <StyledWrapper>
        {categories.map(category => (
          <Button
            as="button"
            color={slugify(category) === activeCategory ? 'black' : 'primary'} 
            data-category={slugify(category)} 
            key={category}>
            {category}
          </Button>
        ))}
      </StyledWrapper>
    </>
  )
};

export default PortfolioCategories;