import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paragraph } from '../../index';
import errorImage from '../../../assets/images/fetch-error.png';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
`;

const StyledImage = styled.img`
  max-width: 500px; 
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 0;
`;

const FetchError = ({ errorMessage }) => {
  return (
    <StyledWrapper>
      <StyledImage src={errorImage} alt="Error" />
      <StyledParagraph>{errorMessage}</StyledParagraph>
    </StyledWrapper>
  )
}

FetchError.propTypes = {
  errorMessage: PropTypes.string
};

export default FetchError;



