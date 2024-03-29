import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <Nav />
    <div className='contact'>
        <div className='contact-left'>
            <h5>Lagos, Nigeria</h5>
            <h5>contact.fundmenaija@gmail.com</h5>
            <h5>contact@fundmenaija.com</h5>
        </div>
        <div className='contact-right'>
            <form>
                <div className='form-child'>
                    <div className='form-grp'>
                        <label>Name</label>
                        <input type="text" name="" id="" placeholder='Enter your full name' />
                    </div>
                    <div className='form-grp'>
                        <label>Company</label>
                        <input type="text" name="" id="" placeholder='Enter your company name if any' />
                    </div>
                </div>
                <div className='form-child'>
                    <div className='form-grp'>
                        <label>Email Address</label>
                        <input type="email" name="" id="" placeholder='Enter your email address' />
                    </div>
                    <div className='form-grp'>
                        <label>Phone Number</label>
                        <input type="tel" name="" id="" placeholder='Enter your Phone Number'/>
                    </div>
                </div>
                <input type="submit" value="Contact" />
            </form>
        </div>
        
    </div>
    <Footer />
    </>
  )
}

export default Contact