import React from 'react'
import ProjectCard from '../components/Projects/ProjectCard'
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';


const Projects = () => {

 const project = [
  {
    image1: "/Photoes/image1.jpg",
    image2: "/Photoes/image2.jpg",
  },
  {
    image1: "/Photoes/image3.jpg",
    image2: "/Photoes/image4.jpg",
  },
  {
    image1: "/Photoes/image5.jpg",
    image2: "/Photoes/image6.jpg",
  },
  {
    image1: "/Photoes/image7.jpg",
    image2: "/Photoes/image8.jpg",
  },
   {
    image1: "/Photoes/image4.jpg",
    image2: "/Photoes/image3.jpg",
  },
   {
    image1: "/Photoes/image2.jpg",
    image2: "/Photoes/image1.jpg",
  },
];
gsap.registerPlugin(useGSAP,ScrollTrigger)

useGSAP(function(){
  gsap.from('.hero',{
    height:'100px',
    stagger:{
      
      amount:0.3
      
    },
    scrollTrigger:{
      trigger:'.lol',
      start:'top 100%',
     end:'top -400%',
      scrub:true,

    }

  })
})
  return (
    <div className='lg:p-4 p-2'>
     <div className=' pt-[45vh]'>
       <h2 className='font-[font2] lg:text-[13vw] text-7xl uppercase'>Projets</h2>
     </div>
     <div className='-lg:mt-6 lol'>

     {project.map((elem,idx)=>{
        return (
       <div key={idx} className='hero w-full lg:h-150 mb-4 flex  lg:flex-row flex-col lg:gap-4 gap-2 '>
        <ProjectCard 
        image1 = {elem.image1} 
        image2 = {elem.image2}
        />

       </div>
       );
     })}
      
      
     </div>
      </div>
  )
}

export default Projects