import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <Login />
      </div>
  )
}

export default App
