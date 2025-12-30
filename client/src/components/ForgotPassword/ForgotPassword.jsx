import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './ForgotPassword.css'
import forgotPassword from "../../scripts/ForgotPassword";

const ForgotPassword = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();
  
  const isDisabled = !login.trim() || !password.trim() || !repeatPassword.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      const success = await forgotPassword(login, password);
      if (success) {
        navigate('/login');
      }
    } else {
      alert('Пароли не совпадают');
    }
  }

  return (
    <>
      <div className="form-container-forgot" >
        <form className="form-forgot" onSubmit={handleSubmit}>
          <div className="login-container">
            <label htmlFor="password" className="label-login">Login</label>
            <input 
              type="text" 
              className="login" 
              placeholder="Login"
              onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password" className="label-password">Password</label>
            <input 
              type="password" 
              className="password" 
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="repeatPassword-container">
            <label htmlFor="repeat-password" className="label-password">Repeat password</label>
            <input 
              type="password" 
              className="repeat-password" 
              placeholder="Repeat password"
              onChange={e => setRepeatPassword(e.target.value)}
            />
          </div>
          <button type="submit" className='confirm-button' disabled={isDisabled}>Confirm password</button>
        </form>
      </div>
      </>
  );
}

export default ForgotPassword;