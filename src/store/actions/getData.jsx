import axios from 'axios';

const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
const GET_ISSUES_FAIL = 'GET_ISSUES_FAIL';

const getData = (dispatch, url, state) => {
  axios
    .get(url)
    .then((response) => {
      const showForward = response.data.length === state.fetch.perPage;
      dispatch({
        type: GET_ISSUES_SUCCESS,
        payload: {
          error: false,
          isLoading: false,
          data: response.data,
          showForward,
        },
      });
    })
    .catch(() => dispatch({
      type: GET_ISSUES_FAIL,
      payload: { error: true, isLoading: false },
    }));
};

export default getData;
