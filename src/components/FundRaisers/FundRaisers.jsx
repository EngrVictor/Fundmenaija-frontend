import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './fundRaiser.css'
import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import cardImg from '../../assets/images/Donate_img.jpeg'

function FundRaisers() {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        axios("https://fundmenaija.com/API/data/post/read.php")
        .then((res) => {
            // console.log(res.data[0])
            setIssues(res.data)
        });
    }, []);

    // console.log(issues.length)

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
//   return (
    if(issues.length < 1) {
        return (
            <Carousel 
            autoPlay={true} 
            autoPlaySpeed={3000}
            showDots={true}
            infinite={true}
            transitionDuration={500}
            responsive={responsive}
            >
                <div className="card shadow-sm mx-2" style={{ minHeight: "420px", maxHeight: "420px", height: "420px", border: "0px", borderRadius: "10px" }}>
                    <div className="img">
                        <img src={cardImg} alt="error image" />
                    </div>
                    <div className="content" style={{ position: "relative" }}>
                        <div className="title">NO Fund Raisers Yet</div>
                        <p>Create an Account and deposit money to start raising fund...</p>
                        <div style={{ position: "absolute", bottom: "-50px" }}>
                            <Link to="/login" className="btn btn-danger mr-2">Start Now</Link>
                            <small className='mx-5'>{0} donations</small>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm mx-2" style={{ minHeight: "420px", maxHeight: "420px", height: "420px", border: "0px", borderRadius: "10px" }}>
                    <div className="img">
                        <img src={'./uploads/church.jpg'} alt="error image" />
                    </div>
                    <div className="content" style={{ position: "relative" }}>
                        <div className="title">NO Fund Raisers Yet</div>
                        <p>Create an Account and deposit money to start raising fund...</p>
                        <div style={{ position: "absolute", bottom: "-50px" }}>
                            <Link to="/login" className="btn btn-danger mr-2">Start Now</Link>
                            <small className='mx-5'>{0} donations</small>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm mx-2" style={{ minHeight: "420px", maxHeight: "420px", height: "420px", border: "0px", borderRadius: "10px" }}>
                    <div className="img">
                        <img src={cardImg} alt="error image" />
                    </div>
                    <div className="content" style={{ position: "relative" }}>
                        <div className="title">NO Fund Raisers Yet</div>
                        <p>Create an Account and deposit money to start raising fund...</p>
                        <div style={{ position: "absolute", bottom: "-50px" }}>
                            <Link to="/login" className="btn btn-danger mr-2">Start Now</Link>
                            <small className='mx-5'>{0} donations</small>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm mx-2" style={{ minHeight: "420px", maxHeight: "420px", height: "420px", border: "0px", borderRadius: "10px" }}>
                    <div className="img">
                        <img src={'./uploads/church.jpg'} alt="error image" />
                    </div>
                    <div className="content" style={{ position: "relative" }}>
                        <div className="title">NO Fund Raisers Yet</div>
                        <p>Create an Account and deposit money to start raising fund...</p>
                        <div style={{ position: "absolute", bottom: "-50px" }}>
                            <Link to="/login" className="btn btn-danger mr-2">Start Now</Link>
                            <small className='mx-5'>{0} Donations</small>
                        </div>
                    </div>
                </div>
            </Carousel>
        )
    }else{
        return(
            <Carousel 
            draggable={true}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="all .5"
            transitionDuration={500}
            >
                {issues.map((issue, index) => 
                    <div key={issue.id} className="card shadow-sm mx-2" style={{ minHeight: "450px", maxHeight: "450px", height: "450px", border: "px", borderRadius: "10px" }}>
                        <div className="img">
                            <img src={'./uploads/'+issue.avatar} alt={issue.avatar} />
                        </div>
                        <div className="content" style={{ position: "relative" }}>
                            <div className="title">{issue.issue_title}</div>
                            <p>{issue.issue_body.substr(0,75)}...</p>
                            <div style={{ position: "absolute", bottom: "-50px" }}>
                                <Link to={"/donate?id="+issue.id} className="btn btn-danger mr-2">Donate now</Link>
                                <small className='mx-5'>{issue.id} Donations</small>
                            </div>
                        </div>
                    </div>
                )}
            </Carousel>
        )
    }
}

export default FundRaisers