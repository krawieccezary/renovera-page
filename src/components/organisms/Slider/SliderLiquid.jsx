import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import hoverEffect from 'hover-effect';
import gsap from 'gsap';
import distortionImage  from '../../../assets/images/slider/distortion.jpg';


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
  left: 30%;
  max-width: 50%;
  transform: translateY(-50%);
  color: #fff;
  z-index: 2;
`;


const StyledHeroBrandAnimation = keyframes`
  40% {
    opacity: 0;
    transform: translateX(-100%) ;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledHeroRectAnimation = keyframes`
  40% {
    transform: scaleX(0) ;
  }
  100% {
    transform: scaleX(1);
  }
`;


const StyledHeroBrand = styled.h1`
  display: block;
  font-size: 68px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  line-height: 1;
  margin: 0;
  overflow: hidden;
  padding-left: 35px;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 70px;
    height: 70px;
    border: 7px solid ${({theme}) => theme.color.primary};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left center;
    animation-name: ${StyledHeroRectAnimation};
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-delay: .1s;
    animation-fill-mode: both;
  }

  span {
    display: block;
    opacity: 0;
    transform: translateX(-100%);
    animation-name: ${StyledHeroBrandAnimation};
    animation-duration: .7s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-delay: .3s;
    animation-fill-mode: both;
  }
`;


const StyledHeroSubtitleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%) ;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHeroSubtitle = styled.h2`
  margin-top: 1rem;
  font-weight: 500;
  animation-name: ${StyledHeroSubtitleAnimation};
  animation-duration: .5s;
  animation-timing-function: ease-in-out;
  animation-delay: .6s;
  animation-fill-mode: both;
`;


const StyledDistortionContainer = styled.div`
  height: calc(100vh - 150px);
  width: 100vw;
`;

const changeSliderImage = currentSliderEvent => {
  currentSliderEvent();
}

const SliderLiquid = () => {
  const distortionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { allDatoCmsHomeSlider } = useStaticQuery(graphql`
    query sliderQuery {
      allDatoCmsHomeSlider {
        nodes {
          homeSliderContent {
            id,
            sliderHeader
            sliderImage {
              url
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const distortionEffect = new hoverEffect({
      parent: distortionRef.current,
      intensity: 1,
      image1: allDatoCmsHomeSlider.nodes[0].homeSliderContent[0].sliderImage.url,
      image2: allDatoCmsHomeSlider.nodes[0].homeSliderContent[1].sliderImage.url,
      displacementImage: distortionImage,
      imagesRatio: 1280/1920,
      speedIn: 1,
      speedOut: 1,
      hover: false
    });

    const intervalID = setInterval(() => {
      setCurrentSlide(prevState => {
        const currentSliderEvent = prevState ? distortionEffect.previous : distortionEffect.next;
        changeSliderImage(currentSliderEvent);

        return prevState ? 0 : 1
      });
    }, 7000);

    return () => {
      clearInterval(intervalID);
    }
  }, []);
  

  return (
    <StyledDistortionContainer ref={distortionRef} className="distortion">
      <StyledHero>
        <StyledHeroBrand>
          <span>
            Renovera
          </span>
        </StyledHeroBrand>
        <StyledHeroSubtitle>{allDatoCmsHomeSlider.nodes[0].homeSliderContent[currentSlide].sliderHeader}</StyledHeroSubtitle>
      </StyledHero>
    </StyledDistortionContainer>
  )
}

export default SliderLiquid;