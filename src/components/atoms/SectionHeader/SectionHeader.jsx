import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.black};
`;

const SectionHeader = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
)

export default SectionHeader;