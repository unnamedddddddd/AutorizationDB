import { API_BASE_URL } from "../config";

const forgotPassword = async (login, newPassword) => {
  const response = await fetch(`${API_BASE_URL}/api/forgotPassword`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({login, newPassword})
  })
  const data = await response.json();
  
  if (data.success) {
    alert('Пароль успешно обновлен');
  } else {
    alert(`Ошибка ${data.message}`)
  }
  return data.success;
}

export default forgotPassword;