import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Panel from './pages/panel/index.tsx'
import Schedule from './pages/schedule/index.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Consultation from './pages/consultation/index.tsx'
import Report from './pages/report/index.tsx'
import Register from './pages/register/index.tsx'
import { Toaster } from 'sonner'
import Login from './pages/auth/login/index.tsx'
import AuthRegister from './pages/auth/register/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/report" element={<Report />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<AuthRegister />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
