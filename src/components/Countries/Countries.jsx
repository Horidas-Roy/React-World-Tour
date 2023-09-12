import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"



const Countries = () => {
    const [countries,setCountries]=useState([]);
     
    const [visitedCountries,setVisitedCountries]=useState([]);

    const [visitedFlags,setVisitedFlags]=useState([])

    const handleVisitedCountries=(country)=>{
        // console.log("Add This To your country")
        
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags=(flag)=>{
        // console.log("add Flags")
        const newVisitedFlags=[...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags);
    }

    

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>visited: {visitedCountries.length}</h3>
                <ul>
                     {
                        visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                     }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag,idx)=><img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
            {
                countries.map(country=><Country 
                    key={country.cca3} 
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    ></Country>
                  )
            }
            </div>
        </div>
        
    );
};

export default Countries;

