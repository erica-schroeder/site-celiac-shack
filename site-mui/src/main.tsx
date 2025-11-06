import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { App } from './app/App.tsx';
import { theme } from './app/theme.ts';
import '@fontsource/alice/400.css';
import '@fontsource/open-sans/400.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HashRouter>
  </StrictMode>,
);
