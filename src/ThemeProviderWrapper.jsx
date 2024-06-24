import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Crear el tema oscuro
const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

// Componente que envuelve la aplicación con el tema oscuro
const ThemeProviderWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
