import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { DataContextProvider } from './contexts/DataContext.jsx'
import { ImagesContextProvider } from './contexts/ImagesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <ImagesContextProvider>
          <App />
        </ImagesContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
