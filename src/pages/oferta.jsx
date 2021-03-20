import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { SectionHeading, Paragraph } from '../components/index';


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
          <div>
            <Image fluid={content.offerImage.fluid}/>
            <SectionHeading>{content.offerTitle}</SectionHeading>
            <Paragraph>{content.offerDescription}</Paragraph>
          </div>
        ))}
      </div>
    </>
  )
}

export default OfertaPage;