import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer.tsx'
const store = configureStore ({
  reducer: {
    user: userReducer,
    
  }
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
