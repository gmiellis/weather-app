import React from 'react';
// import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';
import '../styles/app.scss';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      location: { city: '', country: '' },
      selectedDate: 0,
    };

    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.handleSearchLocation = this.handleSearchLocation.bind(this);
  }

  componentDidMount() {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast').
      then(response => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          selectedDate: response.data.forecasts[0].date,
        });
      });
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  handleSearchLocation(searchLocation) {
    axios.get(`http://mcr-codes-weather.herokuapp.com/forecast?city=${searchLocation}`).
      then((response) => {
        console.log(response);
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          selectedDate: response.data.forecasts[0].date,
        });
      }).catch(() => {
        alert('Please enter a valid UK city');
      });
  }

  render() {
    const selectedForecast =
      this.state.forecasts.find(forecast => forecast.date ===
      this.state.selectedDate);

    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm
          searchLocation={this.handleSearchLocation}
        />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

// App.propTypes = {
//   location: PropTypes.shape({
//     city: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//   }).isRequired,
//   forecasts: PropTypes.array.isRequired,
//   forecast: PropTypes.array,

// };

export default App;
