import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';


const StyledWrapper = styled.div`
  position: relative;
  height: 50vh;
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
`;

const StyledHero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
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
              <h2>{sliderHeader}</h2>
            </StyledHero>
          </StyledSlide>
        ))
      })}
    </StyledWrapper>
  )
}

export default Slider;