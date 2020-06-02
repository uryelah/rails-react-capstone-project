import React from 'react';
import renderer from 'react-test-renderer';
import SignUpPage from '../src/containers/SignUpPage';
import Wrapper from './helpers/Wrapper';

test('SignUpPage is rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <SignUpPage type="UP" />
    </Wrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});