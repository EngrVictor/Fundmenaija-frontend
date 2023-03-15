import '../Fundraiser/Fundraiser.css'
import { Link } from 'react-router-dom'

import img from '../../asserts/donateImages/myhome.svg'
import img2 from '../../asserts/images/222.jpg'

const Fundraiser = () => {
  return (
      <section className="Fundraiser p-4 bg-white my-4">
        <div className='d-lg-flex align-items-center'>
            <div className='fundraiser-img'>  

                <picture>
                    <img src={img} 
                        className="img-fluid mx-lg-0 mx-3 p-2 border" 
                    />
                </picture>
            </div>

            <div className="col-md-8 m-4">
                <div className="fundraiser-name col-md-12 text-truncate1">
                    <b className='text-capitalize'>Devine international school</b>
                    <p>Raising for cctv installation, to ensure adequate security of our students.</p>
                    <b>Estimated amount: <span>100,000</span></b>
                    <p className='address text-capitalize'>Address: <span>no 5 Melrose Street</span></p>
                    <Link to={'/details'} className='nav-link'>
                        <button className='text-white hover px-5 py-2 col-md-5'>View</button>
                    </Link>
                </div>
            </div>

        </div>

        <div className="d-flex">
            <div className='event-img my-lg-5 my-2'>
                <img src={img2} alt="image" className='img-fluid'/>
            </div>

            <div className='event-img my-lg-5 my-2 mx-lg-2 mx-1'>
                <img src={img2} alt="image" className='img-fluid'/>
            </div>
        </div>
    </section>
  )
}

export default Fundraiser