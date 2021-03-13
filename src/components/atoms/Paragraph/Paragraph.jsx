import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({theme}) => theme.fontSize.normal};
  line-height: 2rem;
  text-align: ${({align}) => align ? align : 'justify'};
  white-space: pre-line;
  color: ${({theme}) => theme.color.black};
`;

export default Paragraph;