import React from 'react'
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className='loginDiv'>

      <section>

        <div className="loginImgDiv">
          <img src="./images/login.svg" alt="Error" />
        </div>

        <div className="loginBox">

          <div className="headingDiv">
            <h1 className="heading">Login</h1>
          </div>

          <div className="loginForm">

            <div className='inputField'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Enter email' />
              </div>

            <div className='inputField'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Enter password' />
            </div>

            <div>
              <Link to="/login" className='loginBtn'>Forgot Password?</Link>
            </div>

            <div>
                <input type="submit" value="Log in" className='btn' />
            </div>

            <div className='registerBtnDiv'>
              <Link to="/register" className='registerBtn'>Don't have an Account? <span>Sign up</span></Link>
            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default Login