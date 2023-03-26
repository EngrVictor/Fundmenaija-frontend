import { useEffect } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

// import Modules and routes here
import Main from './Routes/Main/Main';
import About from './Routes/About/About'
import Contact from './Routes/Contact/Contact'
import Donate from './Routes/Donate/Donate'
import Login from './Routes/Login/Login'
import CreateAccount from './Routes/Login/CreateAccount'
import Admin from './Routes/Admin/AdminDash'
// import Dashboard from './Routes/user/Dashboard'
import Paystack from './Routes/Paystack/paystack'
import ErrorPage from './Routes/ErrorPage/ErrorPage'
import Transfer from "./Routes/Dash/pages/transfer/Transfer";
import Withdraw from "./Routes/Dash/pages/withdraw/Withdraw";
import Setting from "./Routes/Dash/pages/setting/Setting";
import RaiseFund from "./Routes/Dash/pages/raiseFund/RaiseFund";
import Home from "./Routes/Dash/pages/home/Home";
import Activate from './Routes/Activate/Activate';


function App() {
  return (
    <>
      {/* <Nav /> */}
      {/* <h2>{message === "" ? "Connecting to Backend..." : `${message} from backend`}</h2> */}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<CreateAccount />} />
        <Route path="/activate_account" element={<Activate />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/make_payment" element={<Paystack />} />

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dash">
            <Route index element={<Home />} />
            <Route path="raise" element={<RaiseFund />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="setting" element={<Setting />} />
        </Route>
        {/* <Route path="/details" element={<Fundraisedetails />} /> */}
        {/* <Route path="/passwordreset" element={<Fundraisedetails />} /> */}

        <Route path="*" element={<ErrorPage/>} />
      </Routes>   
    </>             
  ); 
}

export default App;
