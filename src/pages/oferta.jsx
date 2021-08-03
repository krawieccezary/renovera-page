import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { SectionHeading, Paragraph } from '../components/index';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: 3rem;
  margin: 5rem 0 7rem;
  height: calc(100vh - 200px);

  &:nth-child(2n) {
    direction: rtl;
  }
`;

const StyledContent = styled.div`
  padding-top: 2rem;
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
            <StyledContent>
              <SectionHeading special="true">{content.offerTitle}</SectionHeading>
              <Paragraph>{content.offerDescription}</Paragraph>
            </StyledContent>
          </StyledWrapper>
        ))}
      </div>
    </>
  )
}

export default OfertaPage;