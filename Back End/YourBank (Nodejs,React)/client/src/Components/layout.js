import React from 'react'
import NavImage from './nav-image'
import Choices from './Choices'
import Donate from './donate'
import FooterImg from './footer-img';

const Layout = () => {
  return (
    <div>
       <div className='fluid-container'>
          <NavImage />
          <Choices />
          <Donate />
          <FooterImg />
       </div>
    </div>
  )
}

export default Layout;