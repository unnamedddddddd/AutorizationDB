async function getUserInfo(login, password) {

  const response = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({login, password})
  })
  
  const data = await response.json();
  if (data.success) {
    alert(`Вход выполнен ${login} `)
  } else {
    alert(`Ошибка ${data.message}`)
  }
  return data.success;
}

export default getUserInfo;