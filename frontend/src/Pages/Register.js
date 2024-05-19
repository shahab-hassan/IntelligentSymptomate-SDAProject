import React from 'react'
import {Link} from "react-router-dom"

function Register() {
  return (
    <div className='registerDiv'>

      <section>

        <div className="registerImgDiv">
          <img src="./images/register.svg" alt="Error" />
        </div>

        <div className="registerBox">

          <div className="headingDiv">
            <h1 className="heading">Register</h1>
          </div>

          <div className="registerForm">

            <div className='fullName'>

              <div className='inputField'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" placeholder='Enter first name' />
              </div>

              <div className='inputField'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" placeholder='Enter last name' />
              </div>

            </div>

            <div className='inputField'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Enter email' />
              </div>

            <div className='inputField'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Enter password' />
            </div>

            <div className='inputField'>
                <label htmlFor="confirmPass">Re-Enter Password</label>
                <input type="password" name="confirmPass" placeholder='Enter password again' />
            </div>

            <div>
                <input type="submit" value="Sign Up Free" className='btn' />
            </div>

            <div>
                <Link className='btnSecondary'><img src="./images/google.png" alt="Error" />Continue with Google</Link>
            </div>

            <div>
                <Link className='btnSecondary'><img src="./images/fb.png" alt="Error" />Continue with Facebook</Link>
            </div>

            <div className='loginBtnDiv'>
              <Link to="/login" className='loginBtn'>Have an Account? <span>Login</span></Link>
            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default Register