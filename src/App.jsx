import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from './pages/landing/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
