import React from 'react'
import { Switch, Route, Routes } from "react-router-dom";
import About from '../Routes/About';
import Contact from '../Routes/Contact';
import Donate from '../Routes/Donate';
import ErrorPage from '../Routes/ErrorPage';
import Main from '../Routes/Main';

const Serve = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/donate" element={<Donate/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </div>
  )
}

export default Serve