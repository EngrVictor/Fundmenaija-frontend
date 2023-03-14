import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import Counter from './components/Counter';
import Footer from './components/Footer';
import Main from './Routes/Main';
import Nav from './components/Nav';
import Serve from './components/Serve';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios("http://localhost/API/index.php")
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h2>{message === "" ? "Connecting to Backend..." : `${message} from backend`}</h2>

         <Nav/>
         <Serve/>
         <Footer/>                     
    </div>
  ); 
}

export default App;
