import{ React ,useState} from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const[email,setEmail] = useState('')
  const  [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    console.log(email, password)
    await login (email, password)
  }
  return (
    <div>
      
    <div className="container">
      
      <div className="form" onSubmit={handleSubmit}>
        <form action="">
          <label htmlFor="user"><AiOutlineMail /> Email</label><br />
          <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} id="email" name="email" autoComplete="off" required /><br /><br />

          <label htmlFor="pass"><RiLockPasswordLine /> Password</label><br />
          <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" required /><br /><br />

          <input type="submit" value="Login" disabled={isLoading} id="log" /><br /><br />

          <p>Don't have an account? <Link to="/signup">Signup</Link></p>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
