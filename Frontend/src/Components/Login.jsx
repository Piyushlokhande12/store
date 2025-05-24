import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const handleform=(e)=>{
    e.preventDefault();
    console.log(email,password);
  }
  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box  dark:bg-slate-900 dark:text-white dark:border  bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-slate-900 items-center justify-center px-4 ">
    <form method="dialog" onSubmit={handleform}>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-lg">Login!</h3>
       <div className="mt-4 space-y-8">
        <input type='email'   onChange={(e)=>setEmail(e.target.value)} className="w-80 px-3 py-1 border rounded-md outline-none" placeholder='enter email' ></input>
     <input type='password'   onChange={(e)=>setPassword(e.target.value)} className="w-80 px-3 py-1 border rounded-md outline-none" placeholder='enter password' ></input>
     <div className="flex justify-around mt-6">
              <button className="bg-blue-800 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-green-600 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
       </div>
       </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
