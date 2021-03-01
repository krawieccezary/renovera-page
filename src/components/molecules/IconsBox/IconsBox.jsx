import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const StyledWrapper = styled.div`
  margin: 7rem 0 3rem;
  background-color: ${({theme}) => theme.color.light_gray};
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  padding: 3rem 0;
`;

const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 0;
`;

const IconsBox = () => {
  const { datoCmsIconsBox: {icons}} = useStaticQuery(graphql`
    query IconsQuery {
      datoCmsIconsBox {
        icons {
          fixed(height: 50) {
            ...GatsbyDatoCmsFixed_tracedSVG
          }
          title,
          originalId
        }
      }
    }
  `);

  return (
    <StyledWrapper>
      <StyledInnerWrapper className="wrapper">
        {icons.map(({ title, fixed, originalId }) => (
          <StyledIcon key={originalId} style={{width: `${100 / icons.length}%` }}>
            <Image fixed={fixed} />
            <StyledTitle>{title}</StyledTitle>
          </StyledIcon>
        ))}
      </StyledInnerWrapper>
    </StyledWrapper>
  )
}

export default IconsBox;