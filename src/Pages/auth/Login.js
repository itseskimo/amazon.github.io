import React,{useState} from "react";
import "./Login.css";
import {Link, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase'

const Login = () => {
  const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try{
      const user= await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
      if(auth){
        navigate('/');
      }
    }catch(error){
      alert(error.message)
    }
  }
  

  return (
    <div className="login">
      <Link to='/'>
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt=""
      />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
        <h5>E-mail</h5>
        <input type="text" value={email} onChange={e => {setEmail(e.target.value)}} />
        <h5>Password</h5>
        <input type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
        <button onClick={signIn} type="submit" className="login__signInButton">
          Sign In
        </button>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Link to='/register'>
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
        </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
