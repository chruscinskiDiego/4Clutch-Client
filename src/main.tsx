import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { UserSignupPage } from './pages/UserSignupPage/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserSignupPage/>
  </React.StrictMode>,
)
