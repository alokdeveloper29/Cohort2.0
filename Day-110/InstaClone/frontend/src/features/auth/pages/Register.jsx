import React, { useState } from 'react'
import { Link } from 'react-router'
import "../style/form.scss"
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Register = () => {

    const navigate = useNavigate()
    const { loading, handleRegister } = useAuth()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    if(loading){
        return <h1>loading...</h1>
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        handleRegister(username, email, password)
        .then(res => {
            console.log( res )
            navigate("/")
        })
    }

  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={(e) => {setUsername(e.target.value)}}
                type="text" 
                name='username' 
                id='username' 
                placeholder='Enter username'
                />
                <input 
                onChange={(e) => {setEmail(e.target.value)}}
                type="text" 
                name='email'
                id='email' 
                placeholder='Enter email'
                />
                <input 
                onChange={(e) => {setPassword(e.target.value)}}
                type="text" 
                name='password' 
                id='password' 
                placeholder='Enter password'
                />
                <button>Register</button>
            </form>
            <p>Already have an accout ? <Link to={"/login"}>Login to account.</Link></p>
        </div>
    </main>
  )
}

export default Register
