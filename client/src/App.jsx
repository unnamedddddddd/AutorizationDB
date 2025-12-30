import RegisterForm from './components/CreateUSer/Register.jsx'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom' 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to ='/login' replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
