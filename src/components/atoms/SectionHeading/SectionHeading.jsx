import styled from 'styled-components';
import brushUnderline from '../../../assets/images/brush.png';


const SectionHeading = styled.h2`
  font-size: ${({theme}) => theme.fontSize.big};
  margin: 0;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.black};
  position: relative;
  display: inline-block;
  padding: ${({ special }) => special ? '0 .5em .3em 0' : '0'};
  background-image: ${({special }) => special ? `url(${brushUnderline})` : 'none'};
  background-position: center 80%;
  background-size: 100% 70%;
  background-repeat: no-repeat;

  /* &::before {
    display: ${({ special }) => special ? 'block' : 'none'};
    position: absolute;
    content: '';
    width: 100%;
    height: 15px;
    top: 50%;
    left: 0;
    background-color: ${({theme}) => theme.color.primary};
    z-index: -1;
  } */
`;

export default SectionHeading;