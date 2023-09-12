import CountryData from "../CountryData/CountryData";

const CoountryDetails = (props) => {
    // const {country,handleVisitedCountries,handleVisitedFlags}=props
    return (
        <div>
            <h3>country details:</h3>
            <hr></hr>
            <CountryData {...props}></CountryData>
            {/* <CountryData
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
        </div>
    );
};

export default CoountryDetails;