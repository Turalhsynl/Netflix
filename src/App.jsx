import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from './pages/landing/Landing';
import Login from './pages/Login/Login';
import Homepage from './pages/homepage/Homepage';
import Details from './pages/details/Details';
import Register from './pages/register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Homepage/>} />
          <Route path='/details' element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
