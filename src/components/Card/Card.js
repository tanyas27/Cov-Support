import classes from './Card.module.css';
import yes from '../../Utils/images/verification.png';
import no from '../../Utils/images/no.png';

function Card(props) {
  return (
    <div className={classes.Card}>
      <div className={classes.head}>
        {props.field} <br/>
        Name: {props.name}
      </div>
      <div className={classes.body}>
        <span className={classes.title}>Phone:</span> {props.phone} <br/>
        <span className={classes.title}>Other Information:</span> {props.description}<br/>
        <span className={classes.title}>City:</span>{props.city}<br/>
        <span className={classes.title}>Verified:</span>{props.verified ? <img src={yes} alt="verified"/> : <img src={no} alt="not verified"/>}<br/>
        <span className={classes.title}>Source:</span> {props.source}
      </div>
    </div>
  );
}

export default Card;
