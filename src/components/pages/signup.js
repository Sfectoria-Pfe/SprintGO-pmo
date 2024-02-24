import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
import Navbar from '../NavBar/Navbar';
const Signup = () => {
  return (
    <div>
      <Navbar />
   
    <div className="container">
      <div className="form">
        <form action="" method="post">
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" name="email" autoComplete="off" placeholder="enter a valid email" required /><br /><br />

          <label htmlFor="username">Username</label><br />
          <input type="text" id="username" name="username" autoComplete="off" placeholder="developer" required /><br /><br />

          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" name="password" required /><br /><br />

          <label htmlFor="password2">Confirm Password</label><br />
          <input type="password" id="password2" name="password2" required /><br /><br />

          <input type="submit" value="SignUp" id="log" /><br /><br />

          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
