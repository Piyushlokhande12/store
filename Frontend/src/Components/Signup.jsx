import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
const Signup = () => {
  const [email,setEmail]=useState();
  const [fullname,setFullname]=useState();
  const [password,setPassword]=useState();
  const handleform=async(e)=>{
    try{
    e.preventDefault();
    const data={email,fullname,password};
    console.log(email,fullname,password);
    const res=await axios.post('http://localhost:9000/user/signup',data);
    localStorage.setItem("Users",JSON.stringify(res.data.user));
    toast.success("signed successfully");
    
     } catch (err) {
       toast.error(err.response?.data?.message || "Signup failed");
    }

  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden bg-white dark:bg-slate-800 transition-all duration-300">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex items-center justify-center p-6 bg-indigo-100 dark:bg-slate-700">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid&w=740"
            alt="Signup Illustration"
            className="w-full h-auto max-w-sm"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 relative">
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-700 dark:text-white"
          >
            ✕
          </Link>

          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800 dark:text-white">Create an Account</h2>

          <form className="space-y-6" onSubmit={handleform}>
            <input
            onChange={(e)=>setFullname(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            />
            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            />
            <input
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            />

            <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-xl transition duration-300">
              Sign Up
            </button>

            <p className="text-center text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <Link to="/" className="text-indigo-600 hover:underline dark:text-green-400">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
