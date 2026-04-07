import React, { useState } from 'react'
import '../style/form.scss'
import { Link, useNavigate } from 'react-router'
import { Navigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { loading, handleRegister } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleRegister({ username, email, password })
    navigate('/')
  }

  return (
    <main className='register-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input 
          onInput={(e)=>{setUsername(e.target.value)}}
          className='input' 
          type="text" 
          name='username' 
          id='username'
          placeholder='Enter name'
          />
          <input 
          onInput={(e)=>{setEmail(e.target.value)}}
          className='input' 
          type="text" 
          name='email' 
          id='email'
          placeholder='Enter email'
          />
          <input 
          onInput={(e)=>{setPassword(e.target.value)}}
          className='input' 
          type="text" 
          name='password' 
          id='password'
          placeholder='Enter password'
          />
          <button className='button'>Register</button>
        </form>
        <p>Already have an account? <Link to='/login'>Login here</Link></p>
      </div>
    </main>
  )
}

export default Register
