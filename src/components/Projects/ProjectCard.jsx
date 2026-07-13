import React from 'react'

const ProjectCard = (props) => {
  return (
   
    <>
     <div className='lg:w-1/2 group  hover:rounded-[70px] transition-all relative rounded-none  overflow-hidden h-full'>
        <img  className=" h-full w-full object-cover"src={props.image1}></img>
        <div className='absolute top-0 left-0 opacity-0 group hover:opacity-100 transition-all flex items-center justify-center h-full w-full bg-black/10'>
          <h2 className='   uppercase text-4xl font-[font1] border-3 text-white border-white  pt-1 px-5 rounded-full '>Vior le projet</h2></div>
          </div>

           <div className='lg:w-1/2 group  hover:rounded-[70px] transition-all relative rounded-none  overflow-hidden h-full'>
        <img  className=" h-full w-full object-cover"src={props.image2}></img>
        <div className='absolute top-0 left-0 opacity-0 group hover:opacity-100 transition-all flex items-center justify-center h-full w-full bg-black/10'>
          <h2 className='   uppercase text-4xl font-[font1] border-3 text-white border-white  pt-1 px-5 rounded-full '>Vior le projet</h2></div>
          </div>
          
          </>
       
        
      
  )
}

export default ProjectCard