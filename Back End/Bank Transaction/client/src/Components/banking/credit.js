import React, { Component } from 'react'

export class credit extends Component {
  render() {
    return (
      <section className="section credit">
        <div className="container">
          <div className='navbar gradient'>
              <span className="navbar-brand mb-0 p-3 h1 mx-3 font-weight-bold">Credits</span>
                <ul className="nav justify-content-end mr-3 p-3">
                <form className="form-inline md-form form-sm mt-0 mr-3">
                      <i className="fa fa-search" aria-hidden="true"></i>
                      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"  aria-label="Search"></input>           
                </form>
                    <li className="nav-item">
                      <button type="button" className="btn btn-danger btn-lg ml-3">Add credit</button>
                    </li>
                    <li className="nav-item">            
                      {/* search  */}
                    </li>
                </ul>
          </div>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Timeframe (Months) </th>
                <th scope="col">Interest (%)</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>30.000</td>
                <td>12</td>
                <td>5</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Apply</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>60.000</td>
                <td>24</td>
                <td>12</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Apply</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Sam</td>
                <td>15.000</td>
                <td>6</td>
                <td>4</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Apply</button>
                </td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>Harry</td>
                <td>10.000</td>
                <td>6</td>
                <td>2</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Apply</button>
                </td>
              </tr>

              <tr>
                <th scope="row">5</th>
                <td>George</td>
                <td>120.000</td>
                <td>36</td>
                <td>20</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Apply</button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>
    )
  }
}

export default credit
