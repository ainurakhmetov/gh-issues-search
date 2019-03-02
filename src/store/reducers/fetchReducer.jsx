const GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST';
const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
const GET_ISSUES_FAIL = 'GET_ISSUES_FAIL';

const initialState = {
  data: [],
  error: '',
  isLoading: false,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case GET_ISSUES_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
        data: action.payload.data,
      };
    case GET_ISSUES_FAIL:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default fetchReducer;
