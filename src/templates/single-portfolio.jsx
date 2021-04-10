import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';  

const StyledGallery= styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 2rem 0;
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
    <h1>{title}</h1>
    <Image fluid={images[0].fluid} />
    <StyledGallery>
      {images.map(image => <Image key={image.originalId} fluid={image.fluid} />)}
    </StyledGallery>
    </>
  )
}

export default singlePortfolio;