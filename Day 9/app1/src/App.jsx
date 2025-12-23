import { Route, Routes } from "react-router"
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login/> }/>
        <Route path="/register" element={<Register/> }/>
        <Route path="/home" element={<Home/> }/>
        <Route path="/profile" element={<Profile/> }/>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
