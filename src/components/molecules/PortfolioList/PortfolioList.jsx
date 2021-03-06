import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Image } from 'react-datocms';
import { Link } from 'gatsby';
import { FetchError, LoadingSpinner } from '../../index';


const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem 2rem;
  margin: 2rem 0;
`;

const StyledLink = styled(Link)`
  img {
    transform: scale(1.1);
    transition: transform .3s ease-in-out, opacity 500ms ease 500ms !important;
  }

  &:hover img {
    transform: scale(1);
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const StyledLoadingWrapper = styled.div`
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  : `{ allPortfolios
     { id, category, title, slug,
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
    process.env.GATSBY_API_URL,
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.GATSBY_API_KEY}`,
      },
      body: JSON.stringify({
        query: getQuery(activeCategory)
      })
    }
  )
}


const PortfolioList = ({ activeCategory, isLoaded, setIsLoaded, setListHeight, portfolioListWrapRef }) => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [error, setFetchError] = useState(false);
  const portfolioListRef = useRef(null);

  useEffect(() => {
    fetchData(activeCategory)
      .then(res => {
        setFetchError(false);
        return res.json();
      })
      .then(res => {
        setIsLoaded(true);
        setPortfolioItems(res.data.allPortfolios);
        if(portfolioListRef.current) {
          setListHeight(portfolioListWrapRef.current, portfolioListRef.current.offsetHeight);
        }
      })
      .catch(err => {
        console.log(err);
        setFetchError('Upsss! Co?? posz??o nie tak. Spr??buj wybra?? inn?? kategori??.');
      });

  }, [activeCategory, setIsLoaded, portfolioListWrapRef, setListHeight]);
 

  if(error) {
    return (<FetchError errorMessage={error}/>)
  } else if(!isLoaded) {  
      return (
        <StyledLoadingWrapper className="wrapper">
          <LoadingSpinner />
        </StyledLoadingWrapper>
      )
  };


  return (
    <StyledWrapper ref={portfolioListRef}>
      {portfolioItems.map(item => (
        <StyledLink key={item.id} to={item.slug}>
          <Image data={item.images[0].responsiveImage} />
          <h2>{item.title}</h2>
        </StyledLink>
      ))}
    </StyledWrapper>
  )
}

export default PortfolioList;