import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./styles/global.css"
import "./Pages/Home/style.css"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
