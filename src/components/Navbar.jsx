import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user,logOut}=UserAuth()
  const navigate=useNavigate()
  const [show,setShow]=useState(false)
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleSignOut=async()=>{
    try{
      await logOut()
      navigate('/')
    }catch(error){
      console.log(error);
    }

  }
  return (
       <div className={`flex items-center justify-between fixed p-4 z-[100] w-full transition-all duration-500 ${show ? "bg-[rgba(17,17,17,0.8)] shadow-lg" : ""}`}>
        <Link to='/'>
          <img className='w-[90px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png'/>
        {/* <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1> */}
        </Link>
        {user?.email ?(
        <div>
            <Link to='/account'>
              <img className='w-[30px] inline mr-4' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'/>
            {/* <button className='text-white pr-4'>Account</button> */}
            </Link>
            
            <button onClick={handleSignOut} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Out</button>
            
        </div>):(<div>
            <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
            </Link>
        </div>)
        }
        
    </div>
  )
}

export default Navbar