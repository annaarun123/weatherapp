import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherInput.scss';

const WeatherInput = (props) => {
  const { city, onInputChange, onFormSubmit } = props;
  return (
    <div>
      <div className={styles.city}>Enter city</div>
      <div className={styles.cityInput}>
        <input
          placeholder="City Name"
          onChange={onInputChange}
          value={city}
          className={styles.cityInput}
        />
      </div>
      <button type="submit" className={styles.button} onClick={onFormSubmit}>Forecast</button>
    </div>
  );
};

WeatherInput.propTypes = {
  city: PropTypes.string,
  onInputChange: PropTypes.func,
  onFormSubmit: PropTypes.func,
};

export default WeatherInput;
