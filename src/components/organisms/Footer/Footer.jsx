import React, { useContext } from 'react';
import styled from 'styled-components';
import { Logo, Navigation, Paragraph } from '../../index';
import PageContext from '../../../context/PageContext';

const StyledWrapper = styled.div`
  background-color: ${({theme}) => theme.color.primary};
`;

const StyledGrid = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.25fr;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 0;
`;

const StyledNavigation = styled(Navigation)`
  display: grid;
  grid-gap: 7px;
  margin-top: 0;
  height: min-content;
`;

const StyledCopy = styled.div`
  border-top: 1px solid #fff;
  text-align: center;
`;

const Footer = () => {
  const { address, mobile, eMail, content } = useContext(PageContext);
  return (
    <StyledWrapper> 
      <StyledGrid className='wrapper'> 
        <Logo />
        <div>
          <StyledParagraph>
            {address}
          </StyledParagraph>
          <StyledParagraph>
            <a href={`tel: ${mobile}`}>{mobile}</a>
            <br />
            <a href={`mailto: ${eMail}`}>{eMail}</a>
          </StyledParagraph>
        </div>
        <StyledNavigation location='footer' />
        <StyledParagraph>
          {content}
        </StyledParagraph>
      </StyledGrid>
      <StyledCopy>
        <div className="wrapper">
          <Paragraph align='center' >&copy; Copyright {new Date().getFullYear()} Renovera</Paragraph>
        </div>
      </StyledCopy>
    </StyledWrapper>
  )
}

export default Footer;