import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Button } from '../../index';

const StyledWrapper = styled.nav`
  margin-top: 33px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 5px;
  padding: 0 10px;
  font-size: ${({theme}) => theme.fontSize.normal};
`;

const Navigation = ({ className, location }) => (
  <StyledWrapper className={className}>
    <StyledLink to='/'>Strona główna</StyledLink>
    <StyledLink to='/oferta'>Oferta</StyledLink>
    <StyledLink to='/realizacje'>Realizacje</StyledLink>
    {location === 'footer' 
    ? (
      <StyledLink to='/kontakt'>Kontakt</StyledLink>
    ):(
      <StyledLink as={Button} color='secondary' to='/kontakt'>Kontakt</StyledLink>
    )} 
  </StyledWrapper>
)

export default Navigation;