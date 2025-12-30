async function createUser(login, password) {
  const response = await fetch('http://localhost:5000/api/createUser', {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
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