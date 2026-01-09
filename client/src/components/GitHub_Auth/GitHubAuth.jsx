import { useEffect } from "react";
import createUserFromGutHub from "../../scripts/CreateUserFromGitHub";
import {useNavigate } from 'react-router-dom'

const CreateUserFromGitHub = () => {
  const navigate = useNavigate();

  const CreateFromGitHub = async () => {
    const urlSearch = new URLSearchParams(window.location.search)
    const code = urlSearch.get('code')
    if (code) {
      const result = await createUserFromGutHub(code);
      if (result.success) {
        console.table(result)
        localStorage.setItem('token', result.token);
        localStorage.setItem('userId', result.user.id);
        navigate('/todo')
      } else {
        console.error(`${result.message}`)
        navigate('/login')
      }
    } else {
    console.error(`Нет code: ${code}`)
    navigate('/login')
    }
  }

  useEffect(() => {
    CreateFromGitHub();
  },[]);
}

export default CreateUserFromGitHub;