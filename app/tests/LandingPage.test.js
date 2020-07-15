import React from 'react';
import renderer from 'react-test-renderer';
import LandingPage from '../src/components/Landing/LandingPage';
import Wrapper from './helpers/Wrapper';

test('LandingPage is rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <LandingPage />
    </Wrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});