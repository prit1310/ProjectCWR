import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Services from './pages/Services'
import Reports from './pages/Reports'
import Payments from './pages/Payments'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'

function App() {

  return (
   <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/service' element={<Services/>} />
          <Route path='/report' element={<Reports/>} />
          <Route path='/payment' element={<Payments/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
