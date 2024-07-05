import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { GrCode } from "react-icons/gr";


const about = () => {
  return (
    <>
      <div className='flex items-center'>
        <span className='inline pr-5 pl-[150px] text-xsx'>About Me</span><hr className='w-[250px] h-[2px] text-accent '></hr>
      </div>
      <div className=" w-full  h-[800px] md:h-[500px]  flex flex-col md:flex-row ">
        <div className=" w-[100%] md:w-[40%]  h-full ">
          <div className='h-[65%] flex items-center justify-center'>
            <div className='absolute z-10'>pic</div>
            <div className=" relative rounded-full border-[3px] border-inset border-accent h-[270px] w-[270px] flex items-center justify-center  animate-spin-slow ">
              <div className=' absolute w-[300px] h-[200px] bg-primary rounded-full'></div>
              <div className=" relative rounded-full border-[5px] border-inset border-accent h-[240px] w-[240px] flex items-center justify-center  animate-spin-slow ">
              </div>
            </div>
          </div>
          <div className=' h-[35%] flex pl-[70px]'>
            <div className='w-[50%] h-full'>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> langage C</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> HTML / CSS</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> Tailwindcss</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> JavaScript (ES6+)</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> React js</span><br></br>
            </div>
            <div className='w-[50%] h-full'>
            <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> Node js</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> MongoDb</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> Next js</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> My SQL</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent'/> Rest API</span><br></br>
            </div>
          </div>
        </div>
        <div className=" w-[100%] md:w-[60%]  h-full ">
          <p className='text-[13px] first-letter:uppercase p-[20px]'>Une brève description contenant les informations nécessaires afin de me connaitre de point de vue plus proche, ainsi qu&apos;avoir une idée globale sur mon cursus académique et professionnel, avec les competences techniques.</p>
          <div className='w-full grid grid-cols-2 gap-6 '>
            <span className='flex items-center '>
              <BsArrowReturnRight className='mr-[5px] text-accent text-[20px] ' />
              <p className='  text-[12px] font-bold'>Date De naissance: </p>
              <span className='inline text-xxs'> 01 Août 1998</span>
            </span>
            <span className='flex items-center'>
              <BsArrowReturnRight className='mr-[5px] text-accent text-[20px]' />
              <p className=' text-[12px] mt-[22px] font-bold '>diplôme: <span className='text-xxs'>-technicien spécialisé en commerce <span className='text-xxs'><br></br>-attestation 9 mois full stack developer</span></span></p>
      
            </span>
            <span className=' flex items-center'>
              <BsArrowReturnRight className='mr-[5px] text-accent text-[20px]' />
              <p className=' text-[12px] font-bold'>Téléphone: <span className='inline text-xxs'>+212659511779</span></p>
            </span>
            <span className=' flex items-center'>
              <BsArrowReturnRight className='mr-[5px] text-accent text-[20px]' />
              <p className=' text-[12px] font-bold'>ville: <span className='inline text-xxs'>Agadir, MAROC</span></p>
            </span>
            <span className=' flex items-center'>
              <BsArrowReturnRight className='mr-[5px] text-accent text-[20px]' />
              <p className='  text-[12px] font-bold'>Email: <span className='inline text-xxs'>dsimo4323@gmail.com</span></p>
            </span>
            <span className=' flex items-center'>
              <BsArrowReturnRight className='mr-[5px] text-accent text-[20px]' />
              <p className='  text-[12px] font-bold'>Freelance: <span className='inline text-xxs'>Disponible</span></p>
            </span>
          </div>
          <p className='text-[13px] first-letter:uppercase first-line-padding-[20px] p-[20px] pt-[45px]'>Alors, Je suis Mohamed EDDAHMANI, j&apos;ai 25 ans, et je suis actuellement développeur full stack. Au cours du parcours académique, j&apos;ai effectué quelques stages pour mettre en pratique mes compétences techniques. Et j&apos;ai aussi travaillé en freelance, pour avoir plus d&apos;expérience et surtout développer mon savoir être. En termes d&apos;autoformation, j&apos;ai plusieurs certifications dans différents domaines (Backend, Frontend).</p>
        </div>
      </div>
    </>
  )
}

export default about
