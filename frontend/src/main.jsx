import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <App />
    <Home/>
  </StrictMode>,
)
