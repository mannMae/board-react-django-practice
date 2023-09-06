import { GlobalStyle } from 'library/styled';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <Router>
      <GlobalStyle />
      {children}
    </Router>
  );
};
