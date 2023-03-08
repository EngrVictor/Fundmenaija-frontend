import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import Counter from './components/Counter';
import Footer from './components/Footer';
import Main from './Routes/Main';
import Nav from './components/Nav';
import Serve from './components/Serve';

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      {`${message} from backend`}
         <Nav/>
         <Serve/>
         <Footer/>                     
    </div>
  ); 
}

export default App;
