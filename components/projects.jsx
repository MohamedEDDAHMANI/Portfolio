import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";



const prejects = () => {



  return (
    <>
      <div className=' pb-[20px]'>
        <div className='flex items-center'>
          <span className='inline pr-5 pl-[150px] text-xsx'>Projects</span><hr className='w-[250px] h-[2px] text-accent inline'></hr>
        </div>
        <div className='w-full flex'>
          <div className='w-[50%]  flex items-center justify-center'>
            <div className='w-[80%] h-[300px]  rounded-[20px]'>
              <video  loop autoPlay muted className='w-full h-full rounded-[20px]'>
                <source src="/gestion-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className='w-[50%]'>
            <h2 className='text-right pr-[70px] text-blue-400'>Featured Project</h2>
            <h1 className='text-right pr-[70px] mb-[5px] font-bold'>Gestion-scolaire-V2</h1>
            <div className='flex justify-center'>
              <p className=' w-[74%] pr-[5px] p-[23px] rounded-[10px] text-[13px] shadow-blue'>Gestion-scolaire-V2 est une application de base de données dynamique avec un
                système de connexion sécurisé par jeton. Les utilisateurs peuvent ajouter,
                supprimer et mettre à jour des données grâce aux opérations CRUD. Le backend
                utilise Node.js, Express, et MongoDB, avec Redux pour une gestion efficace de
                l'état</p>
            </div>
            <div className='w-full relative flex justify-end space-x-4 pr-[70px] mr-[70px] mt-[20px]'>
              <a className='absolute left-20 text-[25px]' href="">
                <FaGithub />
              </a>
              <span className='mr-[15px] '>Reactjs<FaReact className='inline text-[20px] text-blue-500' /></span>
              <span className='mr-[15px] '>Nodejs<FaNodeJs className='inline text-[20px] text-green-500' /></span>
              <span className='mr-[15px] '>MongoDB<SiMongodb className='inline text-[20px] text-green-500' /></span>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default prejects
