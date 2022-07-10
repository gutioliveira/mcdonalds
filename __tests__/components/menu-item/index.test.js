import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';

import MenuItem from '../../../src/components/menu-item';

import configureStore from 'redux-mock-store';

describe('<MenuItem />', () => {

  const initialState = {
    menu: {
      loading: false,
      menu: {
        currency: 'USD',
        menus: [{name: 'Bevareges', items: []}]
      }
    }
  };
  const mockStore = configureStore();
  // const dispatch = jest.fn();
  let store;
  let mockDispatch;

  beforeEach(() => {
    store = mockStore(initialState);
    mockDispatch = jest.fn();
    store.dispatch = mockDispatch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders properly', () => {
    const {getByText, getByTestId, debug} = render(
      <Provider store={store}>
        <MenuItem item={{name: 'name', description: 'description', price: 1, url: 'url'}}/>
      </Provider>
    );
    expect(getByText('name')).not.toBeNull();
    expect(getByTestId('menu-item-image').props.source).toStrictEqual({uri: 'url'});
  });

  it('Dispatches action when clicking', () => {
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