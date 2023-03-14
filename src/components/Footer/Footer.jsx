import React, { useEffect } from 'react'
import './Footer.css'
import logo from '../../assets/images/Logo3.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    // useEffect(() => {
    //     $(".slider").owlCarousel({
    //         loop: true,
    //         autoplay: true,
    //         autoplayTimeout: 5000,
    //         autoplayHoverPause: true
    //     });
    // }, []);

    // Scroll reveal
    // useEffect(() => {
    //     window.sr = ScrollReveal();

    //     sr.reveal('.animate-left', {
    //         origin: 'left',
    //         duration: 1000,
    //         distance: '25rem',
    //         delay: 300
    //     });

    //     sr.reveal('.animate-right', {
    //         origin: 'right',
    //         duration: 1000,
    //         distance: '25rem',
    //         delay: 600
    //     });

    //     sr.reveal('.animate-top', {
    //         origin: 'top',
    //         duration: 1000,
    //         distance: '25rem',
    //         delay: 600
    //     });

    //     sr.reveal('.animate-bottom', {
    //         origin: 'bottom',
    //         duration: 1000,
    //         distance: '25rem',
    //         delay: 600
    //     });
    // }, [])
  return (
    <>
    <footer  style={{ background: "#1e1e26", display: "flex", justifyContent: "center" }}>
        <div className="container px-4 d-lg-flex justify-content-between align-items-baseline text-white">
            <span>
                <div className="d-flex align-items-center my-lg-0 my-5">
                    <div style={{ width: "70px", height: "50px", position: "relative" }}>
                        <img src={logo} alt="Logo" className="img-fluid" style={{ width: "100%", height: "100%", position: "absolute" }} />
                    </div>
                    <div className="logo h6 text-white">FUNDMENAIJA</div>
                </div>
                <div className="d-flex social-icons my-4">
                    <Link to={'https://www.instagram.com/invites/contact/?i=piedy677etuh&utm_content=66n7bqr'} className='nav-link text-white'>
                        <FaInstagram />
                    </Link>
                    <Link to={'https://www.facebook.com'} className='nav-link text-white'>
                        <FaFacebook />
                    </Link>
                    <Link to={'https://www.twitter.com/'} className='nav-link text-white'>
                        <FaTwitter />
                    </Link>
                    <Link to={'https://www.linkedin.com/'} className='nav-link text-white'>
                        <FaLinkedin />
                    </Link>
                </div>
            </span>
            <ul className="list-unstyled my-5 d-lg-flex">
                <li className='my-2'>
                    <Link to={'/'} className='nav-link text-white'>Home</Link>
                </li>
                <li className='my-2'>
                    <Link to={'/about'} className='nav-link text-white'>About</Link>
                </li>
                <li className='my-2'>
                    <Link to={'/contact'} className='nav-link text-white'>Contact</Link>
                </li>
                <li className='my-2'>
                    <Link to={'/donate'} className='nav-link text-white'>Donate</Link>
                </li>
            </ul>
    
            <ul className="list-unstyled my-5">
                <li><Link to={'/'} className='nav-link text-white'>Privacy policy</Link></li>
                <li><Link to={'/'} className='nav-link text-white'>Help</Link></li>
            </ul>
        </div>
    </footer>

    <Link href="#" className="back-to-top nav-link rounded-circle d-flex align-items-center justify-content-center h3"  title="Back-To-Top"><i className="fa fa-angle-up"></i>
    </Link>
    {/* <div id="preloader"></div> */}

    </>
  )
}

export default Footer