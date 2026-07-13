import React from 'react'
import { Link } from 'react-router-dom'



const HomeBottomText = () => {
  return (
    <div className='font-[Font2]  '>
         <p className=' lg:w-62 w-64 lg:text-[14px] text-[12px] lg:ml-265 ml-24 lg:-mt-2 mt-8 lg:leading-5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>


  <div className='flex  items-center lg:mt-10  mt-8 mb-1 justify-center gap-2 '>
     <div className='lg:border-3 border-2 lg:h-36  flex items-center lg:px-10 px-4 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full uppercase'>
     <Link to='/Projects' className='text-[6vw] '>Projects</Link>
   </div>
   <div className='lg:border-3 border-2 lg:h-36 flex items-center lg:px-10 px-4 hover:border-[#D3FD50] hover:text-[#D3FD50]  border-white rounded-full uppercase'> 
    <Link to='/Agence' className='text-[6vw] ' >Agence</Link>
   </div>
  </div>
    </div>
  )
}

export default HomeBottomText