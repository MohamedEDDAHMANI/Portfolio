import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";

const contact = () => {
  return (
    <div>
      <div className='flex items-center'>
        <span className='inline pr-4 pl-[20px] text-xsx  || lg:pl-[100px]'>Contact</span><hr className='w-[150px] ml-[20px] h-[2px] text-accent '></hr>
      </div>

      <div className='w-auto flex flex-col pb-[20px] || lg:flex-row'>

        <div className='h-auto flex flex-col justify-center items-center gap-[40px] || lg:w-[40%]'>
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

        <div className='h-auto flex justify-center items-center pt-[20px] || lg:w-[60%]'>
          <div className='w-[80%]  rounded-[20px] border border-accent px-[20px] py-[10px]'>
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
    </div>
  )
}

export default contact
