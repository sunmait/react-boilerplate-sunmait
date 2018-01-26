import axios from 'axios';

export const sendRequest = (data) => dispatch => {
  return axios.get('/some-url')
    .then((response) => {
      dispatch({
        type: 'SEND_REQUEST',
        payload: response.body,
      });
    });
};
