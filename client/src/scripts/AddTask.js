import { API_BASE_URL } from "../config";

const AddTask = async (newTask) => {
  const response = await fetch(`${API_BASE_URL}/api/todo`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newTask)
  })

  const data = await response.json();
  if (!data.success) alert(`Ошибка ${data.message}`)
  
  return data;
}

export default AddTask;