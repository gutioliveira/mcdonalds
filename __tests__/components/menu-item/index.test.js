import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
import * as reactRedux from 'react-redux';

import MenuItem from '../../../src/components/menu-item';

import configureStore from 'redux-mock-store';

describe('<MenuItem />', () => {

  const initialState = { output: 10 };
  const mockStore = configureStore();
  // const dispatch = jest.fn();
  let store;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Dispatches action when clicking', () => {
    store = mockStore(initialState);
    const mockDispatch = jest.fn();
    store.dispatch = mockDispatch;
    const {getByTestId} = render(
      <Provider store={store}>
        <MenuItem item={{name: 'name', description: 'description', price: 1, url: 'url'}}/>
      </Provider>
    );
    const touchable = getByTestId('menu-item-touchable');
    fireEvent.press(touchable);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_MODAL_VALUE',
      payload: {name: 'name', description: 'description', price: 1, url: 'url'}
    });
  });
});