import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CryptoContext from "./context/CryptoContext"
import { createTheme, ThemeProvider } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fb8c35',
    },
    secondary: {
      main: '#e3e3e3',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CryptoContext>
      <App />
      </CryptoContext>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
