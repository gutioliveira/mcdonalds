import React from 'react';
import renderer from 'react-test-renderer';

import FillerView from '../../../src/components/filler-view';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<FillerView />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});