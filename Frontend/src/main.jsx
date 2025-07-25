import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
 <StrictMode>
      <div className="dark:bg-slate-800 dark:text-white">
        <App />
      </div>
  </StrictMode>,
  </AuthProvider>
  </BrowserRouter>
 
)
