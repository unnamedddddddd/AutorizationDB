import { API_BASE_URL } from "../config";

async function getUserInfo(login, password) {

  const response = await fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({login, password})
  })
  
  const data = await response.json();
   if (data.success) {
    localStorage.setItem('token', data.token);
  } else {
    alert(`Ошибка: ${data.message}`);
  }
   return data;
}

export default getUserInfo; 