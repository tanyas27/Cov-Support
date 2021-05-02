import classes from './FindHelp.module.css';
import Select from 'react-select';
import {Cities} from '../../Utils/Cities';
import {Resources} from '../../Utils/Resources';
import { useState } from 'react';
import axios from 'axios';
import search from '../../Utils/images/find.png'

function FindHelp() {
    const [city, setCity] = useState("");
    const [field, setField] = useState("");
    const [data, setData] = useState([]);

    const cities = Cities.map((element) => {
        return { label:element, value: element }
    });

    const res = Resources.map((item,idx) => {
        return (<span key={idx}>
            <input className={[classes.hidden, classes.radioLabel].join(' ')} type="radio" name="accept-offers" id={item.label} onClick={() => {setField(item.label)}}/>
            <label className={classes.buttonLabel} htmlFor={item.label}>
            <span>{item.label}</span>
            </label>
        </span>);
    });

    const fetchData = () => {
        if(field === "" || city === "") {
            alert("Select City and Resource Type ");
        }
        else{
            axios.get("https://cov-cure-default-rtdb.asia-southeast1.firebasedatabase.app/Resources.json")
            .then(res => {
                let fetchData = [];
                for(let key in res.data){
                    fetchData.push({
                        ...res.data[key],
                        id: key
                    })
                }
                fetchData = fetchData.filter((item) => (item.city === city && item.field === field) );
                setData(fetchData);
            });
        } 

    }

  return (
    <div className={classes.findHelp}>
        <Select options={cities} className={classes.select} onChange={(val) => setCity(val.label)} placeholder="Enter your city..." />
        <div className={classes.container}>
            Select help :
            <div className={classes.buttonWrap}>
                {res}
            </div>
        </div>
        <button onClick={fetchData}><span>Search</span> <img src={search} alt="search-icon"/></button>
    </div>
  );
}

export default FindHelp;
