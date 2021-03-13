import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Button, Styled, Paragraph } from '../components/index';
import PageContext from '../context/PageContext';

const StyledWrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledFlex = styled.div`
  display: flex;
  width: 100%;
  margin: 10rem auto 10rem;
`;

const StyledFlexChild = styled.div`
  width: 50%;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 0;
  line-height: 1.5;
`;

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 600px;
`;

const StyledField = styled(Field)`
  width: 100%;
  border: ${({theme}) => `1px solid ${theme.color.gray}`};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-top: 3px;
  display: block;
  min-height: ${({type}) => type ? 'auto' : '180px'};
`;

const KontaktPage = () => {
  const { address, mobile, eMail, content } = useContext(PageContext);

  return (
    <> 
      <StyledWrapper className="wrapper">
        <h1>Skontaktuj się z nami</h1>
        <StyledFlex>
          <StyledFlexChild>
            <StyledParagraph>
              {address}
            </StyledParagraph>
            <StyledParagraph>
              <a href={`tel: ${mobile}`}>{mobile}</a>
              <br />
              <a href={`mailto: ${eMail}`}>{eMail}</a>
            </StyledParagraph>
          </StyledFlexChild>
          <StyledFlexChild
            as={Formik}
            initialValues={{
              name: '',
              email: '',
              message: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({values, handleChange, handleBlur, handleSubmit}) => (
              <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="name">Imię i nazwisko</label>
                <StyledField 
                  id="name" 
                  name="name" 
                  type="text" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                <label htmlFor="email">Twój E-mail</label>
                <StyledField
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <label htmlFor="message">Twoja wiadomość</label>
                <StyledField 
                  as='textarea'
                  id="message" 
                  name="message" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />

                <Button color='primary' as='button' type="submit">Wyślij</Button>
              </StyledForm>
            )}
          </StyledFlexChild>
        </StyledFlex>
        
      </StyledWrapper>
    </>
  )
}

export default KontaktPage;