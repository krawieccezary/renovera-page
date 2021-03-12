import React from 'react';
import styled from 'styled-components';

const StyledField = styled.input`
  width: 100%;
  border: ${({theme}) => `1px solid ${theme.color.primary}`};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  display: block;
  min-height: ${({type}) => type ? 'auto' : '180px'};
`;

const FormField = ({ type, name }) => (
  <>  
    {type ? (
      <StyledField 
        type={type}
        name={name}
      />
    ) : (
      <StyledField 
        as='textarea'
        name={name}
      />
    )}
  </>
)

export default FormField;