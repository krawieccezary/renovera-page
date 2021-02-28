import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledWrapper = styled.nav`
  margin-top: 33px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 0 5px;
  padding: 0 10px;
`;

const Navigation = () => (
  <StyledWrapper>
    <StyledLink to='/'>Strona główna</StyledLink>
    <StyledLink to='/oferta'>Oferta</StyledLink>
    <StyledLink to='/realizacje'>Realizacje</StyledLink>
    <StyledLink to='/kontakt'>Kontakt</StyledLink>
  </StyledWrapper>
)

export default Navigation;