import React, { Component } from 'react'

export class donation extends Component {
  render() {
    return (
       <section className="section credit">
        <div className="container">
          <div className='navbar gradient'>
              <span className="navbar-brand mb-0 p-3 h1 mx-3 font-weight-bold">Choose an option to donate</span>
                <ul className="nav justify-content-end mr-3 p-3">
                    <form className="form-inline md-form form-sm mt-0 mr-3">
                      <i className="fa fa-search" aria-hidden="true"></i>
                      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"  aria-label="Search"></input>           
                    </form>
                    <li className="nav-item">
                      <button type="button" className="btn btn-danger ml-3">Create Donation Option</button>
                    </li>

                    <li className="nav-item">            
                      {/* search  */}
                    </li>
                </ul>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Institution</th>
                <th scope="col">Country</th>
                <th scope="col">Address</th>
                <th scope="col">Budget €</th>
                <th scope="col">Transaction number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Charity Navigator</td>
                <td>USA</td>
                <td>1268 Goff Avenue</td>
                <td>10.000</td>
                <td>2294481606</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Donate</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Network for Good</td>
                <td>UK</td>
                <td>2582 Paradise Lane</td>
                <td>5.000</td>
                <td>2864439288</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Donate</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Charity Water</td>
                <td>MK</td>
                <td>Goce Delcev 25</td>
                <td>6.000</td>
                <td>4280652127</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Donate</button>
                </td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>GuideStar</td>
                <td>DE</td>
                <td>Flinterburg Strasse 241</td>
                <td>30.000</td>
                <td>3449633764</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Donate</button>
                </td>
              </tr>

              <tr>
                <th scope="row">5</th>
                <td>GlobalGiving</td>
                <td>TR</td>
                <td>Hayat sokak 54</td>
                <td>20.000</td>
                <td>6707557763</td>
                <td>
                  <button type="button" className="btn ml-3 bg-info text-white">Donate</button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>
    )
  }
}

export default donation
