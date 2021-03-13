import styled from 'styled-components';

const SectionHeading = styled.h2`
  font-size: ${({theme}) => theme.fontSize.big};
  margin: 0;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.black};
`;

export default SectionHeading;