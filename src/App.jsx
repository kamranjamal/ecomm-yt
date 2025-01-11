import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>
      </Routes>
    </div>
  )
}

export default App