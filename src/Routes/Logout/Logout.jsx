import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
    // const [redirect, setRedirect] = useState(false)

    const win = window.sessionStorage

    const Navigate = useNavigate()
    
    // clear session on submit
    // const handsubmit = (e) => {
    //     e.preventDefault()
        // win.clear()
        // setState('')
    // }

    // useEffect(() => {
        // check if user session data exist, get it and setState(win.getItem('username))
    // }, [])

    useEffect(() => {
        if(win.getItem('username') !== '' && win.getItem('accountNo') !== ''){
            win.clear()
            win.setItem('username', '')
            win.setItem('pwd', '')
            // redirect to login
            Navigate('/login', {})
        }else{
            Navigate('/login', {})
        }
        
    }, [])

  return (
    <div className='d-flex justify-content-center align-items-center'>
      Logging out...
    </div>
  )
}

export default Logout
