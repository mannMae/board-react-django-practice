import { GlobalStyles } from 'library/styled';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Router>{children}</Router>
    </>
  );
};
