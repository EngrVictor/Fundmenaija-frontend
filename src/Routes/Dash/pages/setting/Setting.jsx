import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './setting.scss'

const Single = () => {
  return (
    <div className='new-fund'>
    <div className='side'><Sidebar/></div>
    <div className='main'>
      <Navbar/>
      <div className="fund-raise">
      <div className="setting">
     <h3>General Information</h3>
    <form action="#" className=" setting-form">
        <div className="line">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="first-name" id="first-name" placeholder='Enter your first name'/>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="last-name" id="last-name" placeholder='Also your last name'/>
          </div>
        </div>
        <div className="line">
          <div className="form-group">
            <label>Birthday</label>
            <input type="date" name="birthday" id="birthday" placeholder='dd/mm/yyyy'/>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" id="" defaultValue='default'>
              <option value="default">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        
        <div className="line">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder='Enter a valid Email'/>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" id="phone" placeholder='+234 567 889 123'/>
          </div>
        </div>
        

        <div>
          <h4>Address</h4>
        <div className="line">
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" id="address" placeholder='Enter your home address'/>
          </div>
          <div className="form-group">
            <label>Number</label>
            <input type="number" name="num" id="num" placeholder='No.'/>
          </div>
        </div>
        <div className="line">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" id="city" placeholder='City'/>
          </div>
          <div className="form-group">
            <label>ZIP</label>
            <input type="number" name="zip-code" id="zip-code" placeholder='ZIP'/>
          </div>
        </div>
        
        </div>

        <input type="submit" value="Save All" />
        
    </form>
     </div>
      </div>
    </div>
    
  </div>
  )
}

export default Single