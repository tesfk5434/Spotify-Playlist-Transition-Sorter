import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './components/login.jsx';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Callback from './components/callback.jsx';
import Dashboard from './components/Dashboard.jsx';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/callback' element={<Callback></Callback>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
