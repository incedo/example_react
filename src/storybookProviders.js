import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/reducers';

export const withReduxAndRouter = (preloadedState) => (Story) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </Provider>
  );
};