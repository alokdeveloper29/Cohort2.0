import React, { useState } from 'react'
import "../style/form.scss"
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { handleLogin, loading } = useAuth()
    const navigate = useNavigate()

    if(loading){
        return(
            <h1>loading..</h1>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        handleLogin(username, password)
        .then(res => {
            console.log(res)
            navigate("/")
        })
    }

  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input  
                onInput={(e)=>{setUsername(e.target.value)}}
                type="text" 
                name='username' 
                id='username' 
                placeholder='Enter username'
                />
                <input 
                onInput={(e)=>{setPassword(e.target.value)}}
                type="text" 
                name='password' 
                id='password' p
                placeholder='Enter password'
                />
                <button>Login</button>
            </form>
            <p>Don't have an accout ? <Link to={"/register"}>Create One</Link></p>
        </div>
    </main>
  )
} 

export default Login
