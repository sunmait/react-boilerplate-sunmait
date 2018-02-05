import rootReducer from 'redux/rootReducer';

jest.mock('redux', () => ({
  combineReducers: jest.fn(reducersObj => reducersObj),
}));

describe('rootReducer', () => {
  test('should be an object of correct format', () => {
    expect(rootReducer).toHaveProperty('main');
    expect(Object.keys(rootReducer).length).toBe(1);
  });
});
