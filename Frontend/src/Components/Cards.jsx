import React from 'react'

const Cards = ({item}) => {
  return (
    <div className="my-20">
      <div className="card bg-base-100 w-70 m-3 shadow-sm hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
  <figure className="px-10 pt-10m bg-gray-100">
    <img
      src={item.image}
      alt="books"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Books</h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="my-1 mx-2 text-1xl text-green-600">$ free</div>
      <button className="btn btn-primary hover:bg-black text-white">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
