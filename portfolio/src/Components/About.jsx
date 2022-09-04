import React from 'react'

const About = () => {
  return (
   <div name='about' className=' h-screen  w-full bg-gradient-to-b from-gray-800 to-black text-white'>
    <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full'>

      <h1 className=' text-bold text-3xl underline py-2'>
        About
      </h1>

      <p className='py-4 max-w-[700px]  text-[#8892b0] text-xl mt-16'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus laboriosam quos expedita, sed enim animi aliquam odit mollitia labore ea molestiae totam debitis quidem nisi velit saepe perspiciatis beatae error nemo! Tempora, at mollitia? Eos quo, porro eaque, inventore laboriosam distinctio vero sint iure fugiat debitis cum ipsam eum eius.</p>


          <p className='py-4 max-w-[700px] text-[#8892b0] text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis impedit ullam natus doloribus libero assumenda dolorum qui nesciunt, ipsam, perspiciatis culpa odit vero nulla repudiandae sint consequuntur deserunt. Eaque illo necessitatibus odit. Error quibusdam delectus ex vel ea ipsam possimus qui, non ipsa culpa. Amet aliquam eum laborum provident?</p>

    </div>
   </div>
  )
}

export default About