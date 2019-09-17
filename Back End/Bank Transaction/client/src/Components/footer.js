import React from 'react';



const Footer = () => {
  return (

<footer className="page-footer font-small indigo footer-elements">

  <div className="container">
    <div className="row text-center d-flex justify-content-center">

      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="/" className="text-secondary">Who we are</a>
        </h6>
      </div>

      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="/" className="text-secondary">Contact</a>
        </h6>
      </div>

      <div className="col-md-2 mb-3">
        <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-twt mx-1 text-secondary" href="/">
              <i className="fa fa-twitter"/>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-inst mx-1 text-secondary" href="/">
              <i className="fa fa-instagram"/>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1 text-secondary" href="/">
              <i className="fa fa-facebook"/>
              </a>
            </li>
        </ul>
      </div>

      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="/" className="text-secondary">Terms</a>
        </h6>
      </div>

      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="/" className="text-secondary">Recent events</a>
        </h6>
      </div>

    </div>
  </div>

  <div className="text-center py-3">© 2019 Copyright: 
    <a href="/" className="text-secondary"> YourBank.com</a>
  </div>

</footer>
  )
}

export default Footer;