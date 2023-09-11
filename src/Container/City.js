import React from "react";

class City extends React.Component {
    render () {
        return (
            <div>
                <h2>City Component: {this.props.country_name}</h2>
                <p>City: {this.props.country_name === 'India' ? 'Surat' : 'London'}</p>
            </div>
        );
    }
}

export default City;