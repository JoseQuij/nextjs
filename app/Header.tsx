import React from 'react'
import MenuItems from '../components/menuItems'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex justify-between align-middle p-5 text-center text-white font-medium bg-gradient-to-b from-slate-700 to-black'>
      <div className='uppercase'>this is a header for the website</div>    
      <div className='flex justify-center px-2'>
        <Link className='px-3 rounded hover:scale-105 hover:bg-slate-700' href='/'>Home</Link>
        <Link className='px-3 rounded hover:scale-105 hover:bg-slate-700' href='/games'>Games</Link>
        <Link className='px-3 rounded hover:scale-105 hover:bg-slate-700' href='/about'>About</Link>
        
      </div>
      <MenuItems />
    </div>
  )
}

export default Header