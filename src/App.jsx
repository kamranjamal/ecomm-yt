import React from 'react'
import Product from './components/Product'

function App() {

  return (
    <div className='p-4'>
      <div className='flex gap-3 flex-wrap justify-center'>
      {
        [1,2,3,4,5,6,7,8,9,10].map((item) => <Product key={item}/>)
      }
      </div>
    </div>
  )
}

export default App