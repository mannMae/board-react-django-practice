import { GlobalStyle, facebookTheme, theme } from 'library/styled';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={facebookTheme}>
      <BrowserRouter>
        <GlobalStyle />
        {children}
      </BrowserRouter>
    </ThemeProvider>
  );
};
