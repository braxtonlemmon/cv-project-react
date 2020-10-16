import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    light: '#F6F4F2',
    mid: '#C6AD8F',
    dark: '#425664',
    darker: '#2F3B44',
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;