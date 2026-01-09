import { API_BASE_URL } from "../config"

const createUserFromGutHub = async (code) => {
  const response = await fetch(`${API_BASE_URL}/api/login/github`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code })
  })

  const data = await response.json();

  return data;
}

export default createUserFromGutHub;