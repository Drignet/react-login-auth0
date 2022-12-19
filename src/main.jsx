import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

//const domain = process.env.REACT_APP_AUTH0_DOMAIN
//const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-aadrzr32wne4ukoj.us.auth0.com"
    clientId="z89bTSAPnYqpDTFktrxP7qHM2vXHwUDY"
    redirectUri={window.location.origin + '/react-login-auth0'}
    >
    <App />
  </Auth0Provider>
)
