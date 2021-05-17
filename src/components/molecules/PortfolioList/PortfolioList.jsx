import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Image } from 'react-datocms';
import { Link } from 'gatsby';
import { SectionHeading } from '../../index';


const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 2rem 0;
`;

function getQuery(activeCategory){
  return activeCategory ? 
  `{ allPortfolios(filter: {category: {eq: "${activeCategory}"}}) { id, category, title, slug, 
    images {responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }} } }` 
  : `{ allPortfolios { id, category, title, slug,
    images {responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  } }} }`;
}

async function fetchData(activeCategory){
  return await fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer e2bae82c0dc69a33e0747fcf95f5b2`,
      },
      body: JSON.stringify({
        query: getQuery(activeCategory)
      })
    }
  )
}

const PortfolioList = ({ activeCategory, isLoaded, setIsLoaded }) => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    fetchData(activeCategory)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(res => {
        setIsLoaded(true);
        setPortfolioItems(res.data.allPortfolios);
      })
      .catch(err => {
        throw new Error("Aborting: DatoCMS request failed with " + err.message);
      });
    

  }, [activeCategory, setIsLoaded]);

  if(!isLoaded) return 'loading...';

  return (
    <StyledWrapper>
      {portfolioItems.map(item => (
        <Link key={item.id} to={item.slug}>
          <Image data={item.images[0].responsiveImage} />
          <SectionHeading>{item.title}</SectionHeading>
        </Link>
      ))}
    </StyledWrapper>
  )
}

export default PortfolioList;