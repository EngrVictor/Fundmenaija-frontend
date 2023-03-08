import React from 'react'
import './Footer.css'
import logo from '../assets/images/Logo3.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="top-footer">
            <div className="footer-logo">
                <div className='foot-logo-cont'>
                    <a href="index.html"><img src={logo} alt="" id='logo' />
                    <h4 id='logo-text'>fundmenaija</h4></a>  
                </div>
                <p>&copy; 2023 All Rights Reserved</p>
            </div>
            <div>
                <h4 className="foot-heading">COMPANY</h4>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Donate</a></li>
                </ul>
            </div>
            <div>
                <h4 className="foot-heading">RESOURCES</h4>
                <ul>
                    <li><a href="#">Help center</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div>
                <h4 className="foot-heading">CONTACT</h4>
                <ul>
                    <li><a href="#">contact.fundmenaija@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="first">
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Legal Documents</a></li>
                </ul>
            </div>
            <div className="last">
                <ul>
                    <li><a href="#"><i><FaInstagram/></i></a></li>
                    <li><a href="#"><i><FaFacebook/></i></a></li>
                    <li><a href="#"><i><FaLinkedinIn/></i></a></li>
                    <li><a href="#"><i><FaTwitter/></i></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer