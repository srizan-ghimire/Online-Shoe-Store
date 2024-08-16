import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";
import { Auth0Provider } from '@auth0/auth0-react';


const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-gw10ac5fupdafqvi.us.auth0.com"
    clientId="IamL8oQdlafN0RTXXWQt9haC4WKptEoe"
    authorizationParams={{redirect_uri: window.location.origin}}>
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
  </Auth0Provider>
);
