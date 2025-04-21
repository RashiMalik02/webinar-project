import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Webinars from "./Pages/Webinars"
import { WebinarProvider } from "./context/webinarContext";
import Home from "./Pages/Home"
import Settings from "./Pages/Settings"
import Manage from "./Pages/Manage"
import { SideBar } from './components/components/sideBar'


function App() {
  return (
    <WebinarProvider>
      <Router>
      <div className='flex'>
        <div className="transition-all delay-4000 hidden md:block">
          <SideBar />
        </div>

        <div className="p-4 ml-8 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <Home></Home>
              }
            />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          </div>
        </div>
      </Router>
    </WebinarProvider>
  )
}

export default App
