import React, { useEffect } from 'react'
import axios from 'axios';
import './Main.css'
import { BsFillPersonFill } from 'react-icons/bs';
import { FaArrowCircleLeft, FaArrowCircleRight, FaChurch } from 'react-icons/fa';
import { MdSchool, MdAddBusiness, MdLocalHospital } from 'react-icons/md';
// Please stop using absolute Path to reference your images and other assert, its breaking the app.
import headerImg from '../../assets/images/crowdfunding-5210345-4352911.png'
import donate from '../../assets/images/Donate_img.jpeg'

// Importing routes
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import FundRaisers from '../../components/FundRaisers/FundRaisers';
import Chat from '../../components/ChatBot/Chat';

const Main = () => {
    //  useEffect(() => {
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

    // am using axios for my fetch cause its more efficient
    useEffect(() => {
        axios("http://localhost/API/data/post/read.php")
        .then((res) => console.log(res.data));
    }, []);

    
  return (
    <>
    <Nav/>
    <div className="App">
        {/* Create Routes for all this components */}
        <div className='main-body'>
            <div className='img-cont'>
                <img src={headerImg} />
            </div>
            <div className='text-cont'>
                <h1 className='heading'><span>FUND</span> AND GET <span>FUNDED</span></h1>
                <h4 className='paratext'>Fund and raise funds from people globally to support your projects, bills, daily needs and other things from FundMeNaija today</h4>
                <button className='btn-home'>Donate Today</button>
            </div>
        </div>
        <div className='section-1'>
            <div className='text-cont_1'>
                <h1 className='heading_1'>Raising money has never been easy..</h1>
                <p>We provide you with opportunity to dream and see it come to pass by helping you get the needed funding on any project, plans or other basic needs.</p>
                <button className='btn-home'>Get started</button>
            </div>
            <div className='img-cont_1'>
                <img src={donate} alt="donate" />
            </div>
        </div>
        <div className='section-2'>
            <div className='text-cont_2'>
                <h1 className='heading_2'>Who is eligible ?</h1>
                <p>Check who is eligible to raise or donate fund.</p>
                <center><hr></hr></center>
            </div>
            <div className='card-cont'>
                <div className='card-home'>
                    <i><BsFillPersonFill/></i>
                    <h1>Individuals</h1>
                    <p>Individuals Who Are In Need Financially Or Medically</p>
                </div>
                <div className='card-home'>
                    <i><FaChurch/></i>
                    <h1>Churches</h1>
                    <p>Churches For Fund Raising And Offerings</p>
                </div>
                <div className='card-home'>
                    <i><MdSchool/></i>
                    <h1>Schools</h1>
                    <p>Schools For Fund Raising.</p>
                </div>
            </div>
            <div className='card-cont center'>
                <div className='card-home'>
                    <i><MdAddBusiness/></i>
                    <h1>Small Scale Business</h1>
                    <p>For Businesses Investment.</p>
                </div>
                <div className='card-home'>
                    <i><MdLocalHospital/></i>
                    <h1>Hospitals</h1>
                    <p>For Medical Donations Like Blood, Body Organ Donors And Volunteers.</p>
                </div>
            </div>
        </div>
        <div className='section-3'>
            <div className='text-cont_3'>
                <div className='top'><div className='num'>01</div><h2 className='heading_3'>About Fundmenaija</h2></div>
                <p>Fundmenaija is global community designed to provide solutions on funding for everyone with a genuine need globally.</p>
            </div>
            <div className='text-cont_3'>
                <div className='top'><div className='num'>02</div><h2 className='heading_3'>How Fundmenaija works</h2></div>
                <p>Everyone is welcomed to Fundmenaija as a fundraiser or a donor, both as individuals and organization, we will server you just by creating a fundraiser wallet and get approved in seconds.</p>
            </div>
            <div className='text-cont_3'>
                <div className='top'><div className='num'>03</div><h2 className='heading_3'>Why you should Choose Fundmenaija</h2></div>
                <p>Fundmenaija is a unique Crowdfunding market place that stands on efficiency, global best practice and transparency</p>
            </div>
        </div>
        <section className="section-4">
            <div className="top-fund">
                <div>
                    <p>Fund Raisers</p>
                    <h2>Donate Funds to Fundraisers in your community</h2>
                </div>
                <div className="btn-cont">
                    <i><FaArrowCircleLeft/></i>
                    <i><FaArrowCircleRight/></i>
                </div>
            </div>
        {/* fetch fund Raiers from REST-API */}
        {/* carosel here */}
        {/* <FundRaisers />  */}
        <div className="fund-cards">
            <div className="fund-card">
                <img src={headerImg}/>
                <h2>Church Project</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores assumenda expedita repellat illum perspiciatis ipsum error libero fugit numquam sapiente, consequuntur dolor, odit, explicabo quod possimus? Repellat, blanditiis dignissimos?</p>
                <div className="fund-card-foot">
                    <h4>₦23,444 raised</h4>
                    <h4>483 donations</h4>
                </div>
            </div>
            <div className="fund-card">
                <img src={donate}/>
                <h2>Church Project</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores assumenda expedita repellat illum perspiciatis ipsum error libero fugit numquam sapiente, consequuntur dolor, odit, explicabo quod possimus? Repellat, blanditiis dignissimos?</p>
                <div className="fund-card-foot">
                    <h4>₦23,444 raised</h4>
                    <h4>483 donations</h4>
                </div>
            </div>
            <div className="fund-card">
                <img src={headerImg}/>
                <h2>Church Project</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores assumenda expedita repellat illum perspiciatis ipsum error libero fugit numquam sapiente, consequuntur dolor, odit, explicabo quod possimus? Repellat, blanditiis dignissimos?</p>
                <div className="fund-card-foot">
                    <h4>₦23,444 raised</h4>
                    <h4>483 donations</h4>
                </div>
            </div>
        </div>
    </section>
    </div>
    <Chat />
    <Footer/>  
    </>
  )
}

export default Main