import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledWrapper = styled(Link)`
  padding: 1rem 2rem;
  text-transform: uppercase;
  background-color: ${({theme, type}) => theme.color[type]};
  color: ${({theme, type}) => type === 'secondary' || type === 'black' ? '#fff' : theme.color.black};
  border: ${({theme, type}) => theme.color[type]};
`;

const Button = ({ type, children, to }) => (
  <StyledWrapper type={type} to={to}>
    {children}
  </StyledWrapper>
);

export default Button;