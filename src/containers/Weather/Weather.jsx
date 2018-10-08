import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as weatherActions from '../../redux/weather';
import WeatherInput from '../../components/WeatherInput/WeatherInput';
import Forecast from '../../components/Forecast/Forecast';
import SaleSuggestion from '../../components/SaleSuggestion/SaleSuggestion';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleFormSubmit = (event) => {
    const { city } = this.state;
    const { getForecast } = this.props;
    if (event) {
      event.preventDefault();
    }
    getForecast(city);
  };

  render() {
    const { city } = this.state;
    const { forecast } = this.props;
    return (
      <div>
        <div>
          <WeatherInput
            city={city}
            onInputChange={this.handleInputChange}
            onFormSubmit={this.handleFormSubmit} />
        </div>
        <div>
          <Forecast forecast={forecast} />
        </div>
        <div>
          <SaleSuggestion forecast={forecast} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.city,
  forecast: state.forecast
});

const mapDispatchToProps = dispatch => ({
  getForecast: (city) => {
    dispatch(weatherActions.getForecast(city));
  }
});

Weather.propTypes = {
  getForecast: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
