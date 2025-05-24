import { Route,Routes } from "react-router-dom"
import React from "react"
import Home from "./Components/home/Home"

import Courses from "./courses/Courses"
import Signup from "./Components/Signup"
function App() {

  return (
    <>
    
      <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
         <Route path="/courses" element={<Courses/>} ></Route>
         <Route path="/signup" element={<Signup/>} ></Route>
    </Routes>
    </div>
    </>
  )
}

export default App
