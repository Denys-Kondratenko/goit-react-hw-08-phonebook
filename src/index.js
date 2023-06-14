import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

const theme = {
  colors: {
    white: '#fff',
    black: '#212121',
    gray: '#e9e9e9',
    secondText: '#a8a7a7',
    backgroundColor: '#ebebeb',
    red: 'red',
    green: 'green',
    blue: 'aqua',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
