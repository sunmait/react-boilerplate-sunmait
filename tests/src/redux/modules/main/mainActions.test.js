import axios from 'axios';
import * as mainActions from 'redux/modules/main/mainActions';

describe('mainActions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('method sendRequest', () => {
    test('should send GET request to `/some-url`', () => {
      const dispatchSpy = jest.fn();

      return mainActions.sendRequest({})(dispatchSpy)
        .then(() => {
          const urlArg = axios.get.mock.calls[0][0];
          expect(urlArg).toBe('/some-url');
        });
    });
  });
});
