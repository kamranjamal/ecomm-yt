import React from 'react'
import Navbar from './Navbar'
import Product from './Product'


function Home() {

  return (
   <div >
    <Navbar/>
     <div className='p-4'>
      
      <div className='flex gap-3 flex-wrap justify-center'>
      {
        [1,2,3,4,5,6,7,8,9,10].map((item) => <Product key={item}/>)
      }
      </div>
    </div>
   </div>
  )
}

export default Home