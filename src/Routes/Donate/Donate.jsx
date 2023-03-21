import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import img from '../../uploads/church.jpg'
import img2 from '../../uploads/school.jpeg'

const Donate = () => {
  // Fetch All issues from DB

  return (
    <>
      <Nav />
        <br />
        <br />
        <br />
        <section className="container Fundraiser p-4 bg-white my-4 shadow">
            <div className="row justify-content-between">
                <div className='col-md-6 d-flex justify-content-center1 align-items-center'>
                    <div className='fundraiser-img'>  
                        <picture>
                            <img src={img} alt="profile image" 
                                className="img-fluid mx-lg-0 mx-auto" 
                            />
                        </picture>
                    </div>
                    <div className="mx-lg-4 mt-lg-0 mt-3 mx-3" id='<?php echo "donation".$post["id"]; ?>'>
                        <div className="fundraiser-name col-md-12">
                            <b className='text-capitalize'>cybergate</b>
                    
                            <div className="h5 my-2" style={{ fontWeight: "500" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia esse aspernatur perferendis ut recusandae?
                            </div>
                            <p className='address text-capitalize'> 18/03/2023</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex">
                    <div className='event-img my-2 hidden mx-auto' style={{ transition: "0.5s" }}>
                        <img src={img2} alt="issue_image" className='img-fluid'/>
                    </div>
                    <div className='event-img my-2 mx-lg-2 hidden mx-auto' style={{ transition: "0.8s" }}>
                        <img src={img} alt="image" className='img-fluid'/>
                    </div>
                </div>
            </div>
            <div className="description">
                <button className='px-3 my-2 hover' style={{ background: "#f3613c" }}>
                    {/* paystack API call */}
                    <Link href="#" className='nav-link text-white' id="1">Donate Fund</Link> 
                </button>
                <p className='write-up my-2' id='post-id'>post'issue_body'</p>
                <p className='hover cursor'><b className="detailsBtn" id='post-id'>Read</b></p>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Donate