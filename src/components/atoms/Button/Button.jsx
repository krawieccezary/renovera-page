import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledWrapper = styled(Link)`
  padding: .7rem 1.5rem;
  background-color: ${({theme, type}) => theme.color[type]};
  color: ${({theme, type}) => type === 'secondary' ? '#fff' : theme.color.black};
  border: ${({theme, type}) => theme.color[type]};
`;

const Button = ({ type, children, to }) => (
  <StyledWrapper type={type} to={to}>
    {children}
  </StyledWrapper>
);

export default Button;