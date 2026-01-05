import { API_BASE_URL } from "../config";

async function DeleteTask(taskId, token) {
  const response = await fetch(`${API_BASE_URL}/api/todo/delete/${taskId}`, {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${token}`
    }
  });
  
  const data = await response.json();
  if (!data.success) {
    alert(`Ошибка: ${data.message}`)
  }
  return data;
}

export default DeleteTask; 