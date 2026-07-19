import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css' // <-- ¡Este es el cambio clave para recuperar tu diseño!
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)