import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { Header, Footer } from '../components/index';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <StyledWrapper>
        <GlobalStyles />
        <Header />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </StyledWrapper>
    </>
  </ThemeProvider>
)

export default MainLayout;