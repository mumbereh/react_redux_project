import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import DetailsPage from './DetailsPage';

test('DetailsPage matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <DetailsPage />
      </Router>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
