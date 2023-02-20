import React from 'react'
import Image from 'next/image'
import gowr from '../../public/images/gowr.jpg'
import nier from '../../public/images/nier.jpg'

function games() {
  return (
    <div className='bg-white flex grid-cols-3 dark:bg-black text-white h-screen w-full '>
      <div className='grid relative mx-8 grid-cols-3 h-52 w-52 gap-6'>
        <div ><Image src={nier} alt="genshin" /></div>
        <div ><Image src={gowr}  alt="genshin"/></div>
      </div>
    </div>
  )
}

export default games