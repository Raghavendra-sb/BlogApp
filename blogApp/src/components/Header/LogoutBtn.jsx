import React from 'react'
import {useDispatch} from 'react-redux';
import authServices from '../../appwrite/auth.js';
import {logout} from '../../store/authSlice.js'
function LogoutBtn() {
    const dispatch = useDispatch();
    const LogoutHandler = () => {
        authServices.logout().then(()=>{
            dispatch(logout())
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
   <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={LogoutHandler}>Logout</button>
  )
}

export default LogoutBtn