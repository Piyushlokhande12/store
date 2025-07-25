import React, { useEffect, useState } from 'react'
import Cards from "./Cards";
import { Link } from "react-router-dom";
import list from "../../public/list.json"
import axios from "axios"
import backendUrl from '../config/api';

console.log(backendUrl); // should log: https://store-yb82.onrender.com

const Course = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getbook=async()=>{
      try{
        const res=await axios.get(`${backendUrl}/book`);
        setBook(res.data);
        console.log(res);
      }
      catch(e){
        console.log(e)
      }
    }
    getbook();
  },[])
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white dark:border">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-700"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course
