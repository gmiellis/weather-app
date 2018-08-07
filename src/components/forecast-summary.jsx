import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';
import '../styles/forecast-summary.scss';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="summary-date">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="summary-icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
    <div className="summary-temperature">
      <span>
        {props.temperature}&deg;c
      </span>
    </div>
    <div className="summary-description">
      <span>
        {props.description}
      </span>
    </div>
    <button className="deetsButtons" onClick={() => props.onSelect(props.date)}>
      More details
    </button>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
