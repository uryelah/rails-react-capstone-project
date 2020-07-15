import React from 'react';
import renderer from 'react-test-renderer';
import List from '../src/containers/List';
import Wrapper from './helpers/Wrapper';

test('List is rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <List />
    </Wrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});