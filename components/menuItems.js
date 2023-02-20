"use client"

import React, {useState} from 'react'
import Link from 'next/link'

function menuItems() {
    const [show, setShow ] = useState(false)
  return (
    <div className='hidden md:flex inset-0 align-middle justify-center px-2'>
       <div className='z-10 fixed self-center inset-0 bg-black/40 backdrop-blur-md flex flex-col uppercase justify-center gap-10 items-center left-1/4'>
            <Link className='px-3 rounded hover:scale-105 hover:bg-slate-700' href='/'>Home</Link>
            <Link className='px-3 rounded hover:scale-105 hover:bg-slate-700' href='/games'>Games</Link>
            <Link className='px-3 rounded hover:scale-105 hover:bg-slate-700' href='/about'>About</Link>
       </div>
      </div>
  )
}

export default menuItems