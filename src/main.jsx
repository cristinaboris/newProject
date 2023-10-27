import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';
//import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Auth0Provider
    domain="dev-qcrh60r1xr7f7vo0.us.auth0.com"
    clientId="1onLrjkx7lTG3XvxjWFqUL7DZsqMCLZy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
    <App />
    </Provider>
    </Auth0Provider> 
  </React.StrictMode>,
)
