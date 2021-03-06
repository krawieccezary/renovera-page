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
`;

const HeadingWrapper = styled.div`
  grid-area: 1 / 3 / span 1 / span 2;
  text-align: right;
  padding: 2rem 5rem 2rem 1rem;
`;

const ButtonWrapper = styled.div`
  grid-area: 3 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PortfolioSection = () => {
  const { allDatoCmsPortfolio: { nodes: items} } = useStaticQuery(graphql`
    query portfolioQuery {
      allDatoCmsPortfolio(limit: 8) {
        nodes {
          id
          title
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
        {items.map(({ id, title, images }) => (
          <PortfolioItem key={id} title={title} image={images[0].fluid} />
        ))}
        <ButtonWrapper>
          <Button type='secondary' to='/realizacje'>Zobacz więcej</Button>
        </ButtonWrapper>
        <HeadingWrapper>
          <SectionHeading>Realizacje</SectionHeading>
        </HeadingWrapper>
      </StyledGrid>
    </>
  )
}

export default PortfolioSection;