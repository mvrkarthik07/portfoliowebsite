import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './terminal.css'
const root = document.getElementById('root')
const app = <React.StrictMode><App /></React.StrictMode>
if (root.hasAttribute('data-ssr') && window.location.pathname === '/' && !window.location.search) hydrateRoot(root, app)
else createRoot(root).render(app)
