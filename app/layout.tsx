import React from 'react';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  background: '#000000',
  color: '#FFFFFF',
  // Add more theme properties as needed
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="min-h-screen bg-gray-900 text-white">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;