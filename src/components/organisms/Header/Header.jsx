import React from 'react';
import styled from 'styled-components';
import { Logo, Navigation, TopBarLink } from '../../index';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  position: sticky !important;
  top: -33px;
  background-color: rgba(255,255,255,.9);
  z-index: 1;
`;

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
  z-index: 1;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: .7rem 2rem;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  z-index: 6;
  margin-bottom: -5px;
`;

const Header = () => (
  <StyledWrapper as={StyledHeader}>
    <TopBarStyled>
      <div className="wrapper">
        <TopBarLink icon='tel' href='tel:514252914'>514 252 914</TopBarLink>
        <TopBarLink icon='email' href='mailto:kontakt@renovera.pl'>kontakt@renovera.pl</TopBarLink>
      </div>
    </TopBarStyled> 
    <StyledWrapper className="wrapper">
      <StyledLink to='/'>
        <Logo />
      </StyledLink>
      <Navigation />
    </StyledWrapper>
  </StyledWrapper>
)

export default Header;