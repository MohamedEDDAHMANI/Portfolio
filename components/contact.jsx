import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";

const contact = () => {
  return (
    <>
      <div className='flex items-center'>
        <span className='inline pr-5 pl-[150px] text-xsx'>Contact</span><hr className='w-[250px] h-[2px] text-accent '></hr>
      </div>
      <div className='w-full h-[450px] bg-red-300'>
        <div className='w-[35%] h-full  bg-red-200 '>
          <div className='bg-green-200'>
            <div>
              <CiLocationOn/>
            </div>
            <div>
              <h1>LOCATION</h1>
              <h3>Agadir, Maroc</h3>
            </div>
          </div>
          <div className='bg-green-400'>
            <div>
              <CiMail/>
            </div>
            <div>
              <h1>MAIL</h1>
              <h2>dsimo4323@gmail.com</h2>
            </div>
          </div>
          <div className='bg-green-600'>
            <div>
              <FaTelegram/>
            </div>
            <div>
              <h1>TELEGRAM</h1>
              <h3>+212658511779</h3>
            </div>
          </div>
        </div>
        <div>
          contact inputs
        </div>
      </div>
    </>
  )
}

export default contact
