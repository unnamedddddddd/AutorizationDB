import { API_BASE_URL } from "../config";

const EditTask = async (taskEdit) => {
  const response = await fetch(`${API_BASE_URL}/api/todo/edit`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(taskEdit)
  });
  const data = await response.json();
  
  return data;
}

export default EditTask;