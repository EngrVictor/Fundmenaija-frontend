import React from 'react'
import { Switch, Route, Routes } from "react-router-dom";
import About from '../Routes/About';
import Admin from '../Routes/Admin/Admin';
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
            {/* Import of Admin Routes Here */}
            <Route path="/admin" element={<Admin/>} />
        </Routes>
    </div>
  )
}

export default Serve