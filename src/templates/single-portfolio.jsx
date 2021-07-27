import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';  

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

  & > div {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledHero = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #fff;
  text-transform: uppercase;
  font-size: 5rem;
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
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

const singlePortfolio = ({ data: {datoCmsPortfolio: { description, title, date, images }} }) => {
  return (
    <>
      <StyledWrapper>
        <StyledHero>{title}</StyledHero>
        <Image fluid={images[0].fluid} />
      </StyledWrapper>
      <StyledGallery className="wrapper">
        {images.map(image => <Image key={image.originalId} fluid={image.fluid} />)}
      </StyledGallery>
    </>
  )
}

export default singlePortfolio;