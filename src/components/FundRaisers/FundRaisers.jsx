import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './fundRaiser'

function FundRaisers() {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        axios("http://localhost/API/data/post/read.php")
        .then((res) => setIssues(res.data));
    }, []);
  return (
    <section className="content" id="services">
        <div className="container">
            <div className="heading animate-top mx-lg-4"> 
                <h2>Fund Raisers</h2>
                <p>Donate Fund to your Favourite Raisers</p>
            </div>
            <div className="content">
                <div className="slider owl-carousel shadow-md-sm p-lg-4">
                {issues && 
                    <div className="card shadow-sm" style="min-height: 420px; max-height: 420px; height: 420px; border: 0px; border-radius: 10px">
                            <div className="img">
                                <img src={issues.avatar} alt="issue image" />
                            </div>
                            <div className="content" style="position: relative;">
                                <div className="title">{issues.title}</div>
                                <p>{issues.body}...</p>
                                <div className="btn" style="position: absolute; bottom: -50px;">
                                    <a href="./auth/donate.php?issue_id=<?php echo $post['id']; ?>#donation<?php echo $post['id']; ?>" className="btn btn-danger">Donate Fund</a>
                                </div>
                            </div>
                        </div>
                }
                {/* Else */}
                        <div className="card shadow-sm" style="min-height: 420px; max-height: 420px; height: 420px; border: 0px; border-radius: 10px">
                            <div className="img">
                                <img src="./assets/img/about.jpg" alt="error image" />
                            </div>
                            <div className="content" style="position: relative;">
                                <div className="title">NO Fund Raisers Yet</div>
                                <p>Create an Account and deposit money to start raising fund...</p>
                                <div className="btn" style="position: absolute; bottom: -50px;">
                                    <a href="./user/login.php" className="btn btn-danger">Start Now</a>
                                </div>
                            </div>
                        </div>
                    {/* end Else */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FundRaisers