import React from 'react'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { FaRegUserCircle, FaWallet, FaRegCheckCircle, FaRegCreditCard } from 'react-icons/fa'
import { BiTransfer } from 'react-icons/bi'
import { GiExitDoor } from 'react-icons/gi'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard-cont">
            <aside className='side-nav'>
                <h1>FundMeNaija</h1>
                <ul>
                    <li><BsFillGrid1X2Fill/>Dashboard</li>
                    <li><FaWallet/>Wallet</li>
                    <li><BiTransfer/>Transfer</li>
                    <li><FaRegUserCircle/>Customer Acounts</li>
                    <li><FaRegCheckCircle/>Verify Acount</li>
                    <li><FaRegCreditCard/>Cash Requests</li>
                    <li><GiExitDoor/>Logout</li>
                </ul>
            </aside>
        </div>
    </div>
  )
}

export default Dashboard