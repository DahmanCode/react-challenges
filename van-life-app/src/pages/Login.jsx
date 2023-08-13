import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(loginFormData)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value, 
    }))
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign in</h1>
        <div className="input-box">
          <input
            name="email"
            onChange={handleChange}
            type="text"
            // placeholder="Email address"
            value={loginFormData.email}
            required="required"
            autoComplete="off"
          />
          <span>Email</span> 
          <i></i> 
        </div>
        <div className="input-box">
          <input
            name="password"
            onChange={handleChange}
            type="password"
            // placeholder="Password"
            value={loginFormData.password}
            required="required"
          />
          <span>Password</span>  
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <button>Log in</button>
      </form>
    </div>
  )
}
