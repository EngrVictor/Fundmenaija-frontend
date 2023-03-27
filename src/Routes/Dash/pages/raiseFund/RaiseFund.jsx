import './raiseFund.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'


const New = () => {
  return (
    <div className='new-fund'>
      <div className='side'><Sidebar/></div>
      <div className='main'>
        <Navbar/>
        <div className="fund-raise">
        <div className="left">
       <h1>Raise Fund</h1>
      <form action="#" className="fund-raising">
          <p>Enter Fundraising details</p>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="fund-title" id="fund-title" placeholder='Enter a valid Title'/>
          </div>
          <div className="form-group">
          <label>Target Amount</label>
            <input type="number" name="fund-target" id="fund-target" placeholder='E.g 100'/>
          </div>
          <div className="form-group">
            <label>Enter Fundraising details</label>
            <textarea name="fundraising-details" id="fundraising-details" placeholder='Enter fund raising details'></textarea>
          </div>

          <div>
            <label>Add two images</label>
            <div className="images">
              <input type="file" name="" id="" />
              <input type="file" name="" id="" />
            </div>
          </div>

          <input type="submit" value="Create" />
          
      </form>
       </div>
       <div className="right">
        <h1>Preview</h1>
       </div>
        </div>
      </div>
      
    </div>
  )
}

export default New