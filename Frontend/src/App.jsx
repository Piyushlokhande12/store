import { Navigate, Route,Routes } from "react-router-dom"
import React from "react"
import Home from "./Components/home/Home"
import {Toaster} from "react-hot-toast"
import Courses from "./courses/Courses"
import Signup from "./Components/Signup"
import Contact from "./Components/Contact"
import About from "./Components/About"
import authUser, { useAuth } from "../src/context/AuthProvider"
function App() {
  const [authUser,setAuthUser]=useAuth();
  return (
    <>
    
      <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
         <Route path="/courses" element={authUser?<Courses/>:<Navigate to="/signup"/>} ></Route>
         <Route path="/about" element={authUser?<About/>:<Navigate to="/signup"/>} ></Route>
         <Route path="/contact" element={authUser?<Contact/>:<Navigate to="/signup"/>} ></Route>
         <Route path="/signup" element={<Signup/>} ></Route>

    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App
