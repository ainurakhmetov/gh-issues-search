import getData from './getData';

const CHANGE_PAGE = 'CHANGE_PAGE';

const changePage = page => (dispatch, getStore) => {
  const state = getStore();
  dispatch({
    type: CHANGE_PAGE,
    payload: page,
  });
  const url = `https://api.github.com/repos/${state.fetch.search}/issues?page=${page}&per_page=${state.fetch.perPage}`;
  getData(dispatch, state, url);
};

export default changePage;
