import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
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
import Admin from './Routes/Admin/Admin'
import Dashboard from './Routes/user/Dashboard'
import Fundraisedetails from './Routes/FundraiserDetails/Fundraisedetails'
import ErrorPage from './Routes/ErrorPage/ErrorPage'


function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios("http://localhost/API/index.php")
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <h2>{message === "" ? "Connecting to Backend..." : `${message} from backend`}</h2>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/admin" element={<Admin/>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Fundraisedetails />} />

        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>                   
  ); 
}

export default App;
