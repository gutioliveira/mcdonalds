import React from 'react';
import { render } from '@testing-library/react-native';

import FillerView from '../../../src/components/filler-view';

describe('<FillerView />', () => {
  it('Render with height and width', () => {
    const {debug, getByTestId} = render(<FillerView height={10} width={10}/>);
    expect(getByTestId('filler-view-id').props.style).toStrictEqual({width: 10, height: 10});
  });
});