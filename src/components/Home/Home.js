import { NavLink } from 'react-router-dom';
import home from '../../Utils/images/home.png';
import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.content}>
          <h1>We see the opportunity to make a difference.</h1>
          <h3>Support others by posting resources, search help/resources in your area.</h3>
          <NavLink to="/find-help" className={classes.button}>Search Help</NavLink>
          <NavLink to="/add-resource" className={classes.button}>Post resources</NavLink>
      </div>
      <img src={home} alt="home"/>
    </div>
  );
}

export default Home;
