import React, { useEffect, useState } from 'react'
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
                return payWithPaystack();
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
            }else if(p_method === 'paystack') {
                setPayImg('paystack3.png')
            }
        }
    })

    // PAYSTACK GATEWAY API
    // PAYSTACK AUTH
    const payWithPaystack = () => {
        // e.preventDefault();
        let handler = PaystackPop.setup({
            key: 'pk_live_4f0d9358be6a7d2d6eb726920a093e9b4cd3c7c4', 
            email: "contact@fundmenaija.com",
            amount: amount * 100,
            ref: 'FMN'+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            // label: "Optional string that replaces customer email"
            onClose: function(){
                // alert('Window closed.');
                const answer = confirm('Donation Cancelled. Try Again?');
                if(answer){
                    // window.location.href = './pay.php?status=cancelled';
                    // window.location.href = 'javascript://history.go(-1)';
                    window.location.href = '#';
                }else{
                    // window.location.href = './donate.php'
                    window.location.href = 'javascript://history.go(-1)';
                }
            },
            callback: function(response){
                let message = 'Payment completed! Reference: ' + response.reference;
                alert(message);
                // windon.location = '/donate?reference='+ response.reference;
            }
        });

        handler.openIframe();
    }   

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
                            <option value={'paystack'}>Paystack</option>
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
