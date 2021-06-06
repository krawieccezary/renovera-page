import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Logo, Navigation, TopBarLink } from '../../index';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  position: sticky !important;
  top: -33px;
  background-color: rgba(255,255,255,.9);
  z-index: 5;
  height: 99px;

  .logo-wrap {
    .gatsby-image-wrapper {
      max-width: 100px;
      max-height: 100px;
      transition: transform .3s ease-in-out, max-height .3s ease-in-out, max-width .3s ease-in-out;
    }
    &.small .gatsby-image-wrapper {
      transform: translateY(16px);
      max-height: 67px;
      max-width: 67px
    }
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1001;

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




const Header = () => {
  const logoRef = useRef(null);

  const changeLogoSize = () => {
    if(window.pageYOffset > 0){
      logoRef.current.classList.add('small');
    } else {
      logoRef.current.classList.remove('small');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeLogoSize);

    return () => window.removeEventListener('scroll', changeLogoSize);

  }, []);


  return (
    <StyledWrapper as={StyledHeader}>
      <TopBarStyled>
        <div className="wrapper">
          <TopBarLink icon='tel' href='tel:514252914'>514 252 914</TopBarLink>
          <TopBarLink icon='email' href='mailto:kontakt@renovera.pl'>kontakt@renovera.pl</TopBarLink>
        </div>
      </TopBarStyled> 
      <StyledWrapper className="wrapper">
        <StyledLink to='/'>
          <div ref={logoRef} className="logo-wrap">
            <Logo />
          </div>
        </StyledLink>
        <Navigation />
      </StyledWrapper>
    </StyledWrapper>
  )
}

export default Header;