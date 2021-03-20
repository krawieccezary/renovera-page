import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { Header, Footer } from '../components/index';
import PageContext from '../context/PageContext';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;

const MainLayout = ({ children, pageContext }) => { 
  const { datoCmsRenoveraContact: {address, eMail, mobile, footerInfo: content}} = useStaticQuery(graphql`
    query ContactQuery {
      datoCmsRenoveraContact {
        address
        eMail
        mobile
        footerInfo
      }
    }
  `);

  return pageContext.layout === "empty" ?
  (
    <ThemeProvider theme={theme}>
      <PageContext.Provider value={{address, eMail, mobile, content}}>
        <StyledWrapper>
          <GlobalStyles />
          <StyledMain>{children}</StyledMain>
        </StyledWrapper>
      </PageContext.Provider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <PageContext.Provider value={{address, eMail, mobile, content}}>
        <StyledWrapper>
          <GlobalStyles />
          <Header />
          <StyledMain>{children}</StyledMain>
          <Footer />
        </StyledWrapper>
      </PageContext.Provider>
    </ThemeProvider>
  )
}

export default MainLayout;