import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/index.css'
import App from './app/App.jsx'
import router from './app/app.routes.jsx'
import { store } from './app/app.store.js'
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router"
import { useEffect } from "react"

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
