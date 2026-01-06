import { API_BASE_URL } from "../config"

const DoneTask = async (taskId, token) => {

  const response = await fetch(`${API_BASE_URL}/api/todo/done`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({taskId})
  });
  const data = await response.json();
  
  return data;
} 

export default DoneTask;