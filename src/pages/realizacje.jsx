import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { PortfolioCategories, PortfolioList, Paragraph } from '../components';


const StyledPortfolioPageHero = styled.div`
  visibility: hidden;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem;

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
`;

const StyledParagraph = styled(Paragraph)`
  transform: translateY(20%);
  opacity: 0;
`;

const setListHeight = (el, height) => {
  el.style.minHeight = `${height+ 10}px`;
}


export const portfolioContent = graphql`
  query portfolioContentQuery {
    datoCmsPortfolioPageIntro {
      image2 {
        fluid {
          srcSet
        }
      }
      image1 {
        fluid {
          srcSet
        }
      }
      header1
      header2
      header3
      description
    }
  }
`;


const RealizacjePage = ({data: {datoCmsPortfolioPageIntro: { image1, image2, header1, header2, header3, description }} }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const portfolioListWrapRef = useRef(null);
  const heroRef = useRef(null);
  const imagesRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const hero = heroRef.current;
    const images = Array.from(imagesRef.current.children).reverse();
    const headingLines = heroHeadingRef.current.querySelectorAll('.hero-header__line-inner');

    tl.to(hero, {duration: 0, css: {visibility: 'visible'}})
    .to(images, {duration: .8, delay: .5, y: 0, autoAlpha: 1, stagger: .3, ease: 'power3.easeOut'})
    .fromTo(images[0].firstElementChild, {scale: 1.6, ease: 'power3.easeOut'}, {duration: 1.3, scale: 1}, '-=1')
    .fromTo(images[1].firstElementChild, {scale: 1.6, ease: 'power3.easeOut'}, {duration: 1.3, scale: 1}, '-=1')
    .to(headingLines, {duration: .8, y: 0, stagger: .2, ease: "power3.easeOut"}, '-=1')
    .to(descriptionRef.current, {duration: .8, y: 0, opacity: 1, ease: 'power3.easeOut'}, '-=.5');

  },[]);


  const handleClick = category => {
    setActiveCategory(category);
    setIsLoaded(false);
  }


  return (
    <div className="wrapper">  
      <StyledPortfolioPageHero ref={heroRef}>
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
                <div className="hero-header__line-inner">
                  {header3}
                </div>
              </div>
            </h1>
          </div>
          <StyledParagraphWrapper>
            <StyledParagraph ref={descriptionRef}>{description}</StyledParagraph>
          </StyledParagraphWrapper>  
        </div>
        <div className="hero__images" ref={imagesRef}>
          <div className="hero__image hero__image--left">
            <img src={image1.fluid.srcSet} alt="remont" />
          </div>
          <div className="hero__image hero__image--right">
            <img src={image2.fluid.srcSet} alt="renowacja" />
          </div>
        </div>
      </StyledPortfolioPageHero>
      <PortfolioCategories click={handleClick} activeCategory={activeCategory} />
      <div ref={portfolioListWrapRef} >
        <PortfolioList 
          activeCategory={activeCategory} 
          isLoaded={isLoaded} 
          setIsLoaded={setIsLoaded} 
          setListHeight={setListHeight} 
          portfolioListWrapRef={portfolioListWrapRef}
        />
      </div>
    </div>
  )
}

export default RealizacjePage;