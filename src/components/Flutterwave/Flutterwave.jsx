import React from 'react'
// for node js app
// const Flutterwave = require('flutterwave-node-v3');
// const flw = new Flutterwave(process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY, process.env.REACT_APP_FLUTTERWAVE_SECRET_KEY);
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const Flutterwave = () => {
    const config = {
        public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: 200,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'contact.fundmenaija@gmail.com',
          phone_number: '07052365193',
          name: 'Cyebrgate Developer',
        },
        customizations: {
          title: 'FundMeNaija Platform',
          description: 'Donation for schol fees',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
      const fwConfig = {
        ...config,
        text: 'Pay with Flutterwave!',
        callback: (response) => {
           console.log(response);
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      };
    return (
    <div className="App">
        <h1>Hello Test user</h1>
        <FlutterWaveButton {...fwConfig} />
    </div>
    );
}

export default Flutterwave

// You can actually try out the payment above. Use the card number 4187427415564246 with CVV 828 and expiry 09/32, or grab a test card or bank account from our Testing helpers page and try making the payment. It works!

// https://github.com/Flutterwave/React