import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionHeading, Button } from '../../index';
import PortfolioItem from './PortfolioItem';


const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  background-color: ${({theme}) => theme.color.light_gray};
  z-index: 1;
`;

const HeadingWrapper = styled.div`
  grid-area: 1 / 3 / span 1 / span 2;
  text-align: right;
  padding: 2rem 5rem 2rem 1rem;
`;

const ButtonWrapper = styled.div`
  position: relative;
  grid-area: 3 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  margin: 2rem;

  &::before {
    position: absolute;
    content: '';
    left: 5%;
    top: 10%;
    width: 90%;
    height: 80%;
    z-index: -1;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  &::after {
    position: absolute;
    content: '';
    left: 10%;
    top: 5%;
    width: 80%;
    height: 90%;
    z-index: -1;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
`;

const PortfolioSection = () => {
  const { allDatoCmsPortfolio: { nodes: items} } = useStaticQuery(graphql`
    query portfolioQuery {
      allDatoCmsPortfolio(limit: 8) {
        nodes {
          id
          title
          slug
          images {
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
      <StyledGrid>
        {items.map(({ id, title, slug, images }) => (
          <PortfolioItem key={id} title={title} slug={slug} image={images[0].fluid} />
        ))}
        <ButtonWrapper>
          <Button color='secondary' to='/realizacje'>Zobacz więcej</Button>
        </ButtonWrapper>
        <HeadingWrapper>
          <SectionHeading>Realizacje</SectionHeading>
        </HeadingWrapper>
      </StyledGrid>
    </>
  )
}

export default PortfolioSection;