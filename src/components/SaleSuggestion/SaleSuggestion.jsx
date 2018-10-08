import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash.map';
import styles from './SaleSuggestion.scss';

export default class SaleSuggestion extends Component {
  static propTypes = {
    forecast: PropTypes.array
  }
  constructor(props) {
    super(props);
  }
  
  render() {
    const forecast = this.props.forecast ? this.props.forecast.slice(0,5) : []
    const bestDayForJacket = bestDayToSellJacket(forecast);
    const bestDayForUmbrella = bestDayToSellUmbrella(forecast);
    
    return (
      <div className={styles.salesuggestion}>
        { bestDayForJacket &&
        <div className={styles.suggestionList}>
          Jacket sale may be a good idea on 
          <span className={styles.suggestionDay}>{ bestDay(bestDayForJacket) }</span>
        </div>
        }
        { bestDayForUmbrella &&
        <div className={styles.suggestionList}>
          You might be better of selling Umbrella on 
          <span className={styles.suggestionDay}>{ bestDay(bestDayForUmbrella) }</span>
        </div>
        }
      </div>
    );
  }
}

const rainyOrderedWeatherLabel = [
  "Thunderstorms", "Rainy", "Rain", "Scattered Showers", "Cloudy", "Mostly Cloudy", "Partly Cloudy", "Sunny"
];

const bestDayToSellUmbrella = (forecast) => {
  let bestDayForUmbrella = '';
  for (let label of rainyOrderedWeatherLabel) {
    if(bestDayForUmbrella !== '') {
      break;
    }
    for (let dayWeather of forecast) {
      if(dayWeather.text === label) {
        if(bestDayForUmbrella === '') {
          bestDayForUmbrella = dayWeather;
        }
        break;
      }
    };
  }
  return bestDayForUmbrella;
}

const bestDayToSellJacket = (forecast) => {
  const sortedList = [...forecast].sort(compareByLowTemp);
  return sortedList[0];
}

const bestDay = (forecastObject) => forecastObject ? `${forecastObject.day} ${forecastObject.date}` : ''

const compareByLowTemp = (a,b) => {
  if (parseInt(a.low) < parseInt(b.low))
    return -1;
  if (parseInt(a.low) > parseInt(b.low))
    return 1;
  return 0;
}

