import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' h-screen  w-full bg-gradient-to-b from-gray-800 to-black pt-8 text-white'>

      <div className='max-w-screen-lg mx-auto  px-8 flex flex-col justify-center h-full'>
        <div>
          <p className='text-white text-bold text-3xl  border-b-4 inline py-2'>Contact</p>
          <p className='text-[#8892b0] py-6 '>
          Submit the form below to get in touch with me 
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <form method='POST' action="https://getform.io/f/68d4bcf6-7104-49c0-81c4-d4b5605b8ef2" className='flex flex-col w-full md:w-1/2'>
            <input 
             type="text"
             name="name" 
             placeholder="Enter you name" 
             className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
             />

            <input 
             type="text"
             name="email" 
             placeholder="Enter your Email" 
             className='p-2 bg-transparent my-2 border-2 rounded-md text-white focus:outline-none' 
             />
              
              <textarea name="messege" placeholder="Messege"  rows="10" className='p-2 bg-transparent rounded-md text-white border-2 focus:outline-none'>

              </textarea>

              <button className='text-white hover:scale-110 duration-300 cursor-pointer  px-6 py-3  my-8
              mx-auto flex items-center bg-gradient-to-r from-indigo-400 to-indigo-900
                    border-2 rounded-md'>
                lets Talk



              </button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Contact