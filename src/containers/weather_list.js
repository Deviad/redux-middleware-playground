import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import PropTypes  from 'prop-types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import 'rxjs/add/operator/delay';

class WeatherList extends Component {

    static renderWeather(cityData)  {
            console.log(cityData);
            return <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
            </tr>

    };

    render () {
            return (
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                    </thead>
                    <tbody className="tbodyBind">
                    {
                        this.props.weather.map(
                        (cityData) => WeatherList.renderWeather(cityData)
                     )
                    }
                    </tbody>
                </table>
            )
    }
}

function mapStateToProps(state) {
    return { weather: (state.weather) }
}

export default connect(mapStateToProps)(WeatherList);