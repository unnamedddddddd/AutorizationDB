import { useState } from "react";

const InputPassword = ({ 
  id,
  name,
  value,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return(
    <>
      <div className="password-wrapper">
        <input 
          type={showPassword ? 'text' : "password" } 
          id={id} 
          name={name} 
          autoComplete="current-password" 
          placeholder="Password"
          value={value}
          onChange={onChange}
        />
        <button 
          type="button" 
          className="hidePassword" 
          onClick={() => setShowPassword(!showPassword)}
          title={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >{showPassword ? '👁️' : '🙈' }
        </button>
      </div>
    </>
  );
}

export default InputPassword;