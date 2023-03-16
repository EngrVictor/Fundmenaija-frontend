import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './fundRaiser.css'
import { Link } from 'react-router-dom';
import cardImg from '../../assets/images/Donate_img.jpeg'

function FundRaisers() {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        axios("http://localhost/API/data/post/read.php")
        .then((res) => setIssues(res.data));
    }, []);

    // console.log(issues.length)
  return (
    <section className="content" id="services">
        <div className="container position-relative">
            <div className="heading animate-top mx-lg-4"> 
                <h2>Fund Raisers</h2>
                <p>Donate Fund to your Favourite Raisers</p>
            </div>
            <div className="content">
                <div className="slider owl-carousel shadow-md-sm p-lg-4">
                    {(issues.length > 0) &&
                        <div className="card shadow-sm" style={{ minHeight: "420px", maxHeight: "420px", height: "420px", border: "0px", borderRadius: "10px" }}>
                            <div className="img">
                                <img src={cardImg} alt="error image" />
                            </div>
                            <div className="content" style={{ position: "relative" }}>
                                <div className="title">NO Fund Raisers Yet</div>
                                <p>Create an Account and deposit money to start raising fund...</p>
                                <div className="btn" style={{ position: "absolute", bottom: "-50px" }}>
                                    <Link href="/login" className="btn btn-danger">Start Now</Link>
                                </div>
                            </div>
                        </div>
                    }
                {/* {
                    issues.forEach(issue => {
                        <div className="card shadow-sm" style={{ minHeight: "420px", maxHeight: "420px", height: "420px", border: "0px", borderRadius: "10px" }}>
                            <div className="img">
                                <img src={issue.avatar} alt="issue image" />
                            </div>
                            <div className="content" style={{ position: "relative" }}>
                                <div className="title">{issue.issue_title}</div>
                                <p>{issue.issue_body}...</p>
                                <div className="btn" style={{ position: "absolute", bottom: "-50px" }}>
                                    <a href="./auth/donate.php?issue_id=<?php echo $post['id']; ?>#donation<?php echo $post['id']; ?>" className="btn btn-danger">Donate Fund</a>
                                </div>
                            </div>
                        </div>
                    })
                } */}
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default FundRaisers