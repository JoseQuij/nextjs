import React from 'react'
import gemshin from '../public/images/gemshin.png'
import Image from 'next/image'

function Home() {
  return (
    <div className='w-full h-screen' >
        <Image  src={gemshin} className='h-full' alt="genshin"/>
        {/* <div className='flex '>
            <div className='rounded-full absolute m-auto bg-emerald-700 h-80 w-80 translate-x-24 translate-y-12'></div>
            <div className='rounded-full bg-slate-900 h-80 w-80 translate-x-96 translate-y-80'></div> */}
        
        <form className='h-4/6 w-1/2 rounded-md inset-0 bg-black/20 backdrop-blur-lg absolute border border-black  m-auto shadow-md py-12 px-7'>
                <h2 className='block font-bold text-xl'>Please Log in</h2>
                <input className='block w-4/5 h-12 my-6' type='text' placeholder='Enter your email'></input>
                <input className='block w-4/5 h-12 my-6' type='text' placeholder='password'></input>
                <button className='pt-4 bg-slate-400 text-white w-1/3 py-4 h-auto rounded-lg' type='submit'>Login</button>
        </form>

        
    </div>
  )
}

export default Home