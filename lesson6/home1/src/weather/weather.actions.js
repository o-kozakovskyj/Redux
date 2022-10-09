import fetchWeatherData from './weather.gateway';

export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';

export const weatherDataRecieved = weatherData => ({
  type: WEATHER_DATA_RECIEVED,
  payload: {
    weatherData,
  },
});
export const getWeatherData = () => dispatch => {
  fetchWeatherData().then(weatherData => {
    dispatch(weatherDataRecieved(weatherData));
  });
};
