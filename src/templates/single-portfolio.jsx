import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { graphql } from 'gatsby';
import Image from 'gatsby-image';  
import { SectionHeading, Paragraph } from '../components';
import useDate from '../hooks/useDate';


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
  position: absolute;
  `;

const StyledHeadingWrapper = styled.div`
  overflow: hidden;
  position: relative;
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

const StyledParagraphWrapper = styled.div`
  margin: 8rem auto 10rem;
  max-width: ${({theme}) => theme.variables.small_wrapper_width};
`;

const StyledDateParagraph = styled(Paragraph)`
  text-align: center;
  padding-bottom: 2rem;
  font-weight: ${({theme}) => theme.fontWeight.medium};
  font-size: ${({theme}) => theme.fontSize.large};
  color: ${({theme}) => theme.color.white};
  opacity: 0;
  transform: translateY(-20%);
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

const animateBannerHero = (heroBackgroundRef, heroRef, bannerImageRef, dateRef) => {
  const tl = gsap.timeline({});
  gsap.set(bannerImageRef, {clipPath: 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)'});
  tl.to(heroBackgroundRef, {width: '100%', duration: 1, delay: .5})
    .to(heroBackgroundRef, {height: '50%', duration: .7, ease: "power3.out"})
    .to(heroRef, {duration:.7, y: 0}, '-=.7')
    .to(dateRef, {duration:.7, autoAlpha: 1, y: 0}, '-=.2')
    .to(bannerImageRef, {duration: 1.7, ease: "power3.out", clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, '-=1.2');
}

const animateBannerImageOnScroll = bannerImageRef => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(bannerImageRef, {
    duration: 1, 
    scale: 1.15,
    scrollTrigger: {
      trigger: bannerImageRef, 
      start: "=-99px top",
      scrub: true
    }
  })
}


const SinglePortfolio = ({data, data: {datoCmsPortfolio: { description, title, date, images }} }) => {
  const heroRef = useRef(null);
  const heroBackgroundRef = useRef(null);
  const bannerImageRef = useRef(null);
  const dateRef = useRef(null);


  useEffect(() => {
    const bannerImage = bannerImageRef.current.imageRef.current;
    animateBannerHero(heroBackgroundRef.current, heroRef.current, bannerImage, dateRef.current);
    animateBannerImageOnScroll(bannerImage);
  },[]);


  return (
    <>
      <StyledWrapper>
        <StyledHeroWrapper>
          <StyledHeadingWrapper>
            <StyledHero ref={heroRef} as="h1" special>{title}</StyledHero>
            <StyledHeroBackground ref={heroBackgroundRef}></StyledHeroBackground>
          </StyledHeadingWrapper>
          <StyledDateParagraph ref={dateRef}>{useDate(date)}</StyledDateParagraph>
        </StyledHeroWrapper>
        <Image ref={bannerImageRef} fluid={images[0].fluid} />
      </StyledWrapper>
      <StyledParagraphWrapper className="wrapper">
        <Paragraph>{description}</Paragraph>
      </StyledParagraphWrapper>
      <StyledGallery className="wrapper">
        {images.map(image => <Image key={image.originalId} fluid={image.fluid} />)}
      </StyledGallery>
    </>
  )
}

export default SinglePortfolio;