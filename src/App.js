import './App.css';
import Home from './components/Home/Home';
import donate from './Utils/images/food-donation.png';
import cov from './Utils/images/coronavirus.png';
import Donate from './components/Donate/Donate';
import { NavLink, Route, Switch } from 'react-router-dom';
import FindHelp from './components/FindHelp/FindHelp';
import AddResource from './components/AddResource/AddResource';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/" exact> COV <span>SUPPORT</span></NavLink>
        <NavLink to="/donate" className="button"><span className="linkText">Donate</span> <img src={donate} alt="donate-icon"/></NavLink>
        <a href="https://covid19india.org" className="button"><span className="linkText">Covid19 tracker </span> <img src={cov} alt="cov-tracker"/></a>
      </header>
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
      <footer>To support the developer: Donate here.</footer>
    </div>
  );
}

export default App;
