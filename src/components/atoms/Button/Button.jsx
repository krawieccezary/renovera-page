import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledWrapper = styled(Link)`
  padding: 1rem 2rem;
  text-transform: uppercase;
  background-color: ${({theme, color}) => theme.color[color]};
  color: ${({theme, color}) => color === 'secondary' || color === 'black' ? '#fff' : theme.color.black};
  border: ${({theme, color}) => theme.color[color]};
`;

const Button = ({ color, children, to, as, onClick }) => (
  <>
    {as === 'button' ? 
    (
      <StyledWrapper 
        color={color} 
        to={to}
        as={as}
        onClick={onClick}
      >
      {children}
      </StyledWrapper>
    ):(
      <StyledWrapper 
        color={color} 
        to={to}
      >
      {children}
    </StyledWrapper>
    )}
  </>
);

export default Button;