import React, { Component } from 'react'
import computer from '../images/computer.jpg';

class SignUp extends Component {
  state = {

  }

  render() {
    return (
      <section className="section">
     
      <div className="container">
        <div className="row shadow p-3 mb-5 bg-white rounded sign-up">
          <div className="col-sm-6 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>
                <form className="form-signin">
                <div className="form-label-group">
                    <input type="name" id="inputName" className="form-control" placeholder="Name" required autofocus></input>
                    <label for="inputName">Name</label>
                </div>

                <div className="form-label-group">
                    <input type="Username" id="inputuserName" className="form-control" placeholder="Username" required autofocus></input>
                    <label for="inputuserName">Username</label>
                </div>

                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input type="Phonenumber" id="inputPhonenumber" className="form-control" placeholder="Phonenumber" required autofocus></input>
                    <label for="inputPhonenumber">Phonenumber</label>
                 </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                    <label for="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
                  <hr className="my-4"></hr>
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fa fa-google mr-2"></i> Sign up with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fa fa-facebook mr-2"></i> Sign up with Facebook</button>
              </form>
              </div>
            </div>
          </div>
     
          <div className="col-md-6 mt-5 p-3">
            <div className="mt-5 mx-5 p-3">
              <img alt="computer" className="img-fluid mt-5 p-3" src={computer}/>
            </div>
          </div>
        </div>
      </div>

      </section>
    )

  }
}

export default SignUp;