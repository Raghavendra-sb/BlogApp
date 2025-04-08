import { useDispatch } from 'react-redux';
import { useEffect,useState } from 'react'
import './App.css'
import authServices from "./appwrite/auth.js"
import { login,logout } from './store/authSlice.js';
import { Header , Footer } from  './components';

function App() {
const[loading,setloading]=useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authServices.getCurrentUser().then((userData)=>{
    if(userData)
    {
      dispatch(login({ userDate: userData }))
    }
    else{
       dispatch(logout())
    }
  }).finally(()=> setloading(false))
},[])

//return !loading ? (<div></div>): (null )
return !loading ? (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  <div className='w-full-black'>
    <Header/>
    <Footer/>
  </div>
</div>):(<h1>Loading....</h1>)
}

export default App
