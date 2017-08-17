import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes  from 'prop-types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
class WeatherList extends Component {
    renderWeather = (cityData) => {
                        console.log(cityData);
                            return   <tr key={cityData.city.id}>
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
                <tbody>
                {this.props.weather
                    .map(this.renderWeather)}
                {/*{console.dir(this.props.weather)}*/}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return { weather: (state.weather) }
}

export default connect(mapStateToProps)(WeatherList);