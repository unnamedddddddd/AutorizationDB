import { API_BASE_URL } from "../config";

const CreateToken = async (refreshToken) => {
  const response = await fetch(`${API_BASE_URL}/api/tokenRemember`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${refreshToken}`,
    },
  });
  const data = await response.json();
  
  return data;
}

export default CreateToken;