import React from 'react'
import bench from '../Components/images/bench.gif'
import { Link } from 'react-router-dom';

const Donate = () => {
  return (
    <section className="section">
      <div className="container-fluid">
          <div className="row first-row">
            <div className="col-md-6 col-lg-6 ml-auto d-flex align-items-center mt-4 mt-md-0">
              <div className="donate-title">
                <h1 className="text-dark font-weight-bold display-4" data-aos="fade-down" data-aos-duration="3000">Donate to those in need</h1>
                <p className="margin-top-s text-muted donate-text mt-4 mb-5" data-aos="fade-up" data-aos-duration="3000">Your own charitable donations can inspire your nearest and dearest to give to causes important to them, and could even bring about a family-wide effort to back a charity or charities that have special significance to you as a group.</p>
                <Link to="/donate">
                <button type="button" className="btn btn-danger btn-lg" data-aos="fade-up" data-aos-duration="3000" >Donate</button>
                </Link>
              </div>
            </div>
              <div className="col-md-6">
                <div>
                  <img alt="invoice" className="img-fluid donate-img" src={bench}/>
                </div>
              </div>
         </div>
      </div>
    </section>
  )
}

export default Donate;