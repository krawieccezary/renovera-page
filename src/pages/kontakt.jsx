import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Button, Logo, Paragraph, Navigation } from '../components/index';
import PageContext from '../context/PageContext';

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 24px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  text-align: right;
`;

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const StyledFlexChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: ${({type}) => type === 'data' ? '40%' : '60%'};
  background-color: ${({type, theme}) => type === 'data' ? theme.color.primary : ''};
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 3rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 0;
  line-height: 1.5;
`;

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
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
  const { address, mobile, eMail } = useContext(PageContext);
  return (
    <> 
      <NavigationWrapper className="wrapper" > 
        <Navigation />
      </NavigationWrapper>
      <StyledWrapper>
          <StyledFlexChild type="data">
            <div>
              <StyledLogo />
              <StyledParagraph>
                {address}
              </StyledParagraph>
              <StyledParagraph>
                <a href={`tel: ${mobile}`}>{mobile}</a>
                <br />
                <a href={`mailto: ${eMail}`}>{eMail}</a>
              </StyledParagraph>
            </div>
          </StyledFlexChild>
          <StyledFlexChild>
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
          </StyledFlexChild>
      </StyledWrapper>
    </>
  )
}

export default KontaktPage;