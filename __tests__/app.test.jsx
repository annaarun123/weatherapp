import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import App from '../src/App';
import Weather from '../src/containers/Weather/Weather';
import configureStore from '../src/configureStore.js';

describe('<App />', () => {
  const store = configureStore()
  const wrap = mount(<Provider store={store}><App /></Provider>);

  it('renders', () => {
    expect(wrap.find(App).exists()).toBe(true);
  });

  it('contains Weather container', () => {
    expect(wrap.find(Weather).exists()).toBe(true);
  });
});
