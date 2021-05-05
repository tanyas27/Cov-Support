import classes from './Card.module.css';
import yes from '../../Utils/images/verification.png';
import no from '../../Utils/images/no.png';

function Card(props) {
  const copyText = `
  Resource Available: ${props.field} \n 
  Name: ${props.name} \n
  Phone: ${props.phone} \n
  City: ${props.city} \n
  Description: ${props.description} \n
  For more such resource related information, 
  visit: https://cov-support.web.app/find-help
  `;
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
        <button className={classes.copy} onClick={() => {navigator.clipboard.writeText(copyText)}}>Copy</button>
      </div>
    </div>
  );
}

export default Card;
