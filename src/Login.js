import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  function login() {
    localStorage.setItem('login', true);
    navigate('/');
  }
  useEffect(
    ()=>{
      const login=localStorage.getItem('login')
      if(login){
        navigate('/')
      }
    }
  )
  return (
    <>
      <input type="text" />
      <br />
      <br />
      <input type="text" />
      <br />
      <br />
      <button onClick={() => login()}>Login</button>
    </>
  );
}

export default Login;
