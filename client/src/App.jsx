import RegisterForm from './components/CreateUSer/Register.jsx'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom' 
import ToDoUser from './components/TasksUser/ToDoUser.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to ='/login' replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/todo" element={<ToDoUser />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  )
}

export default App
