import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from '../src/containers/Favorites';
import Wrapper from './helpers/Wrapper';

test('Detail is rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <Favorites />
    </Wrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
