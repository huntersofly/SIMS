import React from 'react';
import { useNavigate } from 'react-router-dom';
import  "./login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='main'>
        <form>
        <img src="../Images/download-removebg-preview.png" />
        <h3>Login</h3>
        <div class="input-div">
        <i class="glyphicon glyphicon-envelope"></i>
        <input type="email" placeholder="EMAIL" class="gen-input"/>
       </div>
        <div class="input-div">
            <i class="glyphicon glyphicon-briefcase"></i>
        <input type="password" placeholder="*******" class="gen-input"/>
      </div>
      <p class="acc-check" onClick={() => navigate("/register")}>Don't have an account? Register</p>
      <button class="btn-create">Login</button>
    </form>
    </div>
  )
}

export default Login;