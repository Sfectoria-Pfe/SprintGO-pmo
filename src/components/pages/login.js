import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
import Navbar from '../NavBar/Navbar';

const Login = () => {
  return (
    <div>
      <Navbar />
    <div className="container">
      
      <div className="form">
        <form action="">
          <label htmlFor="user">Username</label><br />
          <input type="text" id="username" name="username" autoComplete="off" required /><br /><br />

          <label htmlFor="pass">Password</label><br />
          <input type="password" id="password" name="password" required /><br /><br />

          <input type="submit" value="Login" id="log" /><br /><br />

          <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
