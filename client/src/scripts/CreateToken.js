import { API_BASE_URL } from "../config";

const CreateToken = async (token) => {
  console.log(token);
  const response = await fetch(`${API_BASE_URL}/api/tokenRemember`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({token})
  });
  const data = await response.json();
  
  return data;
}

export default CreateToken;