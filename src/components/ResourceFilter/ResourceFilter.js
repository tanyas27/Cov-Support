import imgIcon from '../../Utils/imgIcon';
import {Resources} from '../../Utils/Resources';
import classes from './ResourceFilter.module.css';

function ResourceFilter(props){
    const res = Resources.map((item,idx) => {
        return (<span key={idx}>
            <input className={[classes.hidden, classes.radioLabel].join(' ')} type="radio" name="accept-offers" id={item.label} onClick={() => props.click(item.label)}/>
            <label className={classes.buttonLabel} htmlFor={item.label}>
            <span>{item.label}<imgIcon/></span>
            </label>
        </span>);
    });
    return (
        <div className={classes.buttonWrap}>
            {res}      
        </div>
    );
}

export default ResourceFilter;