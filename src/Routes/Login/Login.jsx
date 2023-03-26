import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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

    // Navigtion for redirect
    const Navigate = useNavigate()

    // axios API call URL
    const URL = 'http://localhost/API/data/user/login.php';

    // making axios call to API
    const handleSubmit = () => {
        if(username === '' || pwd === ''){
            // alert('Please Fill out the empty fields')
            swal({
                title: "Account Alert!",
                text: "Please Fill out the empty fields",
                icon: "error",
            });
        }else{
            // alert('This page will load soon...')
            axios.post(URL, data)
            .then(res => {
                if(res.data.status !== false && res.data.message === "Login Success"){
                    // redirect to dashboard
                    console.log(res.data);
                    Navigate('/dash', res.data);
                }else{
                    swal({
                        title: "Account Alert!",
                        text: res.data.message,
                        icon: "error",
                    });
                }
            })
        }

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
                <p><Link to={'/'}>&larr; Home</Link></p>
                    <div className="brand-wrapper">
                        <img src={img} alt="logo" className="logo" />
                        <p>FundMeNaija</p>
                    </div>

                    <div className="form-cont">
                        <h4 className="login-card-description">Sign into your account</h4>
                        <form>
                            <input type="text" name="username" id="" onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' required={true} />
                            <input type="password" name="username" id="" onChange={(e) => setPwd(e.target.value)} placeholder='Enter Password' required={true} />

                            {/* <div class="g-recaptcha" data-sitekey="6LfrfKojAAAAAODoGvue1lDe1LUngjxC-ys45BHd" className="form-control"></div> */}

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