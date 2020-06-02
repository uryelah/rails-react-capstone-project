import React from 'react';
import renderer from 'react-test-renderer';
import SearchPage from '../src/containers/SearchPage';
import Wrapper from './helpers/Wrapper';

test('SearchPage is rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <SearchPage match={{ params: { id: 6 } }}/>
    </Wrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
