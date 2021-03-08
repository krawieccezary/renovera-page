import styled from 'styled-components';

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.black};
`;

export default SectionHeading;