import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '../src/containers/Detail';
import Wrapper from './helpers/Wrapper';

test('Detail is rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <Detail match={{ params: { term: 'house' } }}/>
    </Wrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
