import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'

const Home = () => {
  // check if user is NOT logged in
  const win = window.sessionStorage
  const Navigate = useNavigate()

  useEffect(() => {
    if(win.getItem('username') === '' || win.getItem('accountNo') === ''){

      alert('Your are NOT logged in')
      Navigate('/login', {}); 
      return;
    }
  }, [])

  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className='widgets'>
            <Widget type='users' />
            <Widget type='orders' />
            <Widget type='earnings' />
            <Widget type='balance' />
          </div>
          <div className="charts">
            <Feature />
            <Chart />
          </div>
        </div>
    </div>
  )
}

export default Home