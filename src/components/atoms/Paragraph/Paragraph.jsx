import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: justify;
  white-space: pre-line;
  color: ${({theme}) => theme.color.black};
`;

export default Paragraph;