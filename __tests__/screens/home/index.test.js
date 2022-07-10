import React from 'react';
import * as axios from "axios";
import { Provider } from 'react-redux';
import { render, waitFor } from '@testing-library/react-native';

import Home from '../../../src/screens/home';
import { store as realStore } from '../../../src/redux';
import configureStore from 'redux-mock-store';

jest.mock('axios');

describe('<Home />', () => {

  const mockStore = configureStore();
  let store;

  const initialState = (loading = true) => ({ 
    menu: {
      loading,
      menu: {
        currency: 'USD',
        menus: [{name: 'Name', items: []}]
      }
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Fetch data', async () => {
    const res = { data: { currency: 'USD', menus: [{name: 'Name', items: []}]} };
    axios.get.mockResolvedValue(res);
    const {findByText} = render(
      <Provider store={realStore}>
        <Home/>
      </Provider>
    );
    await waitFor(() => {
      const text = findByText('Name');
      expect(text).not.toBeNull();
    });
  });

  it('Renders loading if loading', async () => {
    store = mockStore(initialState());
    const mockDispatch = jest.fn();
    store.dispatch = mockDispatch;
    const {getByTestId} = render(
      <Provider store={store}>
        <Home/>
      </Provider>
    );
    expect(getByTestId('loading-screen')).not.toBeNull();
  });

  it('Renders list if not loading', async () => {
    store = mockStore(initialState(false));
    const mockDispatch = jest.fn();
    store.dispatch = mockDispatch;
    const {findByText} = render(
      <Provider store={store}>
        <Home/>
      </Provider>
    );
    expect(findByText('Name')).not.toBeNull();
  });
});