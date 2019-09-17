import React from 'react'
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
       <div className='navbar navbar-light bg-light fixed-top scrolling-navbar '>
          <span className="navbar-brand mb-0 p-3 h1 mx-3 font-weight-bold">YourBank</span>
          <ul className="nav justify-content-end mr-3 p-3">
              <li className="nav-item">
                <a className="nav-link font-size text-secondary" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="/credit">Credit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="/donate">Donate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="/transaction">Transaction</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="/profile">Profile</a>
              </li>
              <li className="nav-item">            
                <button type="button" className="btn btn-danger ml-3">Sign in</button>
              </li>
          </ul>
       </div>
    </nav>
  )
}

export default Navbar;