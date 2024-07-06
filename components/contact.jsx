import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";

const contact = () => {
  return (
    <>
      <div className='flex items-center'>
        <span className='inline pr-5 pl-[150px] text-xsx'>Contact</span><hr className='w-[250px] h-[2px] text-accent '></hr>
      </div>

      <div className='w-full h-[450px] flex'>

        <div className='w-[35%] h-full flex flex-col justify-center items-center gap-[40px]'>
          <div className=' w-[250px] flex'>
            <div className='bg-green-300 w-[50px] h-[50px] mt-[12px] flex justify-center items-center rounded-full '>
              <CiLocationOn className='text-[35px]' />
            </div>
            <div className='pl-[20px]'>
              <h1 className='font-bold text-accent text-[20px]'>LOCATION</h1>
              <h4>Agadir, Maroc</h4>
            </div>
          </div>
          <div className=' w-[250px] flex'>
            <div className='bg-green-400 w-[50px] h-[50px] mt-[12px] flex justify-center items-center rounded-full'>
              <CiMail className='text-[35px]' />
            </div>
            <div className='pl-[20px]'>
              <h1 className='font-bold text-accent text-[20px]'>MAIL</h1>
              <h4>dsimo4323@gmail.com</h4>
            </div>
          </div>
          <div className=' w-[250px] flex'>
            <div className='bg-green-600 w-[50px] h-[50px] mt-[12px] flex justify-center items-center rounded-full'>
              <FaTelegramPlane className='text-[35px]' />
            </div>
            <div className='pl-[20px]'>
              <h1 className='font-bold text-accent text-[20px]'>TELEGRAM</h1>
              <h4>+212658511779</h4>
            </div>
          </div>
        </div>

        <div className='w-[65%] h-full flex justify-center items-center'>
          <div className='w-[80%] h-[75%] rounded-[20px] border border-accent px-[20px] py-[10px]'>
            <div className='flex space-x-4 mb-2'>
              <div className='w-1/2'>
                <h1 className='text-[14px] font-semibold mb-1'>Username</h1>
                <input type="text" className='w-full h-[30px] p-2 border border-gray-300 rounded text-black' />
              </div>
              <div className='w-1/2'>
                <h1 className='text-[14px] font-semibold mb-1'>Email</h1>
                <input type="text" className='w-full h-[30px] p-2 border border-gray-300 rounded text-black' />
              </div>
            </div>
            <div className='mb-2'>
              <h1 className='text-[14px] font-semibold mb-1'>Subject</h1>
              <input type="text" className='w-full h-[30px] p-2 border border-gray-300 rounded text-black' />
            </div>
            <div className='mb-4'>
              <h1 className='text-[14px] font-semibold mb-1'>Message</h1>
              <input type="text" className='w-full h-[80px] p-2 border border-gray-300 rounded text-black' />
            </div>
            <div>
              <button className='w-full h-[30px] bg-accent text-white rounded hover:bg-green-500 transition duration-300 ease-in-out'>Submit</button>
            </div>
          </div>
        </div>




      </div>
    </>
  )
}

export default contact
