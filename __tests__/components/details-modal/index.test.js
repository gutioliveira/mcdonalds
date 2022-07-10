import React from 'react';
import * as axios from "axios";
import { Provider } from 'react-redux';
import { render, waitFor } from '@testing-library/react-native';

import DetailsModal from '../../../src/components/details-modal';
import { store as realStore } from '../../../src/redux';
import configureStore from 'redux-mock-store';

jest.mock('axios');

describe('<DetailsModal />', () => {

  const initialState = (selected) => ({ 
    menu: {
      loading: false,
      menu: {
        currency: 'USD',
        menus: [{name: 'Bevareges', items: []}]
      },
      modalValue: selected ? {
        name: 'name',
        description: 'description',
        price: 5,
        url: 'url',
      } : null,
    }
  });

  const mockStore = configureStore();
  let store;
  let mockDispatch;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders modal properly if it is selected on store', async () => {
    store = mockStore(initialState(true));
    mockDispatch = jest.fn();
    store.dispatch = mockDispatch;
    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <DetailsModal/>
      </Provider>
    );
    expect(getByText('name')).not.toBeNull();
    expect(getByText('description')).not.toBeNull();
    expect(getByText('$5')).not.toBeNull();
    expect(getByTestId('details-modal-image').props.source).toStrictEqual({uri: 'url'});
  });

  it('Renders nothing if there is not selected on store', async () => {
    store = mockStore(initialState(false));
    mockDispatch = jest.fn();
    store.dispatch = mockDispatch;
    const {queryByTestId, debug} = render(
      <Provider store={store}>
        <DetailsModal/>
      </Provider>
    );
    expect(queryByTestId('details-modal-modal-id')).not.toBeTruthy();
  });
});