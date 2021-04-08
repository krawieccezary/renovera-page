import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Heading } from '../../index';


const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 2rem 0;
`;

const PortfolioList = ({ activeCategory }) => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const query = activeCategory ? 
    `{ allPortfolios(filter: {category: {eq: "${activeCategory}"}}) { id, category, title, images { url } } }` 
    : `{ allPortfolios { id, category, title, images { url } } }`;

    fetch(
      process.env.DATOCMS_API_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.DATOCMS_API}`,
        },
        body: JSON.stringify({
          query: query
        })
      }
    )
    .then(res => res.json())
    .then(res => {
      console.log(res.data.allPortfolios);
      setIsLoaded(true);
      // setPortfolioItems(res.data.allPortfolios);
    })
    .catch(error => {
      console.log(error);
    })

  }, []);

  return (
    <StyledWrapper>
      {isLoaded ? portfolioItems.map(item => (
        <div key={item.id}>
          <Heading>{item.title}</Heading>
        </div>
      )) : 'loading'}
    </StyledWrapper>
  )
}

export default PortfolioList;