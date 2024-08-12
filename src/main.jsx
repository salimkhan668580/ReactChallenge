import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'remixicon/fonts/remixicon.css'

import AuthPrtovider from '../ContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <AuthPrtovider>

    <App />
  </AuthPrtovider>
 
  </React.StrictMode>,
)