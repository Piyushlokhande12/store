import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <StrictMode>
      <div className="dark:bg-slate-800 dark:text-white">
        <App />
      </div>
  </StrictMode>,
  </BrowserRouter>
 
)
