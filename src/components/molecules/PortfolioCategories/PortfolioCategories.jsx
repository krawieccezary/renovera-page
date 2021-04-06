import React from 'react';
import slugify from 'slugify';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Button } from '../../index';

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

const PortfolioCategories = ({ activeCategory, click }) => {
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

  return (
    <>
      <StyledWrapper>
        <Button
          onClick={() => click('')}
          as="button"
          color={!activeCategory ? 'black' : 'primary'} 
        >
          Wszystkie
        </Button>
        {categories.map(category => (
          <Button
            onClick={() => click(slugify(category))}
            as="button"
            color={slugify(category) === activeCategory ? 'black' : 'primary'} 
            key={category}>
            {category}
          </Button>
        ))}
      </StyledWrapper>
    </>
  )
};

export default PortfolioCategories;