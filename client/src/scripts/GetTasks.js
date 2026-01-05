import { API_BASE_URL } from "../config";

async function getUserTasks(userId, token) {
  const response = await fetch(`${API_BASE_URL}/api/todo/${userId}`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${token}`
    }
  });
  
  const data = await response.json();
  return data;
}
export default getUserTasks; 