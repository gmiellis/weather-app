import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../styles/forecast-details.scss';

const getWindDirection = direction => {
  switch (direction) {
    case 'n':
      return '0x21D1';
      break;
    case 'nne':
      return '0x21D7;';
      break;
    case 'ne':
      return '0x21D7';
      break;
    case 'ene':
      return '0x21D7';
      break;
    case 'e':
      return '0x21D2';
      break;
    case 'ese':
      return '0x21D8';
      break;
    case 'se':
      return '0x21D8';
      break;
    case 'sse':
      return '0x21D8';
      break;
    case 's':
      return '0x21D3';
      break;
    case 'ssw':
      return '0x21D9';
      break;
    case 'sw':
      return '0x21D9';
      break;
    case 'wsw':
      return '0x21D9';
      break;
    case 'w':
      return '0x21D0';
      break;
    case 'wnw':
      return '0x21D6';
      break;
    case 'nw':
      return '0x21D6';
      break;
    case 'nnw':
      return '0x21D6';
      break;
    default:
      return null;
  }
};

const ForecastDetails = props => (

  <div className="forecast-details">
    <div className="forecastdeetscontainer">
      <div className="forecast-details-date">
        <span>
          <b>{moment(props.forecast.date).format('ddd Do MMM')}</b>
        </span>
      </div>
      <div className="forecast-details-info">
        <span>
          Max Temp: {props.forecast.temperature.max}&deg;c
        </span>
      </div>
      <div className="forecast-details-info">
        <span>
          Min Temp: {props.forecast.temperature.min}&deg;c
        </span>
      </div>
      <div className="forecast-details-info">
        <span>
          Humidity: {props.forecast.humidity}%
        </span>
      </div>
      <div className="forecast-details-info">
        <span>
          Wind Speed: {props.forecast.wind.speed} mph
        </span>
      </div>
      <div className="forecast-details-info">
        <span>
          Wind Direction: {props.forecast.wind.direction.toUpperCase()} {String.fromCharCode(parseInt(`${getWindDirection(props.forecast.wind.direction)}`, 16))}
        </span>
      </div>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};


export default ForecastDetails;
