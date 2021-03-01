import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { SectionHeading, Button, Paragraph } from '../../index';


const StyledWrapper = styled.div`
  position: relative;
  margin: 5rem auto;
  padding: 4rem;
  
  &::before {
    position: absolute;
    content: '';
    top: 3rem;
    left: -3rem;
    height: 100%;
    width: ${({theme}) => `calc(100% + (100vw - ${theme.variables.wrapper_width}) / 2)`};
    background-color: ${({theme}) => theme.color.primary};
    z-index: -1;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${({theme}) => `calc(100% + (100vw - ${theme.variables.wrapper_width}) / 2)`};
    height: 100%;
    background-color: ${({theme}) => theme.color.light_gray};
    z-index: -1;
    box-shadow: -2px 2px 10px -5px rgb(0 0 0 / 60%);
  }
`;

const StyledFlexWrapper = styled.div`
  display: flex;

  & > * {
    width: 50%;
    padding: 0 3rem 0 0;
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