import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from './pages/landing/Landing';
import Login from './pages/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
