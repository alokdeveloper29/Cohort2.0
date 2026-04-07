import React, { useState } from 'react'
import "../style/form.scss"
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router'

const Login = () => {

  const { loading, handleLogin } = useAuth()
  const navigate = useNavigate()
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleLogin({email, password, username})
    navigate('/')
  }

  return (
    <main className='login-page'>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input 
          onChange={(e)=>{setUsername(e.target.value)}}
          className='input' 
          type="text" 
          name='username' 
          id='username'
          placeholder='Enter name'
          />
          <h4>or</h4>
          <input 
          onChange={(e)=>{setEmail(e.target.value)}}
          className='input' 
          type="text" 
          name='email' 
          id='email'
          placeholder='Enter email'
          />
          <input 
          onChange={(e)=>{setPassword(e.target.value)}}
          className='input' 
          type="text" 
          name='password' 
          id='password'
          placeholder='Enter password'
          />
          <button className='button'>Login</button>
        </form>
        <p>Don't have an account? <Link to='/register'>Register here</Link></p>
      </div>
    </main>
  )
}

export default Login
