import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.black};
`;

const SectionHeading = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
)

export default SectionHeading;