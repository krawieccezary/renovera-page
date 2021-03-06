import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components';
import { Paragraph } from '../../index';
import brushUnderline from '../../../assets/images/brush.png';


const StyledPageHeroBannerInnerWrap = styled.div`
  visibility: hidden;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10rem;

  .hero__content {
    width: 45%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
      margin-bottom: 2rem;

      .hero-header__line {
        height: 4rem;
        overflow: hidden;
        height: auto;

        .hero-header__line-inner {
          transform: translateY(100%);
        }
      }
    }
  }

  .hero__images {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .hero__image {
      transform: translateY(100%);
      opacity: 0;
      overflow: hidden;

      &.hero__image--left {
        width: 52%;
        height: 65%;
        margin-top: auto;
        margin-bottom: 3rem;
      }  
      &.hero__image--right {
        width: 45%;
        height: 55%;
        margin-bottom: auto;
        align-self: flex-start;
        margin-top: 2rem;
      } 
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;


const StyledParagraphWrapper = styled.div`
  overflow: hidden;
  height: auto;
  padding-right: 1em;
`;

const StyledHeroHeader = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 .5em .3em 0;
`;

const StyledBrushUnderline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${brushUnderline});
  background-position: left 80%;
  background-size: 100% 70%;
  background-repeat: no-repeat;
  transform-origin: center left;
  z-index: -1;
`;

const StyledParagraph = styled(Paragraph)`
  transform: translateY(20%);
  opacity: 0;
`;

const StyledDownButton = styled.button`
  text-transform: uppercase;
  background: none;
  border: none;
  outline: none;
  margin-top: 2rem;
  padding-right: calc(30px + .5em);
  position: relative;
  transform: translateY(20%);
  opacity: 0;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    right: 10px;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid ${({theme}) => theme.color.black};
    border-right: 2px solid ${({theme}) => theme.color.black};
    transform: translateY(-50%) rotate(45deg);
  } 

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    right: 15px;
    width: 2px;
    height: 15px;
    transform: translateY(-50%);
    background-color: ${({theme}) => theme.color.black};
    z-index: 1;
  }

  span {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translateY(-50%);
    background-color: ${({theme}) => theme.color.primary};
    transition: transform 1s ${({theme}) => theme.transitions.primary};

  }
  &:hover span {
    transform: scale(1.5) translateY(-10%);
  }
`

const PageHeroBanner = ({data: {header1, header2, header3, description, image1, image2, buttonText}}) => {
  const scrollButtonRef = useRef(null);
  const descriptionRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const imagesRef = useRef(null);
  const heroRef = useRef(null);
  const styledBrushUnderlineRef = useRef(null);

  const executeScroll = () => {
    window.scrollTo({ 
      top: heroRef.current.getBoundingClientRect().bottom - 100,
      behavior: 'smooth'
    })  
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const hero = heroRef.current;
    const images = Array.from(imagesRef.current.children).reverse();
    const headingLines = heroHeadingRef.current.querySelectorAll('.hero-header__line-inner');

    tl.set(styledBrushUnderlineRef.current, {clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)'});

    tl.to(hero, {duration: 0, css: {visibility: 'visible'}})
    .to(images, {duration: .8, delay: .5, y: 0, autoAlpha: 1, stagger: .3, ease: 'power3.easeOut'})
    .fromTo(images[0].firstElementChild, {scale: 1.6, ease: 'power3.easeOut'}, {duration: 1.3, scale: 1}, '-=1')
    .fromTo(images[1].firstElementChild, {scale: 1.6, ease: 'power3.easeOut'}, {duration: 1.3, scale: 1}, '-=1')
    .to(headingLines, {duration: .8, y: 0, stagger: .2, ease: "power3.easeOut"}, '-=1')
    .to(descriptionRef.current, {duration: .8, y: 0, opacity: 1, ease: 'power3.easeOut'}, '-=.5')
    .to(scrollButtonRef.current, {duration: .8, y: 0, opacity: 1, ease: 'power3.easeOut'}, '-=.5')
    .to(styledBrushUnderlineRef.current, {duration: .7, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', ease: 'power3.easeOut'}, '-=.5');

    [images[0].firstElementChild, images[1].firstElementChild].forEach(image => {
      gsap.set(image, {scale: 1});
      gsap.to(image, {
        duration: 1, 
        scale: 1.15,
        scrollTrigger: {
          trigger: image,
          start: '-=120% top',
          scrub: true
        }
      })
    })

  },[]);

  return (
    <StyledPageHeroBannerInnerWrap ref={heroRef}>
      <div className="hero__content">
        <div className="hero__header-wrap">
          <h1 ref={heroHeadingRef}>
            <div className="hero-header__line">
              <div className="hero-header__line-inner">
                {header1}
              </div>
            </div>
            <div className="hero-header__line">
              <div className="hero-header__line-inner">
                {header2}
              </div>
            </div>
            <div className="hero-header__line">
              <StyledHeroHeader className="hero-header__line-inner">
                {header3}
                <StyledBrushUnderline ref={styledBrushUnderlineRef}></StyledBrushUnderline>
              </StyledHeroHeader>
            </div>
          </h1>
        </div>
        <StyledParagraphWrapper>
          <StyledParagraph ref={descriptionRef}>{description}</StyledParagraph>
        </StyledParagraphWrapper>  
        <StyledDownButton ref={scrollButtonRef} color="primary" as="button" onClick={executeScroll}>
          {buttonText}
          <span></span>
        </StyledDownButton>
      </div>
      <div className="hero__images" ref={imagesRef}>
        <div className="hero__image hero__image--left">
          <img src={image1.fluid.srcSet} alt="remont" />
        </div>
        <div className="hero__image hero__image--right">
          <img src={image2.fluid.srcSet} alt="renowacja" />
        </div>
      </div>
    </StyledPageHeroBannerInnerWrap>
  )
}


export default PageHeroBanner;