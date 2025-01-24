import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login/Login'
import GlobalStyle from './styles/GlobalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyle />
  </StrictMode>,
)
