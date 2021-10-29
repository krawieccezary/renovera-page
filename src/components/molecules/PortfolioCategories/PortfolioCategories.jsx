import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import brushUnderline from '../../../assets/images/brush.png';


const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  button {
    margin: .5rem;
  }
`;

const StyledButton = styled.button`
  border: none;
  box-shadow: none;
  background: none;
  font-size: ${({theme}) => theme.fontSize.big};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  text-transform: uppercase;
  padding: 0 1rem .5rem;

  &.active {
  background-image: url(${brushUnderline});
  background-position: center 90%;
  background-size: 100% 80%;
  background-repeat: no-repeat;
  }
`;

const getUniqueCategories = items => {
  return [...new Set(items.map(item => item.category))];
}

const PortfolioCategories = ({ activeCategory, chooseCategoryHandle }) => {
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
        <StyledButton
          className={!activeCategory ? 'active' : ''}
          onClick={() => chooseCategoryHandle('')}
        >
          Wszystkie
        </StyledButton>
        {categories.map(category => (
          <StyledButton
            onClick={() => chooseCategoryHandle(category)}
            className={category === activeCategory ? 'active' : ''}
            key={category}>
            {category}
          </StyledButton>
        ))}
      </StyledWrapper>
    </>
  )
};

export default PortfolioCategories;