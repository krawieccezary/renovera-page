import styled from 'styled-components';

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.black};
  position: relative;
  display: inline-block;
  padding: ${({ special }) => special ? '0 1rem' : '0'};

  &::before {
    display: ${({ special }) => special ? 'block' : 'none'};
    position: absolute;
    content: '';
    width: 100%;
    height: 15px;
    top: 50%;
    left: 0;
    background-color: ${({theme}) => theme.color.primary};
    z-index: -1;
  }
`;

export default SectionHeading;