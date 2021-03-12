import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { FormField, Button } from '../components/index';


const StyledForm = styled(Form)`
  width: 100%;
  max-width: 600px;
  margin: 3rem auto 7rem;
`;

const StyledField = styled(Field)`
  width: 100%;
  border: ${({theme}) => `1px solid ${theme.color.primary}`};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  display: block;
  min-height: ${({type}) => type ? 'auto' : '180px'};
`;

const KontaktPage = () => {
  return (
    <> 
      <div className="wrapper">
        <h1>Kontakt</h1>
        <Formik
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
        </Formik>
      </div>
    </>
  )
}

export default KontaktPage;