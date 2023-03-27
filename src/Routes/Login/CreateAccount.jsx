import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'
import img from '../../assets/images/Logo3.png'
import test from '../../assets/images/hero-bg.jpeg'

function CreateAccount() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [image, setImage] = useState('')
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [cpwd, setCpwd] = useState('')

    // form data
    const data = {
        firstname,
        lastname,
        number,
        email,
        id,
        image,
        username,
        pwd,
        cpwd
    }

    // Navigtion for redirect
    const Navigate = useNavigate()

    // axios API call URL
    const URL = 'https://fundmenaija.com/API/data/user/create.php';

    // submit form here
    const handleSubmit = () => {
        if(username === '' || firstname === '' || lastname === '' || number === '' || email === '' || id === '' || image === '' || pwd === '' || cpwd === ''){
            // alert('Please Fill out the empty fields')
            swal({
                title: "Account Alert!",
                text: "Please Fill out the empty fields",
                icon: "error",
            });
        }else if(pwd !== cpwd){
            // alert('Password mismatch')
            swal({
                title: "Account Alert!",
                text: "Password mismatch",
                icon: "error",
            });
        }else{
            axios.post(URL, data)
            .then(res => {
                if(res.data.status !== false && res.data.message === "Activate Account"){
                    // redirect to deposit-activate-account
                    console.log(res.data);
                    Navigate('/activate_account', res.data);
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
    <div>
        {/* <Nav /> */}

        <div className="main-login">
            <div className="login-card">
                <div className="login-img-cont">
                    <img src={test} alt="login" className="login-card-img" />
                </div>
                <div className="login-form-cont">
                    <p><Link to={'/'}>&larr; home</Link></p>
                    <div className="brand-wrapper">
                        <img src={img} alt="logo" className="logo" />
                        <p>FundMeNaija</p>
                    </div>
                    <div className="form-cont">
                        <center><h4 className="login-card-description">Create Account</h4></center>
                        <form encType='multipart/form-data'>
                            <input type="text" onChange={(e) => setFirstname(e.target.value)} name="firstname" placeholder='First Name' required/>
                            <input type="text" onChange={(e) => setLastname(e.target.value)} name="lastname" placeholder='Last Name' required/>
                            <input type="tel" onChange={(e) => setNumber(e.target.value)} name="mobile" placeholder='Mobile Number' required/>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Email Address' required/>
                            <select defaultValue={'default'} onChange={(e) => setId(e.target.value)} required>
                                <option value='default'>Select Document To Upload</option>
                                <option value='NIN Document'>NIN Document</option>
                                <option value='Voters card'>Voters card</option>
                                <option value='Driver License'>Driver License</option>
                                <option value='International Password'>International Password</option>
                            </select>
                            <input type="file" accept='image/png,jpg,jpeg' onChange={(e) => setImage(e.target.value)} required/>
                            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} placeholder='Choose Username' required/>
                            <input type="password" onChange={(e) => setPwd(e.target.value)} name="password" placeholder='Enter Password' required/>
                            <input type="password" onChange={(e) => setCpwd(e.target.value)} name="Cpwd" placeholder='Confirm Password' required/>
                            <input type="button" onClick={handleSubmit} value="Sign Up" id='login-btn'/>
                        </form>

                        {/* <p><Link to={'/passwordreset'} className="forgot-password-link">Forgot password?</Link></p> */}
                        <p className="login-card-footer-text">Already have an account? <Link to={'/login'} className="text-reset">Sign in here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount