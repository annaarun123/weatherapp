import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './redux/weather';

export default function configureStore(preloadedState) {
    return createStore(
      reducers,
      preloadedState,
      applyMiddleware(thunkMiddleware)
    )
  }
  