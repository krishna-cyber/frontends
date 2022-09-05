
import './App.css'
// importing react router dom routes route version 6
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
    <div className="pages">
    <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
