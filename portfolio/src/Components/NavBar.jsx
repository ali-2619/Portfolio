import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'


const NavBar = () => {
  const [nav , setNav] = useState(false);

  return (

   <div className='flex justify-between items-center w-full h-18 px-4 bg-black text-white fixed'>

    <div>
    <h1 className='text-5xl  font-signature ml-2 cursor-pointer '> ali </h1>
    </div>

    <div>
      <ul className='hidden sm:flex'>
        <li className=' px-4 cursor-pointer text-gray-300 hover:scale-105 duration-200 hover:text-white '> Home</li>
        <li className=' px-4 cursor-pointer text-gray-300 hover:scale-105 duration-200 hover:text-white '> About</li>
        <li className=' px-4 cursor-pointer text-gray-300 hover:scale-105 duration-200 hover:text-white '> Portfolio</li>
        <li className=' px-4 cursor-pointer text-gray-300 hover:scale-105 duration-200 hover:text-white '> Experience</li>
        <li className=' px-4 cursor-pointer text-gray-300 hover:scale-105 duration-200 hover:text-white '> Contact</li>

      </ul>
    </div>

    <div onClick={()=> setNav(!nav)} className='cursor-pointer  pr-4 z-10 sm:hidden'>
      {nav ? <FaTimes size={15}/> : <FaBars size={15}/> }
  
    </div>
     
     {nav && [<div>
      <ul className='flex flex-col justify-center items-center absolute w-full  top-0 left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <li className=' px-4 cursor-pointer py-6 text-4xl hover:scale-105 duration-200'>Home</li>
        <li className=' px-4 cursor-pointer py-6 text-4xl hover:scale-105 duration-200'>About</li>
        <li className=' px-4 cursor-pointer py-6 text-4xl hover:scale-105 duration-200'>Portfolio</li>
        <li className=' px-4 cursor-pointer py-6 text-4xl hover:scale-105 duration-200'>Experience</li>
        <li className=' px-4 cursor-pointer py-6 text-4xl hover:scale-105 duration-200'>Contact</li>
        

      </ul>
      </div>  
    ]}
    



   </div>



  )
}

export default NavBar 