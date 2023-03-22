import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import './Donate.css'

const Donate = () => {
  // Fetch All issues from DB
  const [issues, setIssues] = useState([]);

  useEffect(() => {
      axios("https://fundmenaija.com/API/data/post/read.php")
      .then((res) => {
          // console.log(res.data[0])
          setIssues(res.data)
      });


    //   automate scroll with ID
    //   const id = useRef(null)

    //   const vari = useParams('id')
    //   console.log(vari)
    }, []);


  return (
    <>
        <Nav />
        <br />
        <br />
        <br />
        {issues.length === 0 ? <><h2 style={{ marginBottom: "300px", marginTop: "20px" }}>Loading content...<br />Please wait...</h2><div className="preloader"></div></> : ""}
            {
                issues.map(issue =>
                    <section key={issue.id} className="container Fundraiser p-4 bg-white my-4 shadow">
                    <div className="row justify-content-between">
                        <div className='col-md-6 d-flex justify-content-center'>
                            {/* <div className='fundraiser-img'>  
                                <picture>
                                    <img src={img} alt="profile image" 
                                        className="img-fluid mx-lg-0 mx-auto" 
                                    />
                                </picture>
                            </div> */}
                            <div className="mx-lg-4 mt-lg-0 mt-3 mx-3" id='<?php echo "donation".$post["id"]; ?>'>
                                <div className="fundraiser-name col-md-12">
                                    <h2><b className='text-capitalize h5'>{issue.issue_title}</b></h2>
                            
                                    <div className="h6 my-2" style={{ fontWeight: "400", textAlign: "justify" }}>
                                        {issue.issue_body}
                                    </div>
                                    <p className='address text-capitalize'> {issue.issue_time}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='event-img my-2 hidden mx-auto' style={{ transition: "0.5s" }}>
                                <img src={'./uploads/'+issue.avatar} alt={issue.avatar} className='img-fluid' />
                            </div>
                            <div className='event-img my-2 mx-lg-2 hidden mx-auto' style={{ transition: "0.8s" }}>
                                <img src={'./uploads/'+issue.avatar_2} alt={issue.avatar_2} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <button className='px-3 my-2 hover' style={{ background: "#f3613c" }}>
                            {/* paystack API call */}
                            <Link to={"/make_payment?id="+issue.id} className='btn btn-rounded nav-link text-white' id={issue.id}>Donate Fund</Link> 
                        </button>
                        {/* <p className='write-up my-z2' id='post-id'>post'issue_body'</p>
                        <p className='hover cursor'><b className="detailsBtn" id='post-id'>Read</b></p> */}
                    </div>
                </section>
                )
            }
        <br />
        <Footer />
    </>
  )
}

export default Donate