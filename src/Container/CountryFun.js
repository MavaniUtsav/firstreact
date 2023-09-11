import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    // Hook 
    const [countryName, setCountryName] = useState('India');

    const changeCountry = () => {
        setCountryName('UK');
    }

    return (
        <div>
            <h1>Country Function based component</h1>
            <h3>Country: {countryName}</h3>
            <button onClick={changeCountry}>Change Country</button>

            <CityFun country_name={countryName}/>
        </div>
    );
}

export default CountryFun;