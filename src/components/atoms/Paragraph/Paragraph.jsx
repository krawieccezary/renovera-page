import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1rem;
  color: ${({theme}) => theme.color.black};
`;

const Paragraph = ({ children }) => (
  <StyledParagraph>
    {children}
  </StyledParagraph>
);

export default Paragraph;