import React from 'react'
import headerpic from '../Components/images/success.mp4'
import { Link } from 'react-router-dom';

const NavImage = () => {
  return (
    <div className="mainContainer">
       <div className='fluid-container h-100 row align-items-center'>
       <video className="col video-fluid z-depth-1 mainVideo" playsInline autoPlay loop muted>
          <source src={headerpic} type="video/mp4" />
       </video>
       </div>
       <div className="header-container h-100">
          <div className="d-flex h-50 text-center align-items-center">
             <div className="w-100">
                 <h1 className="display-4 font-weight-bold text-muted" data-aos="fade-down" data-aos-duration="1500">Your Whole Life is</h1>
                 <p className="display-1 font-weight-bold text-dark" data-aos="fade-up" data-aos-duration="1500">About To Change</p>
                 <Link to="/sign-up">
                 <button type="button" className="btn navButton btn-danger btn-lg mt-5" data-aos="fade-up" data-aos-duration="3000" >Sign up</button>
                 </Link>
             </div>
          </div>
       </div>
    </div>
  )
}

export default NavImage;