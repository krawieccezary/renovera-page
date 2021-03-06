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
  const { datoCmsOffersPage: { offerContent }} = useStaticQuery(graphql`
    query offerQuery {
      datoCmsOffersPage {
        offerContent {
          offerTitle
          offerDescription,
          id
        }
      }
    }
  `);

  return (
    <>
      <div className="wrapper section">
        <SectionHeading>Nasza oferta</SectionHeading>
        <StyledGrid>
          {
            offerContent.map(({ offerTitle, offerDescription, id }) => (
              <div key={id}>
                <StyledTitle>{offerTitle}</StyledTitle>
                <Paragraph>{offerDescription}</Paragraph>
              </div>
            ))
          }
        </StyledGrid>
      </div>
    </>
  )
}

export default OfferSection;