import React from 'react';
import Enzyme from 'enzyme';
import LocationDetails from '../../src/components/location-details';

it('renders the passed city and country in a h1 tag', () => {
  // creates element
  const wrapper = Enzyme.shallow((
    <LocationDetails city="foo" country="bar" />
  ));
  // finds element
  const text = wrapper.find('h1').text();
  // test
  expect(text).toEqual('foo, bar');
});
