import { useState } from 'react'
import Login from './Login/Login'
import Register from './Register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      {/* <Register/> */}
    </>
  )
}

export default App
