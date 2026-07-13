import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full  overflow-hidden'>
      <video className='h-full w-full object-cover  overflow-hidden' autoPlay loop muted src="../../../public/Video.mp4">

      </video>
    </div>
  )
}

export default Video