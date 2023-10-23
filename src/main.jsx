import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import { GlobalStyle } from './style/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <AppRoutes />
  </React.StrictMode>,
)
