import React, { Suspense, useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Spinner from './components/Spinner/Spinner';
import donate from './Utils/images/food-donation.png';
import cov from './Utils/images/coronavirus.png';
//import support from './Utils/images/coffee.webp';

const Donate = React.lazy(() => import('./components/Donate/Donate'));
const FindHelp = React.lazy(() => import('./components/FindHelp/FindHelp'));
const AddResource = React.lazy(() => import('./components/AddResource/AddResource'));

function App() {
  useEffect(()=>{
    console.log("Icons from www.flaticon.com");
    console.log("Made by: https://twitter.com/SinghCode");
  },[]);
  return (
    <div className="App">
      <header>
        <NavLink to="/" exact> COV <span>SUPPORT</span></NavLink>
        <NavLink to="/donate" className="button"><span className="linkText">Donate</span> <img src={donate} alt="donate-icon"/></NavLink>
        {/* <a href="https://covid19india.org" className="button"><span className="linkText">Covid19 tracker </span> <img src={cov} alt="cov-tracker"/></a> */}
      </header> 
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/donate">
            <Donate/>
          </Route>
          <Route path="/find-help">
            <FindHelp/>
          </Route>
          <Route path="/add-resource">
            <AddResource/>
          </Route>
        </Switch>
      </Suspense>
      
      <footer>
        {/* Support my work by buying me a coffee here ~ <img className="supportMe" src={support} alt="click here to support the developer"/> */}
      </footer>
    </div>
  );
}

export default App;
