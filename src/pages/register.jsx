import React from 'react';
import { useNavigate } from 'react-router-dom';
import  "./register.css";

const Register = () => {

  const navigate = useNavigate();

  return (
    <div className='main'>
        <form>
        <img src="../Images/download-removebg-preview.png" />
        <h3>Register</h3>
        <div class="input-div" id="fullname">
         <span><i class="glyphicon glyphicon-user"></i></span>
         <input type="text" placeholder="FULLNAME" class="gen-input"/>
       </div>
        <div class="input-div">
        <i class="glyphicon glyphicon-envelope"></i>
        <input type="email" placeholder="EMAIL" class="gen-input"/>
       </div>
        <div class="input-div">
            <i class="glyphicon glyphicon-briefcase"></i>
        <input type="password" placeholder="*******" class="gen-input"/>
      </div>
      <p class="acc-check" onClick={() => navigate("/login")}>Have an account? Login</p>
      <button class="btn-create">CREATE</button>
    </form>
    </div>
  )
}

export default Register