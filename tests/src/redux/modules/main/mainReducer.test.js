import mainReducer from 'redux/modules/main/mainReducer';

describe('mainReducer', () => {
  test('Should return default state', () => {
    const initAction = {type: '', payload: {}};
    const defaultState = mainReducer(undefined, initAction);

    expect(defaultState).toEqual({});
  });
});
