import { useState } from 'react';
import {Cities} from '../../Utils/Cities';
import {db} from '../../database/config';
import search from '../../Utils/images/find.png';
import Card from '../Card/Card';
import classes from './FindHelp.module.css';
import Select from 'react-select';
import ResourceFilter from '../ResourceFilter/ResourceFilter';

function FindHelp() {
    const [city, setCity] = useState("");
    const [field, setField] = useState("");
    const [data, setData] = useState();

    const filterHandler = (val) => {
        setField(val);
    }

    const fetchData = () => {
        if(field === "" || city === "") {
            alert("Select City and Resource Type ");
        }
        else{
            db.ref(`Resources/${city}/${field}`).on("value", snapshot => {
                let resData = [];
                snapshot.forEach(snap => {
                    let value  = snap.val();
                    resData.push(<Card
                        city = {value.city}
                        description = {value.description}
                        field = {value.field}
                        name={value.name}
                        phone={value.phone}
                        source={value.source}
                        verified={value.verified}
                    />);
                });
                setData(resData);
            });
        } 
        
    }

  return (
    <div className={classes.findHelp}>
        <Select options={Cities} className={classes.select} onChange={(val) => setCity(val.label)} placeholder="Enter your city..." />
        <div className={classes.container}>
            Select help :
            <ResourceFilter click={filterHandler}/>
        </div>
        <button onClick={fetchData}><span>Search</span> <img src={search} alt="search-icon"/></button>
        <div className={classes.cards}>
            { data ? (data.length === 0) ? " Sorry ! No results found in your area. I am trying to add as many resources as possible! " : data : null }
        </div>
    </div>
  );
}

export default FindHelp;
