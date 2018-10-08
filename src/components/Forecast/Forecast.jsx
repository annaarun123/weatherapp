import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Forecast.scss';

export default class Forecast extends Component {
  static propTypes = {
    forecast: PropTypes.array
  }
  constructor(props) {
    super(props);
  }

  
  render() {
    const forecast = this.props.forecast ? this.props.forecast.slice(0,5) : []
    return (
      forecast && forecast.length>0 ?
        <div >
          <ul className={styles.forecast}>
            <li key="header" className={styles.forecast}>
              <div className = "col-md-3">Date</div>
              <div className = "col-md-2">Day</div>
              <div className = "col-md-2">High</div>
              <div className = "col-md-2">Low</div>
              <div className = "col-md-3">Weather</div>
            </li>
            {forecast.map( (forecastItem, index) => 
              <li key={index} className={styles.forecast}>
                <div className = "col-md-3">{forecastItem.date}</div>
                <div className = "col-md-2">{forecastItem.day}</div>
                <div className = "col-md-2">{forecastItem.high}</div>
                <div className = "col-md-2">{forecastItem.low}</div>
                <div className = "col-md-3">{forecastItem.text}</div>
              </li>
              )}
          </ul>
        </div>
        : ''
    );
  }
}
