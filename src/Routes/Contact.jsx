import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-left'>
            <h3>Lagos, Nigeria</h3>
            <h3>contact.fundmenaija@gmail.com</h3>
            <h3>contact@fundmenaija.com</h3>
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
                <div className="form-grp">
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact