import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="text-white flex w-full p-4 z-[100] justify-between absolute">
            <div>
            <p className='text-2xl text-red-600 font-bold'>NETFLIX</p>
            </div>
            <div className='flex'>
                <p>Sign In</p>
                <span className='bg-red-600 px-3 mx-3 rounded-md'>Sign Up</span>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
