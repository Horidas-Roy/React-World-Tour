
const CountryData = (props) => {
    const {country,handleVisitedCountries,handleVisitedFlags}=props
    return (
        <div>
            <h3>Country data:{country.name.common}</h3>
        </div>
    );
};

export default CountryData;