import React from 'react'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate=useNavigate();
  return (
    <div >
      <footer className="footer sm:footer-horizontal bg-gray-200 text-black p-10  dark:bg-slate-900 dark:text-white dark:border">
  <aside>
    <h2 className="btn btn-ghost text-cyan-950 text-xl">PIYUSH LOKHANDE</h2>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">

    </svg>
    <p >
      <button className="btn btn-ghost text-xl" onClick={()=>navigate("/")}>PStore</button>
      <br />
       Since 2024
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Connect with Us</h6>
    <div className="grid grid-flow-col gap-4">
      <a  href="https://www.linkedin.com/in/piyush-lokhande-9118a0252">
 
 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM9 8h3.6v2.2h.05c.5-.95 1.75-2 3.6-2 3.85 0 4.55 2.5 4.55 5.8V24h-4v-7.6c0-1.8-.03-4.1-2.5-4.1s-2.88 1.95-2.88 4v7.7h-4V8z"/>
  </svg>
</a>

<a  href="https://www.youtube.com/channel/UCE9AMoETaah6X7ZE7NY_5Ug">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M19.6 3H4.4C3.07 3 2 4.07 2 5.4v13.2C2 19.93 3.07 21 4.4 21h15.2c1.33 0 2.4-1.07 2.4-2.4V5.4C22 4.07 20.93 3 19.6 3zM10 16.5v-9l6 4.5-6 4.5z"/>
  </svg>
</a>

<a href='https://github.com/Piyushlokhande12'>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.103.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
</a>

    </div>
  </nav>
</footer>
    </div>
  )
}

export default Footer
