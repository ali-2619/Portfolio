import React from 'react'
import{MdKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll' 
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>

        

          <div className=' max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full'>

            <p className=' py-2 text-indigo-300'>
            Hi, my name is
              </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>
             Ali Zafar
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm an Front End Developer.
            </h2>

            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I have 2 Years of Experience building and Designing
            software. Currently, I love to work on web application
            using technologies like React , Tailwind , Vue Js and Laravel.
            </p>

            <div >
              <button  className=' text-white group cursor-pointer  px-6 py-3  my-2
                   flex items-center hover:bg-gradient-to-r from-indigo-400 to-indigo-900
                    border-2 rounded-md '>
                      <Link  to="experience"smooth duration={500} >
                    Experience
                    </Link>
                <span className='group-hover:rotate-90 duration-200'>
                     <MdKeyboardArrowRight/>
                </span>
              </button>
              </div>

            

             </div>
          </div>     


  )
}

export default Home