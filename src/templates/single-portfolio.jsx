import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { graphql } from 'gatsby';
import Image from 'gatsby-image';  
import { SectionHeading } from '../components';


const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 2rem 0;
`;

const StyledWrapper = styled.div`
  position: relative;
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const StyledHeroWrapper = styled.div`
  overflow: hidden;
  position: absolute;
`;

const StyledHero = styled(SectionHeading)`
  color: #fff;
  text-transform: uppercase;
  font-size: 5rem;
  letter-spacing: 2px;
  text-align: center;
  display: block;
  width: max-content;
  text-shadow: 1px 1px 5px rgba(0,0,0,.4);
  transform: translateY(100%);
  position: relative;
  z-index: 1;

  &::before {
    display: none;
    height: 50%;
    box-shadow: 1px 1px 10px -1px rgba(0,0,0,.4)
  }
`;

const StyledHeroBackground = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.color.primary};  
  height: 1px;
  width: 1px;
`;


export const query = graphql`
  query singlePortfolio($id: String!) {
    datoCmsPortfolio(id: {eq: $id}) {
      description
      title
      id
      date
      images {
        originalId
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

const animateBannerHero = (heroBackgroundRef, heroRef) => {
  const tl = gsap.timeline({});
  tl.to(heroBackgroundRef, {width: '100%', duration: 1, delay: .5})
    .to(heroBackgroundRef, {height: '50%', duration: .7})
    .to(heroRef, {duration:.7, y: 0}, '-=.7');
}

const animateBannerImageOnScroll = bannerImageRef => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(bannerImageRef, {
    duration: 1, 
    scale: 1.2,
    scrollTrigger: {
      trigger: bannerImageRef, 
      start: "top top",
      markers: true,
      scrub: true
    }
  })
}


const SinglePortfolio = ({ data: {datoCmsPortfolio: { description, title, date, images }} }) => {
  const heroRef = useRef(null);
  const heroBackgroundRef = useRef(null);
  const bannerImageRef = useRef(null);

  useEffect(() => {
    animateBannerHero(heroBackgroundRef.current, heroRef.current);
    animateBannerImageOnScroll(bannerImageRef.current.imageRef.current);
  },[]);

  return (
    <>
      <StyledWrapper>
        <StyledHeroWrapper>
          <StyledHero ref={heroRef} as="h1" special>{title}</StyledHero>
          <StyledHeroBackground ref={heroBackgroundRef}></StyledHeroBackground>
        </StyledHeroWrapper>
        <Image ref={bannerImageRef} fluid={images[0].fluid} />
      </StyledWrapper>
      <StyledGallery className="wrapper">
        {images.map(image => <Image key={image.originalId} fluid={image.fluid} />)}
      </StyledGallery>
    </>
  )
}

export default SinglePortfolio;