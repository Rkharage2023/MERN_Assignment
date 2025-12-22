import { Link, Links, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Orders from "./pages/Orders"
import Profile from "./pages/Profile"

// functional components
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </>
  )
}

export default App
