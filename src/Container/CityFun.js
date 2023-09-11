import React from 'react';

function CityFun(props) {
    return (
        <div>
            <h1>City Component</h1>
            <h3>Country: {props.country_name}</h3>
            <p>City: {props.country_name === 'India' ? 'Surat' : 'London'}</p>
        </div>
    );
}

export default CityFun;