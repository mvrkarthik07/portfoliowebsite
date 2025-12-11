import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Performance monitoring (can be added here if needed)
// if (import.meta.env.PROD) {
//   // Add analytics or performance monitoring here
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

