import React from 'react';
import styled from 'styled-components';
import { SectionHeading, Paragraph } from '../../index';
import { graphql, useStaticQuery } from 'gatsby';



const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  margin: 2em 0;
`;

const StyledTitle = styled.h3`
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.black};
  position: relative;
  display: inline-block;
  padding: 0 1rem;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 15px;
    top: 50%;
    left: 0;
    background-color: ${({theme}) => theme.color.primary};
    z-index: -1;
  }
`;


const OfferSection = () => {
  const { allDatoCmsOffersPage: { nodes: contents }}  = useStaticQuery(graphql`
    query offersQuery {
      allDatoCmsOffersPage {
        nodes {
          offerTitle
          shortDescription
          id
        }
      }
    }
  `);
console.log(contents);
  return (
    <>
      <div className="wrapper section">
        <SectionHeading>Nasza oferta</SectionHeading>
        <StyledGrid>
          {
            contents.map(({ offerTitle, shortDescription, id }) => (
              <div key={id}>
                <StyledTitle>{offerTitle}</StyledTitle>
                <Paragraph>{shortDescription}</Paragraph>
              </div>
            ))
          }
        </StyledGrid>
      </div>
    </>
  )
}

export default OfferSection;