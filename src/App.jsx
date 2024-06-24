import React from 'react';
import ThemeProviderWrapper from './ThemeProviderWrapper'; // Ajusta la ruta según sea necesario
import Testing from './Testing';

function App() {
  return (
    <ThemeProviderWrapper>
      <Testing/>
    </ThemeProviderWrapper>
  );
}

export default App;
