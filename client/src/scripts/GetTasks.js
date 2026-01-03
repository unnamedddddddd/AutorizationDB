import { API_BASE_URL } from "../config";

async function getUserTasks(userId) {
  const response = await fetch(`${API_BASE_URL}/api/todo/${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  
  const data = await response.json();
  return data;
}
export default getUserTasks; 