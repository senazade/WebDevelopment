import React from 'react';
import nature from '../Components/images/nature.jpg';
import { Link } from 'react-router-dom';

const FooterImg = () => {
  return (
    <div className="mainContainer">
       <div className='fluid-container h-100 row align-items-center'>
        <div>
          <img alt="invoice" className="img-fluid nature-img" src={nature}/>
        </div>

       </div>
       <div className="header-container h-100">
          <div className="d-flex h-50 mt-5 text-center align-items-center">
             <div className="w-100">
                 <p className="display-1 font-weight-bold text-dark mt-5" data-aos="fade-down" data-aos-duration="3000">Start your journey now</p>
                 <p className="text-muted mt-5 w-50 mx-auto" data-aos="fade-up" data-aos-duration="3000">To take a trivial example, which of us ever undertakes loborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure. </p>
                 <Link to="/sign-up">
                 <button type="button" className="btn navButton btn-danger btn-lg mt-5" data-aos="fade-up" data-aos-duration="3000">Sign up</button>
                 </Link>
             </div>
          </div>     
      </div>
      </div>   
  )
}

export default FooterImg;