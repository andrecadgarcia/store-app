import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper).toBeTruthy();
  });
});
