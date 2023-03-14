import React from 'react'
import { FaBriefcase, FaDonate, FaHandsHelping } from 'react-icons/fa'
import './Counter.css'

const Counter = () => {
  return (
    <div className="counter">
        <div className="counter-single">
            <h1>25</h1>
            <p><i><FaBriefcase/></i>Projects Funded</p>
        </div>
        <div className="counter-single">
            <h1>₦101,320</h1>
            <p><i><FaDonate/></i>Total Donation</p>
        </div>
        <div className="counter-single">
            <h1>₦67,300</h1>
            <p><i><FaHandsHelping/></i>Paid Out</p>
        </div>
    </div>
  )
}

export default Counter