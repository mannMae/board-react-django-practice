import { GlobalStyle } from 'library/styled';
import { BrowserRouter } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {children}
    </BrowserRouter>
  );
};
