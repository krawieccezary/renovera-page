import React from 'react';
import styled from 'styled-components';
import { Logo, Navigation, Paragraph } from '../../index';

const StyledWrapper = styled.div`
  background-color: ${({theme}) => theme.color.primary};
`;

const StyledGrid = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.25fr;
`;

const StyledNavigation = styled(Navigation)`
  display: grid;
  grid-gap: 7px;
  margin-top: 0;
`;

const StyledCopy = styled.div`
  border-top: 1px solid #fff;
  text-align: center;
`;

const Footer = () => {

  return (
    <StyledWrapper> 
      <StyledGrid className='wrapper'> 
        <Logo />
        <StyledNavigation location='footer' />
      </StyledGrid>
      <StyledCopy>
        <div className="wrapper">
          <Paragraph align='center' >&copy; Copyright {new Date().getFullYear()} Renovera</Paragraph>
        </div>
      </StyledCopy>
    </StyledWrapper>
  )
}

export default Footer;