import React from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import '../../styles/Login.css'

const Login = () => {
  return (
    <div className="login-section">
      <div className="login-section-left-content">
        <section>
          <h4 className="login-header-text">PEERCOVER</h4>
          <p className="login-header-paragraph">Car</p>
          <p className="login-header-Insurance-text">Insurance</p>
          <p className="login-header-prices">Prices from</p>
          <p className="login-header-paragraph-price">N10,000</p>
        </section>
      </div>
      <section className="login-section-container">
        <div className="login-section-details">
          <h1>WELCOME BACK</h1>
          <p className="login-section-input-text">
            Input your details to proceed
          </p>
          <Input placeholder="Email Address" className="login-input" />
          <Input placeholder="Password" className="login-input" />
          <div className="login-section-forgot-password">
            <p>Forgot Password?</p>
          </div>
          <button className="login-section-button">Log In</button>
        </div>
      </section>
    </div>
  )
}

export default Login
