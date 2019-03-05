import getData from './getData';

const GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST';

const fetchIssues = search => (dispatch, getStore) => {
  const state = getStore();
  dispatch({
    type: GET_ISSUES_REQUEST,
    payload: { error: false, isLoading: true, search },
  });
  const url = `https://api.github.com/repos/${search}/issues?page=1&per_page=${state.fetch.perPage}`;
  getData(dispatch, url, state);
};

export default fetchIssues;
