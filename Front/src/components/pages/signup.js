import {React ,useState} from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import './Style.css'
import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";


const Signup = () => {
  const[email,setEmail] = useState('')
  const  [password, setPassword] = useState('')
  const  [username, setUsername] = useState('')
  const{signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(email, username, password)
    await signup(email, username, password)
  }

  return (
  
    <div>
      
   
    <div className="container">
      <div className="form">
        <form action="" method="post" onSubmit={handleSubmit}>
          <label htmlFor="email" ><AiOutlineMail /> Email</label><br />
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} id="email" name="email" autoComplete="off" placeholder="enter a valid email" required /><br /><br />

          <label htmlFor="username"><FaRegUser /> Username</label><br />
          <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} id="username" name="username" autoComplete="off" placeholder="developer" required /><br /><br />

          <label htmlFor="password"><RiLockPasswordLine /> Password </label><br />
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" name="password" required /><br /><br />

          <label htmlFor="password2"><RiLockPasswordLine />  Confirm Password</label><br />
          <input type="password" id="password2" name="password2" required /><br /><br />

          <input type="submit" value="SignUp" disabled={isLoading} id="log" /><br /><br />

          <p>Already have an account? <Link to="/login">Login</Link></p>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
