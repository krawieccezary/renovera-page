import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';  
import { SectionHeading } from '../components'


const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 2rem 0;
`;

const StyledWrapper = styled.div`
  position: relative;
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const StyledHeroWrapper = styled.div`
  overflow: hidden;
  position: absolute;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${({theme}) => theme.color.primary};
    box-shadow: 1px 1px 10px -1px rgba(0,0,0,.4)
  }
`;

const StyledHero = styled(SectionHeading)`
  color: #fff;
  text-transform: uppercase;
  font-size: 5rem;
  letter-spacing: 2px;
  text-align: center;
  display: block;
  width: max-content;
  text-shadow: 1px 1px 5px rgba(0,0,0,.4);
  transition: transform .5s .3s ease-in-out;
  transform: translateY(100%);

  &.active {
    transform: translateY(0);
  }

  &::before {
    display: none;
    height: 50%;
    box-shadow: 1px 1px 10px -1px rgba(0,0,0,.4)
  }
`;

export const query = graphql`
  query singlePortfolio($id: String!) {
    datoCmsPortfolio(id: {eq: $id}) {
      description
      title
      id
      date
      images {
        originalId
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;


const SinglePortfolio = ({ data: {datoCmsPortfolio: { description, title, date, images }} }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    console.log(heroRef);
    setTimeout(()=> {
      heroRef.current.classList.add('active');
    }, 100);
  },[])

  return (
    <>
      <StyledWrapper>
        <StyledHeroWrapper>
          <StyledHero ref={heroRef} as="h1" special>{title}</StyledHero>
        </StyledHeroWrapper>
        <Image fluid={images[0].fluid} />
      </StyledWrapper>
      <StyledGallery className="wrapper">
        {images.map(image => <Image key={image.originalId} fluid={image.fluid} />)}
      </StyledGallery>
    </>
  )
}

export default SinglePortfolio;