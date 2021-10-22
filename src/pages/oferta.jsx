import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { SectionHeading, Paragraph, PageHeroBanner } from '../components/index';

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

export const offersBannerContent = graphql`
  query offersBannerContentQuery {
    datoCmsOffersPageIntro {
      image2 {
        fluid {
          srcSet
        }
      }
      image1 {
        fluid {
          srcSet
        }
      }
      header1
      header2
      header3
      description,
      buttonText
    },

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
`;

const OfertaPage = ({data: {datoCmsOffersPageIntro, allDatoCmsOffersPage: { nodes: contents }}}) => {

  return (
    <div className="wrapper">
      <PageHeroBanner 
        data={datoCmsOffersPageIntro}>
      </PageHeroBanner> 
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
  )
}

export default OfertaPage;