import React from 'react'
import "../style/form.scss"
import { Link } from 'react-router'

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id='username' placeholder="Enter name"/>
                <input type="text" name="password" id='password' placeholder="Enter password"/>
                <input type="text" name="email" id='email' placeholder="Enter email"/>
                <button>Register</button>
            </form>
            <p>Account have an account?<Link to={"/login"}>Login to account.</Link></p>
        </div>
    </main>
  )
}

export default Register
