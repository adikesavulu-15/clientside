import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <section className="topbar shadow-lg">
        <div className='title'>
          <Link to="/">
            <img src="/download.png" alt="Swiggy" />
          </Link>
        </div>
        {/* <div className='location'>
            Others&nbsp;Darsi-523247
        </div> */}
        <div className='search'>
          <input type="search" placeholder='Search for Dishes' />
        </div>
        <div className='profile'>
          Login/Register
        </div>
    </section>
  )
}

export default Navbar