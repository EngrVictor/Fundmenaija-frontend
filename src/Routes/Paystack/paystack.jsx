import React, { useEffect, useState } from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

import './payment.css'

function paystack() {
    const [donor, setDonor] = useState('')
    const [amount, setAmount] = useState('')
    const [email, setEmail] = useState('')
    const [p_method, setPmethod] = useState('')
    const [payImg, setPayImg] = useState('')
    const [robot, setRobot] = useState(false)


    const handleSubmit = e => {
        e.preventDefault();
        // console.log("Form submited");
        // ### Validation UI
        if(donor !== '' && amount !== '' && amount >= 200){
            // && p_method.value != ''
            // payWithPaystack();
            if(p_method === 'onepass'){
                // console.log("OnePass: "+p_method)
                return runIframe();
            }else{
                // console.log("PayStack: "+p_method)
                // return handleFlutterPayment();
                return handleFlutterPayment({
                    callback: (response) => {
                        // send response to backend for further verification b4 crediting user
                       console.log(response);
                        closePaymentModal() // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
            }
        }else{
            console.log("Please Fill out all fields");
            alert("Please Fill out all fields");
        }
    };

    //--------- Add payment method logo ---------
    useEffect(() => {
        if(p_method !== '') {
            if (p_method === 'onepass') {
                setPayImg('OnePassLogo.png')
            }else if(p_method === 'flutterwave') {
                setPayImg('Flutterwave_.png')
            }
        }
    })

    // FLUTTERWAVE GATEWAY API
    const config = {
        public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'contact.fundmenaija@gmail.com',
           phone_number: '07052365193',
          name: donor,
        },
        customizations: {
          title: 'Donation for '+donor,
          description: 'Fundmenaija Donation',
          logo: './uploads/logo.png',
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config);
    

    // window.location.href = 'javascript://history.go(-1)';
    // ONEPASS GATEWAY
    const runIframe = () => {
        OurpassCheckout.openIframe({
            api_key: "pass_sec_live_JtEt9j5JMTquYSbg1T6VyQWDOj0Wbtj3",
            subAccountAuthKey: 'auth_live_fgegsdgsdgsdgdsgd',
            reference: 'OURPASS_ORDER_73aeefff68430210ae3a8e88ccfe2erbf214171',
            amount: amount,
            qty: 1,
            name: 'Donation',
            description: 'Fundmenaija Pass Donation',
            src: 'https://raw.githubusercontent.com/Cheetah-Speed-Technology/website_dstore/master/Cap-front1.png',
            url: 'ourpass.co',
            items: [
                {
                    itemAmount: 500,
                    itemName: 'Donation',
                    itemWeight: 1,
                    itemQuantity: 1,
                    imageUrl: 'https://fundmenaija.com/user/customer_data/Issue_img/',
                    itemDescription: 'Fundmenaija Donation By: Cybergate',
                },
            ],
            metadata: {
                name: 'MARIO GOTZE',
            },
            headers: {
                'apiKey': '{{pass_sec_live_JtEt9j5JMTquYSbg1T6VyQWDOj0Wbtj3}}'
            },
            onSuccess: (res) => {
                alert('Your Donate is Successful');
                window.location.href = '/donate';
            },
            onClose: () => {
                // Handle failed request either for try again with confirm
                const answer = confirm('Donation Cancelled. Try Again?');
                if(answer){
                    window.location.href = '#'
                }else{
                    window.location.href = '/donate'
                }
            },
        });                
    } 

  return (
    <>
    <Nav />
      <div>
        <div className="row mx-3 my-5">
            <div style={{ margin: "130px auto 20px" }} className="col-md-6">
                <form id="form" onSubmit={handleSubmit} className="form-group px-lg-5 p-4 shadow bg-white">
                    <div className='text-center'>
                        <b className='text-dark text-uppercase h4'>Complete Your Donation</b>
                    </div>

                    <div className="alert alert-success text-center h5 mb-0 mt-3"><span className='text-danger'>No Fund Raiser Selected</span><br />Please Select a Fund Raiser...!</div>
                    <label htmlFor="u_name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        id="u_name" className="form-control py-3" 
                        placeholder="Donor's Full Name" 
                        title="Enter Your Full Names"
                        onChange={(e) => setDonor(e.target.value)}
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
                        onChange={(e) => setAmount(e.target.value)}
                        name="amount"
                        required={true}
                    />
                    <input type="hidden" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <div className="payment-container">
                        <select onChange={(e) => setPmethod(e.target.value)} className="form-control" required={true}>
                            <option value={''} disabled={true} selected>Select Donations Method</option>
                            <option value={"onepass"}>OnePass</option>
                            <option value={'flutterwave'}>Flutterwave</option>
                        </select>
                        <div className="paymentImg col-2">
                            <img src={'./uploads/'+payImg} className='img-fluid' id="pay-Img" alt={payImg} />
                        </div>
                    </div>
                    <br />
                    <span className="d-flex">
                        <input type="checkbox" onChange={() => setRobot(true)} name="robot" id="robot" required={true} />
                        <label className='text-dark mx-2' htmlFor='robot'>Not a Robot?</label>
                    </span>
                    <br />
                    <br />
                    <button id="button" type="submit" 
                        className="btn btn-block" 
                        style={btn_style} name="pay">Proceed with Payment
                    </button>
                        {/* <!-- <input id="button" type="button" className="btn btn-block btn-danger text-white font-weight-bold" onclick="runIframe()" style="padding: 10px 32px;" value="Proceed with Payment"> --> */}
                </form>
                
            </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default paystack

const btn_style = {
    width: '100%',
    height: '40px',
    border: 'none',
    borderRadius: '5px',
    background: 'var(--primary)',
    color: '#fff',
    fontSize: 'small',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: "10px 32px"
}
