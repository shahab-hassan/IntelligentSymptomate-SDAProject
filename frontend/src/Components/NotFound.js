import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notFoundDiv'>
        <div className="notFoundImgDiv">
            <img src="./images/notFound.png" alt="Error" />
        </div>
        <p>OOPS... This page is under development. Come back Later!</p>
        <Link to="/" className="btn">Back To Home</Link>
    </div>
  )
}

export default NotFound