import { API_BASE_URL } from "../config";

async function createUser(login, password) {
  const response = await fetch(`${API_BASE_URL}/api/createUser`, {
    method: 'POST',
    headers:{ 
      'Content-Type': 'application/json'},
    body: JSON.stringify({login, password})
  })
  
  const data = await response.json();
  if (data.success) {
    alert(`Пользователь создан ${login} `)
  } else {
    alert(`Ошибка ${data.message}`)
  }
  return data.success;
}

export default createUser;