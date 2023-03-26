import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

const Activate = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted')
  }
  return (
    <>
      <Nav />
      <div className="row mx-3 my-5">
        <div style={{ margin: "130px auto 20px" }} className="col-md-6">
            <form id="form" className="form-group px-lg-5 p-4 shadow bg-white">
                <div className='text-center'>
                    <b className='text-dark text-uppercase h4'>Complete Your Sign up</b>
                </div>

                <div className="alert alert-success text-center h5 mb-0 mt-3">Donate to Activate Your Account...!
                </div>
                <label htmlFor="u_name" className="form-label">Username</label>
                <input 
                    type="text" 
                    id="u_name" className="form-control py-3" 
                    placeholder="Donor's Full Name" 
                    title="Enter Your Full Names"
                    name="donor"
                    required={true}
                />

                <label htmlFor="amount" className="form-label">Amount</label>
                <input 
                    type="number" 
                    id="amount" 
                    min="200" 
                    min-length="200" 
                    className="form-control py-3" 
                    placeholder="Enter Amount" 
                    title="NOT LESS THAN 200"
                    name="amount"
                    required={true}
                />
                {/* <input type="hidden" id="email" value="<?php echo isset($_SESSION['Email']) ? $_SESSION['Email'] : "contact.fundmenaija@gmail.com" ; ?>"> */}
                <br />
                  {/* <div className="payment-container">
                    <select name="p_method" id="p_method" className="form-control" required>
                        <option value="" disabled selected>Select Donations Method</option>
                        <option value="onepass">OnePass</option>
                        <option value="paystack">Paystack</option>
                     </select>
                    <div className="paymentImg col-2">
                        <img  className='img-fluid' id="pay-Img" />
  
                     </div>
                 </div>  */}
                <br />
                <span className="d-flex">
                    <input type="checkbox" name="robot" id="robot" required={true} />
                    <label className='text-dark mx-2' htmlFor='robot'>Not a Robot?</label>
                </span>
                <br />
                <br />
                <button id="button" type="submit" 
                    className="btn btn-block text-white" 
                    style={{ padding: "10px 32px", backgroundColor: "#f3613c" }} 
                    name="pay"
                    onClick={handleSubmit}
                    >Proceed with Payment
                </button>
                    {/* <!-- <input id="button" type="button" className="btn btn-block btn-danger text-white font-weight-bold" onclick="runIframe()" style="padding: 10px 32px;" value="Proceed with Payment"> --> */}
                </form>
          </div>
      </div>
      <Footer />      
    </>
  )
}

export default Activate
