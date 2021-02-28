import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundSlider from 'gatsby-image-background-slider';


const StyledWrapper = styled.div`
  position: relative;
  height: 50vh;
  min-height: 550px;
`;

const StyledHero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;

const StyledHeroBrand = styled.span`
  display: block;
  font-size: 68px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  line-height: 1;

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

const Slider = () => (
  <StyledWrapper>
    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={2} // transition duration between images
      duration={5} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      // images={["dog.jpg", "cat.jpg", "giraffe.jpg", "tasmanian devil.jpg", "gabe.jpg"]} 

      // pass down standard element props         
    > 
      {/* Captions in sync with background images*/}
      <StyledHero>
        <StyledHeroBrand>Renovera</StyledHeroBrand>
        kompleksowe wykończenia wnętrz oraz remonty</StyledHero>
      <StyledHero>
        <StyledHeroBrand>Renovera</StyledHeroBrand>
        Meow
      </StyledHero>
    </BackgroundSlider>
  </StyledWrapper>
)

export default Slider;