import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { SectionHeading } from '../../index';

const StyledWrapper = styled(Link)`
  position: relative;

  &:first-child {
    grid-area: 1 / 1 / span 3 / span 2;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const TitleOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  background: hsla(49, 100%, 49%, 95%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
`;

const PortfolioItem = ({ title, image }) => {
  return (
    <StyledWrapper to='/realizacje'>
      <StyledImage fluid={image} />
      <TitleOverlay>
        <h3>{title}</h3>
      </TitleOverlay>
    </StyledWrapper>
  )
}

export default PortfolioItem;