import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'
import img from '../../assets/images/Logo3.png'
import loginImg from '../../assets/images/loginImage.jpeg'
import axios from 'axios';


function Login() {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')

    const data = {
        username,
        pwd
    }

    // making axios call to API
    const handleSubmit = () => {
        if(username === '' || pwd === ''){
            alert('Please Fill out the empty fields')
        }

        alert('This page will load soon...')
        // axios.post('', userData)
        // .then(res => console.log(res.data))
    }

  return (
    <>
        {/* <Nav /> */}
        <div className="main-login">
            <div className="login-card">
                <div className="login-img-cont">
                    <img src={loginImg} alt="login" className="login-card-img" />
                </div>
                <div className="login-form-cont">
                <p><Link to={'/'}>&larr; home</Link></p>
                    <div className="brand-wrapper">
                        <img src={img} alt="logo" className="logo" />
                        <p>FundMeNaija</p>
                    </div>

                    <div className="form-cont">
                        <h4 className="login-card-description">Sign into your account</h4>
                        <form>
                            <input type="text" name="username" id="" onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' required/>
                            <input type="password" name="username" id="" onChange={(e) => setPwd(e.target.value)} placeholder='Enter Password' required/>
                            <input type="button" onClick={handleSubmit} value="Sign In" id='login-btn'/>
                        </form>

                        <p><Link to={'/passwordreset'} className="forgot-password-link">Forgot password?</Link></p>
                        <p className="login-card-footer-text">Don't have an account? 
                            <Link to={'/account'} className="text-reset">Register here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login   