import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import './About.css'

const About = () => {
  return (
    <>
      <Nav />
      <div className='about'>
          <div className="about-cont">
              <h1><span className='head'>About</span> Us</h1>
              <p>Fundmenaija is global community designed to provide solutions on funding for everyone with a genuine need globally. Fundmenaija is a unique Crowdfunding market place that stands on efficiency, global best practice and transparency, Everyone is welcomed to Fundmenaija as a fundraiser or a donor, both as individuals and organization, we will server you just by creating a fundraiser wallet and get approved in seconds.</p>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default About