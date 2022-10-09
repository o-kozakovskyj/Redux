import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import weatherDataSelector from './weather.selectors';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.weatherData.map(({ name, temperature, id }) => (
            <li className="city" key={id}>
              <span className="city__name">{name}</span>
              <span className="city__temperature">{temperature}</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

Weather.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.array,
};
Weather.defaultValue = {
  weatherData: [],
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};
const mapState = state => ({
  weatherData: weatherDataSelector(state),
});
export default connect(mapState, mapDispatch)(Weather);
