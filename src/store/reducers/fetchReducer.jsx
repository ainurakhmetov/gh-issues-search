const GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST';
const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
const GET_ISSUES_FAIL = 'GET_ISSUES_FAIL';
const CHANGE_PER_PAGE = 'CHANGE_PER_PAGE';
const CHANGE_PAGE = 'CHANGE_PAGE';

const initialState = {
  data: [],
  error: false,
  isLoading: false,
  perPage: 5,
  search: '',
  showForward: false,
  page: 1,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        ...state,
        search: action.payload.search,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case GET_ISSUES_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
        data: action.payload.data,
        showForward: action.payload.showForward,
      };
    case GET_ISSUES_FAIL:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case CHANGE_PER_PAGE:
      return {
        ...state,
        perPage: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default fetchReducer;
