import classes from './AddResource.module.css';
import Select from 'react-select';
import {Cities} from '../../Utils/Cities';
import {Resources} from '../../Utils/Resources';
import { useState } from 'react';
import axios from 'axios';

function AddResource(props) {
    const [form, setForm] = useState({
        city: "",
        name: "",
        phone:"",
        description:"",
        verified: false,
        source:"Not Available",
        field: ""
    });

    const [show, setShow] = useState(false);

    const cities = Cities.map((element) => {
        return { label:element, value: element }
    });

    const res = Resources.map((item,idx) => {
        return (<span key={idx}>
            <input className={[classes.hidden, classes.radioLabel].join(' ')} type="radio" name="resource" id={item.label} onClick={() => {setForm({...form, "field": item.label})}}/>
            <label className={classes.buttonLabel} htmlFor={item.label}>
            <span>{item.label}</span>
            </label>
        </span>);
    });

    const handleInput = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setForm(prev => {return {
            ...form,
            [name]: value
        }});
    }

    const submitForm = (event) => {
        event.preventDefault();  
        if(form.field === "" || form.city === "") {
            alert("Add City and Resource Type ");
        } 
        else{
            axios.post( 'https://cov-cure-default-rtdb.asia-southeast1.firebasedatabase.app/Resources.json/city="Adilabad"', form )
            .then( response => {
                setShow(true);
                setTimeout(()=>{window.location.reload();},2500);
                
            });
        }
    }

  return (
    <div className={classes.addResource}>
        <div className={classes.note}>
            Please add verified information as this could help save someone's life !
        </div>
        <div className={classes.container}>
            <p>Select resource type :</p>
            <div className={classes.buttonWrap}>
                {res}
            </div>
        </div>
        <form onSubmit={submitForm} >
            <div className={classes.ty} style={{display: show ? "block" : "none"}}>Thankyou for doing your bit in helping others !</div>
            <Select options={cities} className={classes.select} onChange={(val) => setForm({...form, "city":val.label})} placeholder="Enter your city..."/>
            <input className="form-control" name="name" placeholder="Contact Person..." onBlur={e => handleInput(e)} required/>
            <input className="form-control" name="phone" type="tel" pattern="[0-9]{10}" onBlur={e => handleInput(e)} placeholder="10 Digit Contact Number : [123 456 7890]" required/>
            <textarea className="form-control" rows="3" name="description" onBlur={e => handleInput(e)}placeholder="Description / Other Info..."></textarea>
            <div className='custom-control custom-switch'>
                <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches'
                name="verified"
                readOnly
                onChange={handleInput}
                />
                <label className='custom-control-label' htmlFor='customSwitches'>
                Verified 
                </label>
            </div>
            <input className="form-control" name="source" type="url" onBlur={e => handleInput(e)} placeholder="Source link"/>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default AddResource;
