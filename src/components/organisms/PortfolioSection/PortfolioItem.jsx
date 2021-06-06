import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity .3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const StyledTitle = styled(SectionHeading)`
  opacity: 0;
  transform: translateX(20%);
  transition: opacity .3s ease-in-out, transform 1s ${({theme}) => theme.transitions.primary};

  ${TitleOverlay}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  transform: translateX(50%);
  opacity: 0;
  transition: opacity .3s ease-in-out, transform 2s ${({theme}) => theme.transitions.primary};
  font-size: 3rem;

  ${TitleOverlay}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PortfolioItem = ({ title, image, slug }) => {
  return (
    <StyledWrapper to={`/realizacje/${slug}`}>
      <StyledImage fluid={image} />
      <TitleOverlay>
        <StyledTitle>{title}</StyledTitle>
        <StyledIcon icon={faLongArrowAltRight} size='1x' />
      </TitleOverlay>
    </StyledWrapper>
  )
}

export default PortfolioItem;