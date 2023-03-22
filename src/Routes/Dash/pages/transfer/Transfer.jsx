import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './transfer.scss'


const List = () => {
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
          <input type="text" name="fund-title" id="fund-title" />
        </div>
        <div className="form-group">
        <label>Target Amount</label>
          <input type="number" name="fund-target" id="fund-target" />
        </div>
        <div className="form-group">
          <label>Enter Fundraising details</label>
          <textarea name="fundraising-details" id="fundraising-details" ></textarea>
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

export default List