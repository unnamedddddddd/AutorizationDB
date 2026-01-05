import { useState } from 'react'  
import { useNavigate } from 'react-router-dom'  
import createUser from '../../scripts/CreateUser';
import InputPassword from "../InputPassword.jsx";
import { Link } from 'react-router-dom'
import './Register.css'

const RegisterForm  = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] =  useState('');
  const navigate = useNavigate(); 
  const isDisabled = !login.trim() || !password.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await createUser(login.trim(), password.trim());
    if (success) {
      navigate('/login');
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">  
        <div className="register-userData"> 
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-field-group">
              <label htmlFor="login">Login</label>  
              <input 
                type="text" 
                id="login"
                name="login" 
                autoComplete="username"
                placeholder="Login"
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
            </div>
            <div className="register-field-group"> 
              <label htmlFor="password">Password</label> 
              <InputPassword
                id="password" 
                name="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            </div>      
            <div style={{ textAlign: 'right', marginBottom: '15px' }}>
              <Link 
                to="/login" 
                className="register-link"
                style={{
                  fontSize: '16px',
                  textDecoration: 'none',
                  justifyContent: 'flex-end',
                }}
              >
                Есть аккаунт?
              </Link>
            </div>
            <button 
              type="submit" 
              className="register-auth-button" 
              disabled={isDisabled}
            >
              create profile
            </button>              
          </form>
        </div>
      </div>       
    </div>
  );
}

export default RegisterForm;