import './Register.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate= useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewpassword] = useState('');


  const register = async (e)=>{
    e.preventDefault();
    try{
      const user= await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
      navigate('/login');
    }catch(error){
      alert(error.message)
    }
  }

  return (
  <div className='register'>
  <img
        className="register__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt=""
  />
   <div className='register__container'>
   <h1>Create Account</h1>
   <form>
        <h5>Name</h5>
        <input type="text" value={name} onChange={e => {setName(e.target.value)}} />
        <h5>E-mail</h5>
        <input type="text" value={email} onChange={e => {setEmail(e.target.value)}} />
        <h5>Password</h5>
        <input type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
        <h5>Re-enter Password</h5>
        <input type="password" value={newpassword} onChange={e => {setNewpassword(e.target.value)}}/>
        <button onClick={register} type="submit" className="register__signInButton">
        Create your Amazon account
        </button>
        </form>

       <div className="register__form_footer">
        <p>
        By creating an account, you agree to Amazon's Conditions of Use
        and Privacy Notice.
        </p>
              
      <p>
       Already have an account ? 
       <Link to='/login'>
      <span>Sign-In</span>
      </Link>
     </p>
             
  </div>
  </div>
  </div>
  )
}

export default Register