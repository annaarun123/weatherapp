import axios from 'axios';

const GET_FORECAST = 'GET_FORECAST';
const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

const initialState = {
  forecast: [],
  loaded: false,
  isLoading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_FORECAST:
    {
      return {
        ...state,
        isLoading: true,
      };
    }
    case RECEIVE_FORECAST:
    {
      console.log('In RECEIVE_FORECAST')
      return {
        ...state,
        isLoading: false,
        loaded: true,
        forecast: action.response.data.query.results.channel.item.forecast,
      };
    }
    default:
      return state;
  }
}

export const getForecast = (city) => {
    return (dispatch) => {
        dispatch({type: GET_FORECAST})
        const url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")&format=json&env=store://datatables.org/alltableswithkeys`;
        return axios.get(url).then((response) => {
            console.log(response);
            dispatch(receiveForecast(response))
        });
    };
};

export const receiveForecast = (response) => {
  return {
    type: RECEIVE_FORECAST,
    response
  };
}