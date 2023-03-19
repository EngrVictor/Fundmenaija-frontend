import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import './login.css'
import img from '../../assets/images/Logo3.png'
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';


function Login() {
    // const [username, setUsername] = useState('')
    // const [pwd, setPwd] = useState('')

    // const userData = () => {
    //     data = {
    //         username,
    //         pwd
    //     }
    // }

  return (
    <>
        <Nav />
        <section className="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div className="container">
                <div style={{ minWidth: '100%'}} className="card login-card w-100">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={img} alt="login" className="login-card-img" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <div className="brand-wrapper">
                                    <img src={img} alt="logo" className="logo" />
                                    <p>FundMeNaija</p>
                                </div>
                                <p className="login-card-description">Sign In</p>
                                <form action="" method="POST">

                                        <p style={{ color: "red" }}></p>

                                    <div className="form-group">
                                        <label htmlFor="username" className="sr-only">Username</label>
                                        <input type="text" name="username" id="Username" className="form-control" placeholder="Username" required />
                                        <p id="alert1" style={{ color: "red" }}></p>
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="password" className="sr-only">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="Password" required />
                                    </div>
                                    <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" value="Login" />
                                </form>
                                <Link to={'/passwordreset'} className="forgot-password-link">Forgot password?</Link>
                                <p className="login-card-footer-text">Don't have an account? <Link to={'/account'} className="text-reset">Register here</Link></p>
                                <nav className="login-card-footer-nav">
                                    <Link to={'/'}>Terms of use.</Link> |
                                    <Link to={'/'}>Privacy policy</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Login   