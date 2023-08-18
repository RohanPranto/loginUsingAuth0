import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Auth0Provider
    domain="dev-jg6ojosw0gzydbuu.us.auth0.com"
    clientId="aaE8HWiNWHWUGZYhIUG0r39LKMCjf1ub"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
)
