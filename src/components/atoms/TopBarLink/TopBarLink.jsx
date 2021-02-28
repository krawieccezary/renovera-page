import React from 'react';
import styled from 'styled-components';
import EmailIcon  from '../../../assets/images/email-icon.png';
import TelIcon  from '../../../assets/images/tel-icon.png';

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  margin: 0 .5rem 0 1.5rem;
`;

const TopBarLink = ({ children, href, icon }) => (
  <StyledLink href={href}>
    <StyledLogo src={icon === 'email' ? EmailIcon : TelIcon} alt={icon}/>
    {children}
  </StyledLink>
)

export default TopBarLink;