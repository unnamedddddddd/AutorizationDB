import { useState } from 'react'  
import { useNavigate } from 'react-router-dom'  
import createUser from '../../scripts/CreateUser';
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
    <>
      <div className="form-container">  
          <div className="userData"> 
              <form onSubmit={handleSubmit}>
                <div className="field-group">
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
                <div className="field-group"> 
                    <label htmlFor="password">Password</label> 
                    <input 
                      type="password" 
                      id="password" 
                      name="password"
                      autoComplete="current-password" 
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                </div>      
                <div style={{ textAlign: 'right', marginBottom: '15px' }}>
                  <Link 
                      to="/login" 
                      style={{
                        textAlign: 'right',
                          color: '#A090B8',
                          fontSize: '16px',
                          textDecoration: 'none',
                          justifyContent: 'flex-end',
                          marginBottom:'15px'
                      }}
                      >Есть аккаунт?
                  </Link>
                </div>
              <button type="submit" className="auth-button" disabled={isDisabled}>create profile</button>              
            </form>
          </div>
      </div>       
    </>
  );
}

export default RegisterForm;