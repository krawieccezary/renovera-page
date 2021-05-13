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
  return (
    <>
      <div className="wrapper section">
        <SectionHeading>Nasza oferta</SectionHeading>
        <StyledGrid>
          {
            contents.map(({ offerTitle, shortDescription, id }) => (
              <div key={id}>
                <SectionHeading special>{offerTitle}</SectionHeading>
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