import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './withdraw.scss'


const Login = () => {
  return (
    <div className='new-fund'>
    <div className='side'><Sidebar/></div>
    <div className='main'>
      <Navbar/>
      <div className="withdraw">
        <h1>Withdraw Funds</h1>

        <form>
          <div className="form-group">
            <label>From</label>
            <input type="number" name="account" id="" placeholder="Sender's account no" />
          </div>
          <div className="form-group">
            <label>To</label>
            <input type="number" name="account" id="" placeholder="Recipiant's account no"/>
          </div>

          <input type="submit" value="Withdraw"/>
        </form>
      </div>
    </div>
    
  </div>
  )
}

export default Login