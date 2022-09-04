import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import aws from '../assets/aws.png'
import node from '../assets/node.png'
import git from '../assets/github.png'


{/* 
      <img src={CSS} alt="icon" />
      <img src={Javascript} alt="icon" />
      <img src={react} alt="icon" />
      <img src={tailwind} alt="icon" />
      <img src={aws} alt="icon" />
      <img src={node} alt="icon" />
      <img src={git} alt="icon" /> */}

const Experience = () => {

  const iconx = [

          {

           id : 1,
           src : HTML,
           title : 'HTML',
           style : 'shadow-orange-500' 
          },
          {

            id : 2,
            src : CSS,
            title : 'CSS',
            style : 'shadow-blue-500' 
           },
           {

            id : 3,
            src : Javascript,
            title : 'JavaScript',
            style : 'shadow-yellow-500' 
           },
           {

            id : 4,
            src : react,
            title : 'React',
            style : 'shadow-blue-600' 
           },
           {

            id : 5,
            src : tailwind,
            title : 'Tailwind',
            style : 'shadow-sky-500' 
           },
           {

            id : 6,
            src : git,
            title : 'GitHub',
            style : 'shadow-gray-400' 
           }
  ]
  return (
    <div name="experience" className=' bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
        <div className= 'max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full '>
          
          <div>
            <p className='text-white text-bold text-3xl  border-b-4 inline py-2'>Experience</p>
            <p className='text-[#8892b0] py-6 '>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


            {iconx.map(({id,src,title,style})=>
            
            (
              <div key={id} 
               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

              <img src={src} alt="icon"  className='w-20 mx-auto'/>
              <p className='mt-4 text-white'>{title}</p>
            </div>

            )
            
            )}

            

       
          </div>

        </div>
    </div>
  )
}

export default Experience