import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import PropTypes  from 'prop-types';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import map from 'lodash/fp/map';
import flatten from 'lodash/fp/flatten';
import sortBy from 'lodash/fp/sortBy';
import compose from 'lodash/fp/compose';
import take from 'lodash/fp/take';

class WeatherList extends Component {


    renderWeather()  {
        console.log(this.props);
        return this.props.weather.map(
            (cityData) => {
                const city_id = cityData.city.id;
                const city_name = cityData.city.name;
                const city_temps = compose(take(8),map(data => data.main.temp))(cityData.list);
                const city_pressures = compose(take(8),map(data => data.main.pressure))(cityData.list);
                const city_humidities = compose(take(8),map(data => data.main.humidity))(cityData.list);
                const {lon, lat} = cityData.city.coord;

                
               return ( <tr key={city_id}>
                            <td><GoogleMap lon={lon} lat={lat}/></td>
                            <td><Chart data={city_temps} color="orange" units="K"/></td>
                            <td><Chart data={city_pressures} color="green" units="hPa"/></td>
                            <td><Chart data={city_humidities} color="black" units="%"/></td>
                        </tr>
                      );
            }
        );
    };

    render () {
            return (
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                    </thead>
                    <tbody className="tbodyBind">
                    { this.renderWeather() }
                    </tbody>
                </table>
            );
    }
}

function mapStateToProps(state) {
    return { weather: (state.weather) };
}

export default connect(mapStateToProps)(WeatherList);