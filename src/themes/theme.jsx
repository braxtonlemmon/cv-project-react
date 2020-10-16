import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    light: '#F6F4F2',
    dark: '#425664',
    mid: '#C6AD8F'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;