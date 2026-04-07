import React, { useState } from 'react'
import { Link } from 'react-router'
import "../style/form.scss"

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' id='username' placeholder='Enter username'/>
                <input type="text" name='email' id='email' placeholder='Enter email'/>
                <input type="text" name='password' id='password' placeholder='Enter password'/>
                <button>Register</button>
            </form>
            <p>Already have an accout ? <Link to={"/login"}>Login to account.</Link></p>
        </div>
    </main>
  )
}

export default Register
