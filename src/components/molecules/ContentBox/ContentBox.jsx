import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { SectionHeading, Button, Paragraph } from '../../index';


const StyledWrapper = styled.div`
  margin: 5rem auto;
`;

const StyledFlexWrapper = styled.div`
  display: flex;

  & > * {
    width: 50%;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledButtonsWrapp = styled.div`
  margin: 6em 1rem 3rem auto; 

  & > * {
    margin-left: 2rem;
  }
`;


const ContentBox = () => {
  const { datoCmsHome: { content, heading, image } } = useStaticQuery(graphql`
    query content {
      datoCmsHome {
        content
        heading
        image {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <>
      <StyledWrapper className="wrapper">
        <StyledFlexWrapper>
          <div>
            <SectionHeading>{heading}</SectionHeading>
            <Paragraph>{content}</Paragraph>
            <StyledButtonsWrapp>
              <Button type='secondary' to='/oferta'>Oferta</Button>
              <Button type='black' to='/kontakt'>Kontakt</Button>
            </StyledButtonsWrapp>
          </div>
          <Image fluid={image.fluid} />
        </StyledFlexWrapper>
      </StyledWrapper>
    </>
  )
};

export default ContentBox;