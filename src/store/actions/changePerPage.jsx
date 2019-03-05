import getData from './getData';

const CHANGE_PER_PAGE = 'CHANGE_PER_PAGE';

const changePerPage = perPage => (dispatch, getStore) => {
  const state = getStore();
  dispatch({
    type: CHANGE_PER_PAGE,
    payload: perPage,
  });
  if (state.fetch.search) {
    const url = `https://api.github.com/repos/${state.fetch.search}/issues?page=1&per_page=${perPage}`;
    getData(dispatch, url, state);
  }
};


export default changePerPage;
