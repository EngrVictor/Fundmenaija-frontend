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
          </div>
      </div>
      <Footer />
    </>
  )
}

export default About