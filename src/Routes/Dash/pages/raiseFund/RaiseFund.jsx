import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './raiseFund.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'


const New = () => {
  // check if user is NOT logged in
  const win = window.sessionStorage
  const Navigate = useNavigate()

  useEffect(() => {
    if(win.getItem('username') === '' || win.getItem('accountNo') === ''){

      Navigate('/login', {}); 
      return
    }
  }, [])

  // HADNLE FUND RAISING...
    const [title, setTitle] = useState('')
    const [target, setTarget] = useState('')
    const [detail, setDetail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [avatar_2, setAvatar_2] = useState('')


    const [disabled, setDisabled] = useState(false)
    const [value, setValue] = useState("Create FundRaiser")

    const data = {
      user_id: win.getItem('id'),
      user_username: win.getItem('username'),
      title,
      target,
      detail,
      avatar,
      avatar_2,
    }

    // axios API call URL
    const URL = process.env.NODE_ENV === 'Production' ? 'https://fundmenaija.com/API/data/post/create.php' : 'http://localhost/API/data/post/create.php';

    // submitting Form here
    const handleSubmit = (e) => {
        e.preventDefault()
        setValue('Please Wait...')
        setDisabled(true)
        if(title === '' || target === '' || detail === '' || avatar === '' || avatar_2 === '' || avatar === null || avatar_2 === null){
            // alert('Please Fill out the empty fields')
            swal({
                title: "Account Alert!",
                text: "Please Fill out the empty fields",
                icon: "error",
            });
            setValue("Create FundRaiser")
            setDisabled(false)
        }else{
            // alert('This page will load soon...')
            axios.post(URL, data)
            .then(res => {
                if(res.status !== false && res.message === "Success"){
                    // create session && redirect to dashboard
                    console.log(res.data);
                    Navigate('/dash', res.data);
                }else{
                    console.log("FAILED__"+res.data);
                    swal({
                        title: "Request Failed!",
                        text: res.message,
                        icon: "error",
                    });
                    // try again
                    setValue("Create FundRaiser")
                    setDisabled(false)
                }
            })
            .catch((error) => {
                swal({
                    title: "Connection Failed",
                    text: error.message,
                    icon: "error",
                });
                setValue("Create FundRaiser")
                setDisabled(false)
            })
            
        }
    }

  return (
    <div className='new-fund'>
      <div className='side'><Sidebar/></div>
      <div className='main'>
        <Navbar/>
        <div className="fund-raise">
        <div className="left">
       <h1>Raise Fund</h1>
      <form className="fund-raising" encType="multipart/form-data">
          <p>Enter Fundraising details</p>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text" 
              name="fund-title" 
              id="fund-title" 
              placeholder='Enter a valid Title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
          <label>Target Amount</label>
            <input 
              type="number" 
              name="fund-target" 
              id="fund-target" 
              placeholder='E.g 2,000'
              onChange={(e) => setTarget(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Enter Fundraising details</label>
            <textarea 
              name="fundraising-details" 
              id="fundraising-details" 
              placeholder='Enter fund raising details'
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label>Add two images</label>
            <div className="images">
              <input
                className="form-control" 
                type="file" 
                name="" 
                id=""
                onChange={(e) => setAvatar(e.target.value)} 
              />
              <input
                className="form-control" 
                type="file" 
                name="" 
                id=""
                onChange={(e) => setAvatar_2(e.target.value)} 
              />
            </div>
          </div>
          <input 
            style={{ opacity: disabled && "0.6" }}
            type="submit" 
            value={value}
            onClick={handleSubmit}
            disabled={disabled} 
          />
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