import axios from 'axios';

const GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST';
const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
const GET_ISSUES_FAIL = 'GET_ISSUES_FAIL';

const fetchIssues = () => (dispatch) => {
  dispatch({
    type: GET_ISSUES_REQUEST,
    payload: { error: false, isLoading: true },
  });
  axios
    .get(`https://api.github.com/repos/farooqmir/reactJsToDoApp/issues?page=1&per_page=10`)
    // { headers: { Accept: 'application/vnd.github.squirrel-girl-preview' } })
    .then((response) => {
      console.log(`resp ${response}`);
      dispatch({
        type: GET_ISSUES_SUCCESS,
        payload: { error: false, isLoading: false, data: response.data },
      });
    })
    .catch(() => dispatch({
      type: GET_ISSUES_FAIL,
      payload: { error: true, isLoading: false },
    }));
};

export default fetchIssues;
