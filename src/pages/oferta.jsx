import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { SectionHeading, Paragraph } from '../components/index';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: flex-start;
`;


const OfertaPage = () => {
  const { allDatoCmsOffersPage: { nodes: contents }}  = useStaticQuery(graphql`
    query offersPageQuery {
      allDatoCmsOffersPage {
        nodes {
          offerTitle
          offerDescription
          id
          offerImage {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="wrapper">
        {contents.map(content => (
          <StyledWrapper key={content.id}>
            <Image fluid={content.offerImage.fluid}/>
            <SectionHeading special="true">{content.offerTitle}</SectionHeading>
            <Paragraph>{content.offerDescription}</Paragraph>
          </StyledWrapper>
        ))}
      </div>
    </>
  )
}

export default OfertaPage;