import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = props => (

  <div className="forecast-details">
    <div className="forecast-details-date">
      <span>
        {moment(props.forecast.date).format('ddd Do MMM')}
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
        Wind Speed: {props.forecast.wind.speed}mph
      </span>
    </div>
    <div className="forecast-details-info">
      <span>
        Wind Direction: {props.forecast.wind.direction}&#8595;
      </span>
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
