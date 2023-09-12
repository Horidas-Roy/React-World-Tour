import { useState } from 'react';
import './Country.css'
import CoountryDetails from '../CountryDetails/CoountryDetails';
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const {name,flags,area,population,cca3}=country

    const [visited,setVisited]=useState(false)

    const handleVisited=()=>{
        setVisited(!visited)
    }
    // console.log(handleVisitedCountries)

    return (
        <div className={`country ${visited ? 'visited' :'Non-visited'}`}>
        {/* <div className={`country ${visited && 'visited'}`}> */}
            <h3 style={{color: visited ? 'white' : 'red'}}>Name: {name?.common}</h3>
            <img src={flags.png}></img>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>{ handleVisitedCountries(country)}}>Mark Visited</button><br></br>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <button onClick={handleVisited}>{visited ? "visited" :"Going"}</button>
            {/* {visited && 'I am visited this Country'} */}
            {visited ? 'I am visited this Country':'I want to visit this country'}
            <hr></hr>

            <CoountryDetails
             country={country}
             handleVisitedCountries={handleVisitedCountries}
             handleVisitedFlags={handleVisitedFlags}
            ></CoountryDetails>
        </div>
    );
};

export default Country; 