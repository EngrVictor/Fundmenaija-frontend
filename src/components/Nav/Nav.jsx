import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Nav.css'
import logo from '../../assets/images/Logo3.png'

const Nav = () => {
  window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        console.log('yes');
        document.querySelector('.nav').style.borderBottom = '2px solid orange'
    } else if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
        document.querySelector('.nav').style.borderBottom = 'none'
    }            
  }

  const mobileNav = () => {
    document.querySelector('.hamburger').classList.toggle('open')

    if (document.querySelector('.hamburger').classList[1] == 'open') {
      document.querySelector('.hamburger-nav').style.display = 'block'
      document.querySelector('.hamburger-nav-list').style.display = 'block'
    } else {
      document.querySelector('.hamburger-nav').style.display = 'none'
      document.querySelector('.hamburger-nav-list').style.display = 'none'
    }
  }

  return (
    <div className='nav'>
        <div className='logo-cont'>
            <img src={logo} alt="" id='logo' />
            <Link to={'/'}><h4 id='logo-text'>Fundmenaija</h4></Link>
        </div>
        <ul className='nav-list'>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/donate'}>Donate</Link></li>
            <li><Link to={'/login'}>Sign In</Link></li>
            <li className='sign-btn'><Link to={'/account'}>Sign Up</Link></li>
        </ul>

        <div className='hamburger' onClick={mobileNav}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>

        <div className='hamburger-nav'>
          <div className="hamburger-nav-list">
            <ul>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/donate'}>Donate</Link></li>
                {/* check if user is already logged in */}
                <li><Link to={'/login'}>Sign In</Link></li>
                <li className='sign-btn'><Link to={'/account'}>Sign Up</Link></li>
            </ul>
          </div>
            
        </div>
    </div>
  )
}

export default Nav