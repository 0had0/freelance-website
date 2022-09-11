import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: { main: '#a1bee1' },
    secondary: { main: '#3C4856' },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: ['Tajawal'],
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: '#fff',
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
