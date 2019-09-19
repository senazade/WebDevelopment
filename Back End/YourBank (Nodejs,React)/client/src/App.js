import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/navbar';
import Layout from './Components/layout';
import Footer from './Components/footer';
import SignUp from './Components/auth/SignUp';
import SignIn from './Components/auth/SignIn';
import credit from './Components/banking/credit';
import transaction from './Components/banking/transaction';
import donation from './Components/banking/donation';

AOS.init()

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path='/' component={Layout}></Route>
          <Route exact path='/sign-up' component={SignUp}></Route>
          <Route exact path='/sign-in' component={SignIn}></Route>
          <Route exact path='/credit' component={credit}></Route>
          <Route exact path='/donate' component={donation}></Route>
          <Route exact path='/transaction' component={transaction}></Route>
        </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
