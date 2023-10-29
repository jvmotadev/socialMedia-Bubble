import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { tema } from './style/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyle/>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)
