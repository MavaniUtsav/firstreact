import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CountryName: 'India'
        }
    }

    changeCountry = () => {
        this.setState({
            CountryName: 'UK'
        })
    }
    
    render() {
        return (
            <div>
                <h1>Country Component</h1>
                <p>Our Country Name is: {this.state.CountryName}</p>
                <button  onClick={this.changeCountry}>Change Country</button>

                <City country_name={this.state.CountryName}/>
            </div>
        );
    }
}

export default Country;