import store from '../Redux/store';

describe('Store', () => {
  test('store matches the snapshot', () => {
    expect(store.getState()).toMatchSnapshot();
  });
});
