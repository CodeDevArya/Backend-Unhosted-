import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-violet-500 text-white py-3'>
      <div className="logo">
        <span className='font-bold text-xl mx-9'>iTask</span>
      </div>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer transition-all duration-75 hover:font-bold'>Home</li>
        <li className='cursor-pointer transition-all duration-75 hover:font-bold'>Your Todos</li>
      </ul>
    </nav>
  )
}

export default Navbar
