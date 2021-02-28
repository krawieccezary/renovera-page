import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: justify;
  white-space: pre-line;
  color: ${({theme}) => theme.color.black};
`;

const Paragraph = ({ children }) => (
  <StyledParagraph>
    {children}
  </StyledParagraph>
);

export default Paragraph;