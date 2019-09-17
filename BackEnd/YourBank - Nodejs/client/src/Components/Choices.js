import React from 'react'
import invoice from '../Components/images/invoice.jpg'
import confirmation from '../Components/images/credit-confirmation.gif'
import financeGuru from '../Components/images/finance-guru.gif'
import emptyWallet from '../Components/images/empty-wallet.jpg'


const Choices = () => {
  return (
  <section className="section">
  <div className="container-fluid choices">
  <div className="container">
      <div className="row title display-4 font-weight-bold text-muted" data-aos="fade-up" data-aos-duration="3000">
        <h1>What we offer</h1>
      </div>
      <div className="row first-row">
       <div className="col-md-6">
        <div>
          <img alt="invoice" className="img-fluid" src={invoice}/>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 ml-auto d-flex align-items-center mt-4 mt-md-0">
        <div className="first text-box shadow p-3 mb-5 bg-white rounded" data-aos="fade-left" data-aos-duration="1500">
          <h2 className="text-warning">Credit</h2> 
          <p className="margin-top-s text-muted">You can post your own credit option where people looking for a credit can see. You can post your own credit option where people looking for a credit can see. </p>
          <button type="button" className="btn btn-danger mt-1">Go to Credits</button>
        </div>
      </div>
    </div>


    <div className="row">
      <div className="col-md-6 col-lg-6 ml-auto d-flex align-items-center mt-4 mt-md-0">
        <div className="second text-box shadow p-3 mb-5 bg-white rounded" data-aos="fade-right" data-aos-duration="1500">
          <h2 className="text-info">Flexibility</h2>
          <p className="margin-top-s text-muted">Whether you’re at home or at work YourBank is always by your side, you can post and search for a credit wherever you are.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div>
          <img alt="animated" className="img-fluid" src={confirmation}/>
        </div>
      </div>
    </div>


    <div className="row">
      <div className="col-md-6">
        <div>
          <img alt="invoice" className="img-fluid" src={emptyWallet}/>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 ml-auto d-flex align-items-center mt-4 mt-md-0">
        <div className="first text-box shadow p-3 mb-5 bg-white rounded" data-aos="fade-left" data-aos-duration="1500">
          <h2 className="text-warning">Transactions</h2>
          <p className="margin-top-s text-muted">Empty wallet? In a hurry? No problem, just by entering credit card details you can instantly send and recieve money from your family and friends. </p>
          <button type="button" className="btn btn-danger mt-1">Go to Transactions</button>
        </div>
      </div>
    </div>


    <div className="row">
      <div className="col-md-6 col-lg-6 ml-auto d-flex align-items-center mt-4 mt-md-0">
        <div className="second text-box shadow p-3 mb-5 bg-white rounded" data-aos="fade-right" data-aos-duration="1500">
          <h2 className="text-info">Result</h2>
          <p className="margin-top-s text-muted">YourBank will leave your mind at ease and will never let you worry about a penny anymore. You can finally be the financial guru you always wanted to be!</p>
        </div>
      </div>
      <div className="col-md-6">
        <div>
          <img alt="invoice" className="img-fluid" src={financeGuru}/>
        </div>
      </div>
    </div>

  </div>
  </div>
  
</section>
  )
}

export default Choices;