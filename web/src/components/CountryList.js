import React from 'react';
import Country from './Country';
import Typography from '@material-ui/core/Typography';

const CountryList = ({ countries }) => {
    return (
        <div className="country-list">
            {countries.error && <Typography variant="body1" component="h3">{countries.error}</Typography>}
            {Array.isArray(countries) && countries.map((country) => <Country key={country.name} country={country}/>)}
        </div>
    )
}

export default CountryList