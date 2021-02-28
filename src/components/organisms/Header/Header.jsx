import React from 'react';
import styled from 'styled-components';
import { Logo, Navigation, TopBarLink } from '../../index';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  .wrapper {
    width: 100%;
  }
`;

const TopBarStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({theme}) => theme.color.primary};

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: .7rem 2rem;
  }
`;


const Header = () => (
  <header>
    <StyledWrapper>
      <TopBarStyled>
        <div className="wrapper">
          <TopBarLink icon='tel' href='tel:514252914'>514 252 914</TopBarLink>
          <TopBarLink icon='email' href='mailto:kontakt@renovera.pl'>kontakt@renovera.pl</TopBarLink>
        </div>
      </TopBarStyled> 
      <StyledWrapper className="wrapper">
        <Logo />
        <Navigation />
      </StyledWrapper>
    </StyledWrapper>
  </header>
)

export default Header;