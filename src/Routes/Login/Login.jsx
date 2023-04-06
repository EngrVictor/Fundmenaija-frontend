import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import img from '../../assets/images/Logo3.png'
import loginImg from '../../assets/images/loginImage.jpeg'
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [value, setValue] = useState('Sign in')

    const data = {
        username,
        pwd
    }

    const win = window.sessionStorage
    // win.setItem('username', '')
    // console.log(win.getItem('username'))

    // check if user is alreeady logged in
    useEffect(() => {
        if(win.getItem('username') !== '' && win.getItem('accountNo') !== ''){

            Navigate('/dash', {});
            // console.log(win.getItem('username'))
        }
    }, [])

    // Navigtion for redirect
    const Navigate = useNavigate()

    // axios API call URL
    // const URL = 'https://fundmenaija.com/API/data/user/login.php'; // production
    // const URL = 'http://localhost/API/data/user/login.php'; // development

    const URL = process.env.NODE_ENV === 'Production' ? 'https://fundmenaija.com/API/data/user/login.php' : 'http://localhost/API/data/user/login.php';

    // console.log(URL)

    // making axios call to API
    const handleSubmit = () => {
        setValue('AUTHENTICATING...')
        setDisabled(true)
        if(username === '' || pwd === ''){
            // alert('Please Fill out the empty fields')
            swal({
                title: "Alert!",
                text: "Please Fill out the empty fields",
                icon: "error",
            });
            setValue('Sign in')
            setDisabled(false)
        }else{
            // alert('This page will load soon...')
            axios.post(URL, data)
            .then(res => {
                if(res.data.status !== false && res.data.message === "Login Success"){
                    // create session && redirect to dashboard
                    // console.log(res.data);
                    
                    win.setItem('username', res.data.username)
                    win.setItem('accountNo', res.data.accountNo)
                    win.setItem('user_id', res.data.user_id)
                    
                    Navigate('/dash', res.data);
                }else{
                    swal({
                        title: "Account Alert!",
                        text: res.data.message,
                        icon: "error",
                    });
                    // try again
                    setValue('Sign in')
                    setDisabled(false)
                }
            })
            .catch((error) => {
                swal({
                    title: "Connection Failed",
                    text: error.message,
                    icon: "error",
                });
                setValue('Sign in')
                setDisabled(false)
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
                            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' required={true} />
                            <input type="password" name="username" onChange={(e) => setPwd(e.target.value)} placeholder='Enter Password' required={true} />
                            {/* implement reCaptcha */}

                            <input type="button" style={{ opacity: disabled && "0.6" }} onClick={handleSubmit} value={value} id='login-btn' disabled={disabled} />
                        </form>

                        <p><Link to={'/passwordreset'} className="forgot-password-link">Forgot password?</Link></p>
                        <p className="login-card-footer-text">Don't have an account? <Link to={'/account'} className="text-reset">Register here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

const disableBtn = {
    opacity: "0.6"
}

export default Login   