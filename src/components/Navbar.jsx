import React from 'react'

function Navbar() {
  return (
    <div className='justify-between flex px-8 py-4 shadow-xl '>
        <h1 className='text-3xl font-extrabold'>Ecomm YT</h1>
        <div>
            <ul className='flex gap-6'>
                <li className='text-lg hover:text-gray-600 cursor-pointer'>Home</li>
                <li className='text-lg hover:text-gray-600 cursor-pointer'>Product</li>
                <li className='text-lg hover:text-gray-600 cursor-pointer'>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar