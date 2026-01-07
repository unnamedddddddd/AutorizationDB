import { useEffect, useState } from "react";
import getUserInfo from "../../scripts/LoginForm.js";
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.css';
import InputPassword from "../InputPassword.jsx";
import CreateToken from "../../scripts/CreateToken.js";

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const isDisabled = !login.trim() || !password.trim();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await getUserInfo(login.trim(), password.trim(), rememberMe); 
        if (data.success) {
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('token', data.token);
            console.log(data?.tokenRememberMe);
        } 
        if (rememberMe) {
            localStorage.setItem('refreshToken', data?.tokenRememberMe);
        } else {
            localStorage.removeItem('refreshToken');
        }
        navigate('/todo');
    }

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                console.log(refreshToken);
                if (refreshToken){ 
                    const data = await CreateToken(refreshToken);
                    if (data.success) {
                        localStorage.setItem('token', data.token);
                        navigate('/todo');
                    } else {
                        localStorage.removeItem('refreshToken');
                        localStorage.removeItem('token');
                        localStorage.removeItem('userId');
                        console.error(data.message)
                    }
                }
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };
    checkAuth();
    }, [navigate]);

    return (
        <div className="auth-page">
            <div className="login-form-container">
                <div className="login-userData">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="login-field-group">
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
                        <div className="login-field-group">
                            <label htmlFor="password">Password</label>
                            <InputPassword
                                id="password" 
                                name="password" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <div className="login-avs">
                            <input 
                                type="checkbox" 
                                id="login-cbx" 
                                style={{ display: 'none' }} 
                                checked={rememberMe}
                                onChange={e => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="login-cbx" className="login-check">
                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                    <polyline points="1 9 7 14 15 4"></polyline>
                                </svg>
                            </label>
                            <label htmlFor="login-cbx" className="login-remember-user">Запомнить?</label>
                            <Link 
                                to="/forgotPassword" 
                                style={{
                                    display: 'block',
                                    textAlign: 'right',
                                    color: '#A090B8',
                                    fontSize: '13px',
                                    textDecoration: 'none',
                                    justifyContent: 'flex-end'
                                }}
                                >Забыли пароль?
                            </Link>
                        </div>
                        
                        <button type="submit" className="login-sign-in" disabled={isDisabled}>
                            sign in
                        </button>
                        <div style={{ textAlign: 'right', marginBottom: '15px', marginTop: '5px', }}>
                            <Link 
                                to="/register" 
                                style={{
                                    textAlign: 'right',
                                    color: '#A090B8',
                                    fontSize: '16px',
                                    textDecoration: 'none',
                                    justifyContent: 'flex-end',
                                }}
                                >Нет аккаунта?
                            </Link>
                        </div>
                        
                        <div className="login-line">
                            <hr/>
                        </div>
                        
                        <div className="login-another-entrance">
                            <a href="https://github.com" className="login-social-btn login-github">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                            <a href="https://google.com" className="login-social-btn login-google">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                                </svg>
                            </a>
                        </div>
                    </form> 
                </div>
            </div>
        </div>    
    )
}

export default LoginForm;