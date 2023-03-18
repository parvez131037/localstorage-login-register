import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Login from './Components/Login'
import Register from './Components/Register'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Homepage/>}></Route> */}
        <Route path="/" element={<ProtectedRoute><Homepage/></ProtectedRoute>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
