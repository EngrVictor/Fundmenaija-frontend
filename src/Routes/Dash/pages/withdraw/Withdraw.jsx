import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './withdraw.scss'


const Login = () => {
  return (
    <div className='new-fund'>
    <div className='side'><Sidebar/></div>
    <div className='main'>
      <Navbar/>
      <div className="fund-raise">
        <h3>Withdraw Funds</h3>

        <form>
          <div className="form-group">
            <label>From</label>
            <input type="number" name="account" id="" />
          </div>
          <div className="form-group">
            <label>To</label>
            <input type="number" name="account" id="" />
          </div>
        </form>
      </div>
    </div>
    
  </div>
  )
}

export default Login