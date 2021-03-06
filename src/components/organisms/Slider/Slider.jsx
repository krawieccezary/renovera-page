import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import gsap from 'gsap';


const StyledWrapper = styled.div`
  position: relative;
  height: calc(100vh - 150px);
  min-height: 550px;
  overflow: hidden;
`;

const StyledSlide = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.15);
    z-index: 1;
  }
`;

const StyledHero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 2;
`;

const StyledHeroBrand = styled.h1`
  display: block;
  font-size: 68px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  line-height: 1;
  margin: 0;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 70px;
    height: 70px;
    transform: translateX(-50%);
    border: 7px solid ${({theme}) => theme.color.primary};
    z-index: -1;
  }
`;

const StyledHeroSubtitle = styled.h2`
  margin-top: 1rem;
  font-weight: 500;
`;

const Slider = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDatoCmsHomeSlider {
        nodes {
          homeSliderContent {
            id,
            sliderHeader
            sliderImage {
              fluid(maxWidth: 1920) {
                ...GatsbyDatoCmsFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  return (
    <StyledWrapper>
      {data.allDatoCmsHomeSlider.nodes.map(({ homeSliderContent }) => {
        return homeSliderContent.map(({id, sliderImage, sliderHeader}) => (
          <StyledSlide key={id}>
            <Image fluid={sliderImage.fluid}/>
            <StyledHero>
              <StyledHeroBrand>Renovera</StyledHeroBrand>
              <StyledHeroSubtitle>{sliderHeader}</StyledHeroSubtitle>
            </StyledHero>
          </StyledSlide>
        ))
      })}
    </StyledWrapper>
  )
}

export default Slider;