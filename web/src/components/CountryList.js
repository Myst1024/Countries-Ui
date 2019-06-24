import React from 'react';
import Country from './Country';

const CountryList = ({ countries }) => {

    return (
        <div className="country-list">
            {countries.map((country) => <Country key={country.name} country={country}/>)}
        </div>
    )
}

export default CountryList