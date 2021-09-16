import React from 'react';
import { Slider, ContentBox, IconsBox, OfferSection, PortfolioSection } from '../components';
import SliderLiquid from '../components/organisms/Slider/SliderLiquid';
import { RenoveraMap } from '../components/index';

const HomePage = () => (
  <>
    <SliderLiquid />
    <ContentBox />
    <IconsBox />
    <OfferSection />
    <PortfolioSection />
    <RenoveraMap />
  </>
)

export default HomePage;