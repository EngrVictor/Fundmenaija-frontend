import React, { useState } from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

const Activate = () => {
  const [username, setUsername] = useState('')
  const [amount, setAmount] = useState('')

  // Flutterwave configuration
  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'contact.fundmenaija@gmail.com', // get email from the session
       phone_number: '07052365193',
      name: username,
    },
    customizations: {
      title: 'Donation from '+username,
      description: 'Fundmenaija Donation',
      logo: './uploads/logo.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);


  const handleSubmit = (e) => {
    e.preventDefault()
    // alert('Form submitted')
    if(username !== '' && amount !== '' && amount >= 200){
      return handleFlutterPayment({
          callback: (response) => {
              // send response to backend for further 
              // verification b4 crediting user
              // redirect to dashboard
              console.log(response);
              closePaymentModal() // this will close the modal programmatically
          },
          onClose: () => {},
        });
    }else{
        console.log("Please Fill out all fields");
        alert("Please Fill out all fields");
    }
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
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                    type="text" 
                    id="username" className="form-control py-3" 
                    placeholder="Donor's Full Name" 
                    title="Enter Your Full Names"
                    name="donor"
                    onClick={(e) => setUsername(e.target.value)}
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
                    onClick={(e) => setAmount(e.target.value)}
                    required={true}
                />
                {/* <input type="hidden" id="email" value="<?php echo isset($_SESSION['Email']) ? $_SESSION['Email'] : "contact.fundmenaija@gmail.com" ; ?>"> */}
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
