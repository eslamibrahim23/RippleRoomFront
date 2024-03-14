import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'

function App() {

  return (
    <div className='w-full h-screen object-cover flex items-center bg-gray-300'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
